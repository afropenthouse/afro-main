import { ISendToVibeEazyUser, IWalletDepositBody, IWithdrawFromWallet } from "../../interfaces/wallet-interface";
import { catchAuthError } from "../../middlewares/wrapper";
import prismaClient from "../../prisma/pris-client";
import { createVirtualAccount, getAccountNumberDetail, getBankCodes, initiateBankTransfer } from "../../services/flutterwave";
import ResponseHandler from "../../utils/response-handler";
import { generateTransactionRef } from "../../utils/transaction-utils";
import { bcryptCompare } from "../../utils/user-utils";
import { getCashwyreBankCodes, accountLookup } from "../../services/cashwyre";
import { initiateCashwyrePayout } from "../../services/cashwyre";
import { IWithdrawFromWalletCashwyre } from "../../interfaces/wallet-interface";

export const createVirtualAccountNumber = catchAuthError(async(req,res,next)=>{

    const {bvn,pin}:IWalletDepositBody = req.body

    const user = await prismaClient.user.findFirst(
        {where:{id:req.user?.userId},
        include:{wallet:true}
    })

    if(!user){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }
    const userWallet = user.wallet
    
    if( !userWallet || userWallet?.virtualAccountNumber){
        return ResponseHandler.sendErrorResponse({res,error:"Virtual account number already created"})
    }

    if(!user.pin){
        return ResponseHandler.sendErrorResponse({res,error:"Pin has not yet been created"})
    }

    const isPinValid = await bcryptCompare({hashedPassword:user.pin,password:pin})

    if(!isPinValid){
        return ResponseHandler.sendErrorResponse({res,error:"Supplied pin invalid"})
    }

    // create virtual account number
    const virtualAccountDetails = await createVirtualAccount({
        bvn,tx_ref:userWallet.walletRef,
        email:user.email,narration:user.username || ""
    })

    if(!virtualAccountDetails){
        return ResponseHandler.sendErrorResponse({res,error:"Error creating virtual account number"})
    }
    
    //update wallet with data
    const updatedWallet = await prismaClient.userWallet.update({
        where:{id:userWallet.id},
        data:{
            virtualAccountNumber:virtualAccountDetails.data.account_number,
            virtualAccountBankName:virtualAccountDetails.data.bank_name,
            virtualAccountCreatedAt: new Date()
        },
        omit:{
            userId:true,
        }
    })

    return ResponseHandler.sendSuccessResponse({res,
        message:"Virtual Account successfully created",
        data:updatedWallet
    })
})


export const getWalletInfo = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }
    const wallet = await prismaClient.userWallet.findFirst({
        where:{userId},omit:{userId:true}
    })
    if(!wallet){
        console.log("Wallet not created yet, set up profile")
        return ResponseHandler.sendErrorResponse({res,error:"Wallet not created yet, set up profile",status_code:"COMPLETE_PROFILE"})
    }
    const transactions = await prismaClient.transactions.findMany({
        where:{
            featureId:wallet.id,
        },
        orderBy:{
            createdAt:"desc"
        }
    })

    return ResponseHandler.sendSuccessResponse({res,data:{
        wallet:{
            ...wallet,transactions
        }
    }})
})

export const sendToVibeEazyUser = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId
    console.log(userId,"app-console")

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }

    const {username,amount,pin}:ISendToVibeEazyUser = req.body

    const recipient = await prismaClient.user.findFirst({
        where:{username},
        include:{wallet:true}
    })

    if(!recipient){
        return ResponseHandler.sendErrorResponse({res,error:"Username supplied invalid"})
    }

    const userWallet = await prismaClient.userWallet.findFirst({
        where:{userId},
        include:{user:true}
    })

    if(!userWallet){
        return ResponseHandler.sendErrorResponse({res,error:"Wallet has not been created"})
    }

    const userPin = userWallet.user?.pin
    if(!userPin){
        return ResponseHandler.sendErrorResponse({res,error:"No pin has been created"})
    }

    const isPinValid = await bcryptCompare({password:pin,hashedPassword:userPin})
    if(!isPinValid){
        return ResponseHandler.sendErrorResponse({res,error:"Pin supplied is invalid"})
    }
    const isAmountSendable = userWallet.balance >= amount

    if(!isAmountSendable){
        return ResponseHandler.sendErrorResponse({res,error:"Insufficient amount in balance"})
    }

    //If all validation passed, then we can make transaction

    //credit transaction for  recipient
    const creditTransaction = prismaClient.transactions.create({
        data:{
            txRef:generateTransactionRef(),
            amount,
            userId:recipient.id,
            productDescription:"IN_APP_TRANSFER",
            featureId:recipient.wallet?.id || "",
            name:`Transfer from ${userWallet.user?.username}`,
            type:"CREDIT",
            status:"SUCCESS"
        }
    })

    //debit transaction for user
    const debitTransaction = prismaClient.transactions.create({
        data:{
            txRef:generateTransactionRef(),
            amount,
            userId,
            productDescription:"IN_APP_TRANSFER",
            featureId:userWallet.id,
            name:`Transfer to ${recipient.username}`,
            type:"CREDIT",
            status:"SUCCESS"
        }
    })

    const recipientWallet = await prismaClient.userWallet.findUnique({
        where:{id:recipient.wallet?.id}
    })

    if(!recipientWallet){
        return ResponseHandler.sendErrorResponse({res,error:"Unable to initiate transfer to this recipient",code:500})
    }

    //Increase recipient wallet
    const creditWalletUpdate =  prismaClient.userWallet.update({
        where:{id:recipient.wallet?.id},
        data:{
            balance:{increment:amount}
        }
    })

    //reduce senders wallet
    const debitWalletUpdate  = prismaClient.userWallet.update({
        where:{id:userWallet.id},
        data:{
            balance:{decrement:amount}
        }
    })

    //Create  notification for users
    const notifications = prismaClient.notifications.createMany({
        data:[
            {
                userId,
                type:"WALLET",
                content:`You sent ${amount} to ${req.user?.username}`
            },
            {
                userId:recipient.id,
                type:"WALLET",
                content:`${req.user?.username} sent you ${amount}`
            },
        ]
    })

    await prismaClient.$transaction(
        [
        creditTransaction,
        debitTransaction,
        creditWalletUpdate,
        debitWalletUpdate,
        notifications
    ])

    return ResponseHandler.sendSuccessResponse({res,message:`${amount} successfully sent to ${username}`})
})


export const getAllBanks = catchAuthError(async(req,res,next)=>{
    const allBanks = await getBankCodes()
    if(!allBanks){
        return ResponseHandler.sendErrorResponse({res,error:"Service is temporally  unavailable",code:500})
    }
    return ResponseHandler.sendSuccessResponse({res,data:allBanks})
})

export const verifyAccountNumber = catchAuthError(async(req,res,next)=>{
    const {accountNumber,bankCode}:IWithdrawFromWallet = req.body

    const accountDetails = await getAccountNumberDetail({accountNumber,bankCode})

    if(!accountDetails){
        return ResponseHandler.sendErrorResponse({res,error:"Unable to verify account number"})
    }else{
        return ResponseHandler.sendSuccessResponse({res,data:accountDetails.data})
    }
})

export const withdrawToExternalBank = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    const {amount,bankCode,accountNumber}:IWithdrawFromWallet = req.body

    if(!userId){
        if(!userId){
            return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
        }    
    }

    const userWallet = await prismaClient.userWallet.findFirst({where:{
        userId
    }})

    if(!userWallet){
        return ResponseHandler.sendErrorResponse({res,error:"Wallet not created yet, set up profile",status_code:"COMPLETE_PROFILE"})
    }

    if(userWallet.balance < amount){
        return ResponseHandler.sendErrorResponse({res,error:"Insufficient funds in wallet"})
    }

    //create venue transaction
    const transaction = await prismaClient.transactions.create({
      data:{
          txRef:generateTransactionRef(),
          status:"PENDING",
          userId,
          productDescription:"OUTWARD_WITHDRAWAL",
          featureId:userWallet.id,
          amount,
          type:"DEBIT",
          name:"Withdrawal to Bank"
      }
    })

    const paymentStatus = await initiateBankTransfer({accountNumber,bankCode,amount,tx_ref:transaction.txRef,narration:"withdrawal"})

    console.log(paymentStatus,"app-console")

    if(!paymentStatus){
        await prismaClient.transactions.update({
            where:{id:transaction.id},
            data:{status:"FAIL"}
        })

        return ResponseHandler.sendErrorResponse({res,error:"payment could not be completed, try again"})
    }

    await prismaClient.userWallet.update({
        where:{userId},
        data:{
            balance:{
                decrement:amount
            }
        }
    })

    return ResponseHandler.sendSuccessResponse({res,message:`payment of NGN ${amount} is been processed`})

})


export const getCashwyreBanks = catchAuthError(async(req,res,next)=>{
    const allBanks = await getCashwyreBankCodes()
    if(!allBanks){
        return ResponseHandler.sendErrorResponse({res,error:"Service is temporally  unavailable",code:500})
    }
    return ResponseHandler.sendSuccessResponse({res,data:allBanks})
})



export const withdrawToExternalBankCashwyre = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    const {amount,bankCode,accountNumber, accountName, pin}:IWithdrawFromWalletCashwyre = req.body

    if(!userId){
        if(!userId){
            return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
        }    
    }

    const userWallet = await prismaClient.userWallet.findFirst({where:{
        userId
    },
    include:{user:true}
})

    if(!userWallet){
        return ResponseHandler.sendErrorResponse({res,error:"Wallet not created yet, set up profile",status_code:"COMPLETE_PROFILE"})
    }

    const userPin = userWallet.user?.pin
    if(!userPin){
        return ResponseHandler.sendErrorResponse({res,error:"No pin has been created"})
    }

    const isPinValid = await bcryptCompare({password:pin,hashedPassword:userPin})
    if(!isPinValid){
        return ResponseHandler.sendErrorResponse({res,error:"Pin supplied is invalid"})
    }

    if(userWallet.balance < amount){
        return ResponseHandler.sendErrorResponse({res,error:"Insufficient funds in wallet"})
    }

    //create venue transaction
    const transaction = await prismaClient.transactions.create({
      data:{
          txRef:generateTransactionRef(),
          status:"PENDING",
          userId,
          productDescription:"OUTWARD_WITHDRAWAL",
          featureId:userWallet.id,
          amount,
          type:"DEBIT",
          name:"Withdrawal to Bank"
      }
    })

    const paymentStatus = await initiateCashwyrePayout(bankCode, accountName, accountNumber, amount, transaction.txRef)

    console.log(paymentStatus,"app-console")

    if(!paymentStatus){
        await prismaClient.transactions.update({
            where:{id:transaction.id},
            data:{status:"FAIL"}
        })

        return ResponseHandler.sendErrorResponse({res,error:"payment could not be completed, try again"})
    }

    await prismaClient.userWallet.update({
        where:{userId},
        data:{
            balance:{
                decrement:amount
            }
        }
    })

    return ResponseHandler.sendSuccessResponse({res,message:`payment of NGN ${amount} is been processed`})

})

export const verifyCashwyreAccountNumber = catchAuthError(async(req,res,next)=>{
    const {accountNumber,bankCode}:IWithdrawFromWallet = req.body

    const accountDetails = await accountLookup(accountNumber,bankCode)

    if(!accountDetails){
        return ResponseHandler.sendErrorResponse({res,error:"Unable to verify account number"})
    }else{
        return ResponseHandler.sendSuccessResponse({res,data:accountDetails.data})
    }
})

