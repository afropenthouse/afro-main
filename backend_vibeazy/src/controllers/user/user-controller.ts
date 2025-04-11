import { IPinCreateBody } from "../../interfaces/user-interface"
import { catchAuthError } from "../../middlewares/wrapper"
import prismaClient from "../../prisma/pris-client"
import ResponseHandler from "../../utils/response-handler"
import { bcryptHash } from "../../utils/user-utils"

export const getWalletInfo = catchAuthError(async(req,res,next)=>{
    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }
    const wallet = await prismaClient.userWallet.findFirst({
        where:{userId}
    })
    if(!wallet){
        return ResponseHandler.sendErrorResponse({res,error:"Wallet not created yet, set up profile",status_code:"COMPLETE_PROFILE"})
    }
    const transactions = await prismaClient.transactions.findMany({
        where:{
            featureId:wallet.id
        }
    })

    return ResponseHandler.sendSuccessResponse({res,data:{
        wallet:{
            ...wallet,transactions
        }
    }})
 })


export const createPin = catchAuthError(async(req,res,next)=>{

    const {pin}:IPinCreateBody = req.body 
    
    const user = await prismaClient.user.findFirst({where:{id:req.user?.userId}})

    if(!user || user.hasCreatedPin){
        return ResponseHandler.sendErrorResponse({res,error:"Pin has already been created",code:400})
    }
    
    const hashedPin = await bcryptHash(pin)

    await prismaClient.user.update({
        where:{id:user.id},
        data:{
            pin:hashedPin,
            hasCreatedPin:true
        }
    })

    return ResponseHandler.sendSuccessResponse({res,message:"Pin created successfully"}) 
})

export const getUserProfileDetail = catchAuthError(async(req,res,next)=>{
        
    const user = await prismaClient.user.findFirst({where:{id:req.user?.userId}})

    if(!user){
        return ResponseHandler.sendErrorResponse({res,error:"User does not exist",code:400})
    }

    const profile = await prismaClient.user.findFirst({
        where:{id:user.id},
        select:{
            username:true,
            firstName:true,
            lastName:true,
            email:true,
            profileImage:true,
            _count:{
                select:{
                    referrals:true
                }
            }
        },  
    })

    return ResponseHandler.sendSuccessResponse({res,data:profile})

})