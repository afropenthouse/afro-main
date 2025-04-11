import { IAddUserToGroup, ICreateNewGroupBody, IDepositOrWithdrawInGroupWallet, IJoinWithLink, IWithdrawFromGroup } from "../../interfaces/group-interfaces";
import { catchAuthError } from "../../middlewares/wrapper";
import prismaClient from "../../prisma/pris-client";
import { initiateBankTransfer } from "../../services/flutterwave";
import { generateGroupLink } from "../../utils/group-utils";
import ResponseHandler from "../../utils/response-handler";
import { generateTransactionRef } from "../../utils/transaction-utils";
import { initiateCashwyrePayout } from "../../services/cashwyre";
import { bcryptCompare } from "../../utils/user-utils";


export const getAllUserGroups = catchAuthError(async(req,res,next)=>{
    
    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }

    const userGroups =await prismaClient.individualWallet.findMany({
        where:{userId},
        include:{collection:true}
    })

    const transformedGroup = userGroups.map(({collection,...item})=>{
        return{
            ...item,collection:{...collection,isAdmin:userId === collection.adminId}
        }
    })

    return ResponseHandler.sendSuccessResponse({res,data:transformedGroup})
})

export const getSingleGroupDetail = catchAuthError(async (req, res, next) => {
    const userId = req.user?.userId;

    if (!userId) {
        return ResponseHandler.sendErrorResponse({
            res,
            error: "Server error",
            code: 500,
        });
    }

    const groupId = req.params.id;

    const collectiveWallet = await prismaClient.collectiveWallet.findFirst({
        where: { id: groupId },
        include: {
            individuals: true,
            transactions: true, // Include related transactions
        },
    });

    if (!collectiveWallet) {
        return ResponseHandler.sendErrorResponse({
            res,
            error: "Collective wallet not found",
        });
    }

    return ResponseHandler.sendSuccessResponse({
        res,
        data: collectiveWallet,
    });
});


export const createNewGroupWallet = catchAuthError(async(req,res,next)=>{

    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }

    const {groupLogo,name}:ICreateNewGroupBody = req.body
    
    const sharableLink = generateGroupLink()

    const newGroup = await prismaClient.collectiveWallet.create({
        data:{
            adminId:userId,
            name,groupLogo,sharableLink,
            individuals:{
                create:{
                    userId,
                }
            }
        }
    })

    return ResponseHandler.sendSuccessResponse({res,data:newGroup})

})

export const addUserToGroup = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }

    const {username,groupId}:IAddUserToGroup = req.body

    const searchedUser = await prismaClient.user.findFirst({where:{username:{
        contains:username,
        mode:"insensitive"
    }}})

    if(!searchedUser){
        return ResponseHandler.sendErrorResponse({res,error:"Username does not exist"})
    }

    const collectiveWallet = await prismaClient.collectiveWallet.findFirst({
        where:{id:groupId}
    })

    if(!collectiveWallet){
        return ResponseHandler.sendErrorResponse({res,error:"No collective wallet found"})
    }

    if(collectiveWallet.adminId !== userId){
        return ResponseHandler.sendErrorResponse({res,error:"Not permitted to add user",code:401})
    }

    const isAlreadyAMember = await prismaClient.individualWallet.findFirst({
        where:{ userId:searchedUser.id,collectionId:groupId,}
    })

    if(isAlreadyAMember){
        return ResponseHandler.sendErrorResponse({res,error:"User is already a member"})
    }

    await prismaClient.individualWallet.create({
        data:{
            userId:searchedUser.id,collectionId:groupId
        }
    })

    return ResponseHandler.sendSuccessResponse({res,message:`${username} has been added to ${collectiveWallet.name}`})
})


export const joinGroupThroughLink = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }
    
    const {sharableLink}:IJoinWithLink = req.body

    const isLinkValid = await prismaClient.collectiveWallet.findFirst({
        where:{sharableLink}
    })

    if(!isLinkValid){
        return ResponseHandler.sendErrorResponse({res,error:"Link is invalid"})
    }

    const isAlreadyAMember = await prismaClient.individualWallet.findFirst({
        where:{
            userId,collectionId:isLinkValid.id
        }
    })

    if(isAlreadyAMember){
        return ResponseHandler.sendErrorResponse({res,error:"Already a member of this group"})
    }

    await prismaClient.individualWallet.create({
        data:{
            userId,collectionId:isLinkValid.id
        }
    })

    return ResponseHandler.sendSuccessResponse({res,message:`Successfully added to the group`,data:{
        groupId:isLinkValid.id
    }})
})

export const depositIntoGroup = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }

    const {groupId,amount}:IDepositOrWithdrawInGroupWallet = req.body

    const collectiveWallet = await prismaClient.collectiveWallet.findFirst({
        where:{id:groupId},
        include:{individuals:true}
    })
    if(!collectiveWallet){
        return ResponseHandler.sendErrorResponse({res,error:"No group found "})
    }

    const isAMember = await prismaClient.individualWallet.findFirst({
        where:{
            collectionId:groupId,
            userId,
        }
    })

    if(!isAMember){
        return ResponseHandler.sendErrorResponse({res,error:"Not a member of this group"})
    }

    const userWallet = await prismaClient.userWallet.findFirst({
        where:{userId}
    })

    if(!userWallet || userWallet.balance < amount){
        return ResponseHandler.sendErrorResponse({res,error:"Insufficient balance in wallet"})
    }

    //update necessary fields and create notifications and transactions

    const walletOperations = [
        //update group wallet balance
        prismaClient.collectiveWallet.update({
            where:{id:groupId},
            data:{
                groupBalance:{increment:amount},
                lastDepositedAt: new Date()
            }
        }),

        //increment user wallet balance
        prismaClient.userWallet.update({
            where:{id:userWallet.id},
            data:{
                balance:{decrement:amount},
                lastWithdrawalAt: new Date()
            }
        }),
    ]

    const transactionOperations = [
        //create credit transaction for group wallet
        prismaClient.transactions.create({
            data:{
                txRef:generateTransactionRef(),
                userId,
                type:"CREDIT",
                amount,
                name:`${req.user?.username} Deposit`,
                productDescription:"GROUP_WALLET",
                featureId:collectiveWallet.id
            }
        }),

        //create debit transaction for user wallet
        prismaClient.transactions.create({
            data:{
                txRef:generateTransactionRef(),
                userId,
                type:"DEBIT",
                amount,
                name:`${collectiveWallet.name} Deposit`,
                productDescription:"WALLET",
                featureId:userWallet.id   
            }
        })
    ]

    //Create personal notification for every user
    const notificationOperations = prismaClient.notifications.createMany({
        data:collectiveWallet.individuals.map((item)=>{
            return {
                userId:item.userId,
                type:"COLLECTION_GROUP",
                content:`${req.user?.username} Deposited ${amount} into ${collectiveWallet.name}`
            }
        })  
    })

    const individualWallet =  prismaClient.individualWallet.update({
        where:{id:isAMember.id},
        data:{
            contributedAmount:{increment:amount}
        }
    })

    const operations = [...walletOperations,...transactionOperations,notificationOperations,individualWallet]

    //update all in a single operation
    await prismaClient.$transaction(operations)
    return ResponseHandler.sendSuccessResponse(
        {res,message:`Successfully deposited ${amount} into ${collectiveWallet.name}`}
    )
})

export const withdrawFromGroup = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }

    const {groupId,amount,username}:IDepositOrWithdrawInGroupWallet = req.body

    const collectiveWallet = await prismaClient.collectiveWallet.findFirst({
        where:{id:groupId},
        include:{individuals:true}
    })

    if(!collectiveWallet){
        return ResponseHandler.sendErrorResponse({res,error:"No group found "})
    }

    //only admins are allowed to make withdrawals
    const isAdmin = collectiveWallet.adminId === userId

    if(!isAdmin){
        return ResponseHandler.sendErrorResponse({res,error:"Not permitted to withdraw from this group",code:401})
    }

    const destinationUser = await prismaClient.user.findFirst({
        where:{username},
        include:{wallet:true}
    })

    if(!destinationUser){
        return ResponseHandler.sendErrorResponse({res,error:"username supplied is invalid"})
    }
    const userWallet = destinationUser.wallet

    if(!userWallet){
        return ResponseHandler.sendErrorResponse({res,error:"supplied user has no active wallet"})
    }
    
    //update necessary fields and create notifications and transactions

    const walletOperations = [
        //decrement group wallet balance
        prismaClient.collectiveWallet.update({
            where:{id:groupId},
            data:{
                groupBalance:{decrement:amount},
                lastWithdrawalAt:new Date()
            }
        }),

        //increase user wallet balance
        prismaClient.userWallet.update({
            where:{id:userWallet.id},
            data:{
                balance:{increment:amount},
                lastDepositedAt:new Date()
            }
        }),
    ]

    const transactionOperations = [
        //create debit transaction for group wallet
        prismaClient.transactions.create({
            data:{
                txRef:generateTransactionRef(),
                userId,
                type:"DEBIT",
                amount,
                name:`${req.user?.username} Withdrawal`,
                productDescription:"GROUP_WALLET",
                featureId:collectiveWallet.id
            }
        }),

        //create credit transaction for user wallet
        prismaClient.transactions.create({
            data:{
                txRef:generateTransactionRef(),
                userId,
                type:"CREDIT",
                amount,
                name:`${collectiveWallet.name} Withdrawal`,
                productDescription:"WALLET",
                featureId:userWallet.id   
            }
        })
    ]

    //Create personal notification for every user
    const notificationOperations = prismaClient.notifications.createMany({
        data:collectiveWallet.individuals.map((item)=>{
            return {
                userId:item.userId,
                type:"COLLECTION_GROUP",
                content:`${req.user?.username} withdrew ${amount} from ${collectiveWallet.name}`
            }
        })  
    })

    const operations = [...walletOperations,...transactionOperations,notificationOperations]

    //update all in a single operation
    await prismaClient.$transaction(operations)
    return ResponseHandler.sendSuccessResponse(
        {res,message:`Successfully withdrew ${amount} into ${username} wallet`}
    )
})

export const withdrawFromGroupToExternalBank = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }

    const {groupId,amount,accountNumber,bankCode, accountName, pin}:IWithdrawFromGroup = req.body
   
    const collectiveWallet = await prismaClient.collectiveWallet.findFirst({
        where:{id:groupId},
        include:{individuals:true}
    })

    if(!collectiveWallet){
        return ResponseHandler.sendErrorResponse({res,error:"No group found "})
    }
    
    //only admins are allowed to make withdrawals
    const isAdmin = collectiveWallet.adminId === userId

    if(!isAdmin){
        return ResponseHandler.sendErrorResponse({res,error:"Not permitted to withdraw",code:401})
    }

    const userWallet = await prismaClient.userWallet.findFirst({
        where:{userId},
        include:{user:true}
    })

    if(!userWallet){
        return ResponseHandler.sendErrorResponse({res,error:"User has no active wallet"})
    }

    const userPin = userWallet.user?.pin
    if(!userPin){
        return ResponseHandler.sendErrorResponse({res,error:"No pin has been created"})
    }

    const isPinValid = await bcryptCompare({password:pin,hashedPassword:userPin})

    if(!isPinValid){
        return ResponseHandler.sendErrorResponse({res,error:"Pin supplied is invalid"})
    }

    if (collectiveWallet.groupBalance < amount ){
        return ResponseHandler.sendErrorResponse({res,error:"Insufficient fund in group"})
    }
    
    const transaction = await prismaClient.transactions.create({
        data:{
            txRef:generateTransactionRef(),
            status:"PENDING",
            userId,
            productDescription:"GROUP_WALLET",
            featureId:collectiveWallet.id,
            amount,
            type:"DEBIT",
            name:"Withdrawal To Bank",
            collectiveWalletId: groupId
        }
      })
  
      const paymentStatus = await initiateCashwyrePayout(bankCode, accountName, accountNumber,amount,transaction.txRef)

      if(!paymentStatus){
        await prismaClient.transactions.update({
            where:{id:transaction.id},
            data:{status:"FAIL"}
        })

        return ResponseHandler.sendErrorResponse({res,error:"payment could not be completed, try again"})
    }

    await prismaClient.collectiveWallet.update({
        where:{id:collectiveWallet.id},
        data:{
            groupBalance:{
                decrement:amount
            }
        }
    })

    return ResponseHandler.sendSuccessResponse({res,message:`payment of NGN ${amount} is being processed`})
})