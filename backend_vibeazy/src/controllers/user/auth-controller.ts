import prismaClient from "../../prisma/pris-client";
import { catchAuthError, catchDefaultError } from "../../middlewares/wrapper";
import { ISignUpBody, IForgotPasswordBody, ILoginBody, IRefreshTokenBody, IVerifyEmailBody } from "../../interfaces/user-interface";
import { mailSender } from "../../services/mail-services";
import ResponseHandler from "../../utils/response-handler";
import { bcryptCompare, bcryptHash, generateOTP } from "../../utils/user-utils";
import { setTimeInFuture } from "../../utils/time-utils";
import { signAccessToken, signRefreshToken } from "../../utils/token-utils";
import {generateDeviceId} from "../../utils/client-utils"
import { generateWalletRef } from "../../utils/wallet-utils";
import { ReferralAmount } from "../../config/constants";
import { generateTransactionRef } from "../../utils/transaction-utils";


export const userSignUp = catchDefaultError(async(req,res,next)=>{
    const {email,username,password,phoneNumber,referralUsername}:ISignUpBody = req.body

    const userEmail = email.toLowerCase()

    //check if email already exists
    const existingUser = await prismaClient.user.findFirst({
        where:{email:userEmail}
    })

    //if user exists and mail is verified , send an error message
    if(existingUser && existingUser.isMailVerified){
        return ResponseHandler.sendErrorResponse({res,error:"Email Already Existing"})
    }

    //Ensure username is unique
    //mock === MoCk (case insensitive)
    const isUserNameExisting = await prismaClient.user.findFirst({
        where:{
            username
        }
    })

    //only validate username for a new user
    if(!existingUser && isUserNameExisting ){
        return ResponseHandler.sendErrorResponse({res,error:"username already taken"})
    }
    
    let referralId:string| null = null

    if(referralUsername){
        const referralUser = await prismaClient.user.findFirst({where:{
            username:referralUsername},
            include:{wallet:true}
        })

        if(!referralUser){
            return ResponseHandler.sendErrorResponse({res,error:"username is invalid"})
        }
        referralId = referralUser.id
        
        //update referral user referral balance
        const walletUpdate =  prismaClient.userWallet.update({where:{id:referralUser.wallet?.id},data:{
            referralBalance:{increment:ReferralAmount}
        }})
        
        const transaction = prismaClient.transactions.create({
            data:{txRef:generateTransactionRef(),
            amount:ReferralAmount,
            userId:referralUser.id,
            productDescription:"REFERRAL",
            featureId:referralUser.wallet?.id || "",
            name:`Refferal bonus`,
            type:"CREDIT"}
        })

        

        const notification =  prismaClient.notifications.create({data:{
            userId: referralUser.id,
            type: "WALLET",
            content:`You referred ${username} to vibe!`
        }
        })
        await prismaClient.$transaction([walletUpdate,transaction,notification])
    }


    const hashedPassword = await bcryptHash(password)
    


    let newUserId:string = "";

    //create a new user instance if user is not existing
    //create wallets for user too
    if(!existingUser){
        const newUser = await prismaClient.user.create({
            data: {
                email,
                username,
                phoneNumber,
                password: hashedPassword,
                referredById: referralId,
                wallet: {
                    create: {
                        walletRef: generateWalletRef(),
                        referralBalance: 1000,
                    }
                }
            }
        })
        
        newUserId = newUser.id
    }
    
    if (referralUsername) {
        await prismaClient.user.update({
            where: { username: referralUsername },
            data: {
                referrals: {
                    connect: { id: newUserId } // 👈 Connects the new user to the referrer
                }
            }
        })
    }
    const otpCode = generateOTP()
    await mailSender({to:email,subject:"VibeEasy Sign up code",body:otpCode,name:`VibeEasy Verification`})

    const otpObject = await prismaClient.verificationOTP.create({
        data:{
            otpCode,
            userId:existingUser?.id || newUserId,
            type:"MAIL_VERIFICATION",
            expiredTime:setTimeInFuture(Number(process.env.OTP_EXPIRY_MINUTE))
        }
    })

    return ResponseHandler.sendSuccessResponse({res,message:"Verification has been sent to email",data:{
        verificationId:otpObject.id
    }})
 })


export const verifyUserEmail = catchAuthError(async(req,res,next)=>{

    const {verificationId,otpCode}:IVerifyEmailBody = req.body
    
    const otpObject = await prismaClient.verificationOTP.findFirst({
        where:{
            id:verificationId,type:"MAIL_VERIFICATION",otpCode,
            expiredTime:{
                gt:new Date()
            }
        },include:{
            user:true
        }
    })
    if (!otpObject){
        return ResponseHandler.sendErrorResponse({res,error:"OTP supplied invalid or expired"})
    }

    if(otpObject.user.isMailVerified){
        return ResponseHandler.sendErrorResponse({res,error:"Email Already verified"})
    }
    //if OTP is valid, verify user
    
    await prismaClient.user.update({
        where:{id:otpObject.userId},
        data:{isMailVerified:true}
    })

    await prismaClient.verificationOTP.deleteMany({
        where:{
            type:"MAIL_VERIFICATION",userId:otpObject.userId
        }
    })
    const newUser = otpObject.user

    req.user = {
        userId:newUser.id,
        email:newUser.email,
        username:newUser.username,
        firstName:newUser.firstName,
        lastName:newUser.lastName,
        phoneNumber:newUser.lastName,
        profileImage:newUser.profileImage
    }
    return next()

})


export const verifyLoginCredentials = catchAuthError(async(req,res,next)=>{
    const {email,password}:ILoginBody = req.body

    const loginUser = await prismaClient.user.findFirst({
        where:{email},
        include:{wallet:true}
    })

    if(!loginUser){
        return ResponseHandler.sendErrorResponse({res,error:"Invalid sign In credentials"})
    }

    if(!loginUser.isMailVerified){
        return ResponseHandler.sendErrorResponse({res,error:"Email not verified",status_code:"EMAIL_REDIRECT"})
    }

    if(!loginUser.wallet){
        return ResponseHandler.sendErrorResponse({res,error:"Wallet not created yet, set up profile",status_code:"COMPLETE_PROFILE"})
    }

    const isPasswordValid = await bcryptCompare({password,hashedPassword:loginUser.password})

    if(!isPasswordValid){
        return ResponseHandler.sendErrorResponse({res,error:"Invalid sign In credentials"})
    }
    
    req.user = {
        userId:loginUser.id,
        email:loginUser.email,
        username:loginUser.username,
        firstName:loginUser.firstName,
        lastName:loginUser.lastName,
        phoneNumber:loginUser.phoneNumber,
        profileImage:loginUser.profileImage
    }
    return next()
})

export const signInUser = catchAuthError(async(req,res,next)=>{
    const user = req.user
    if(!user){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }
    const accessToken = signAccessToken({userId:user.userId,email:user.userId})
    const refreshToken = signRefreshToken({userId:user.userId})
    const deviceFingerPrint = generateDeviceId(req)

    const isSessionExisting = await prismaClient.session.findFirst({
        where:{
            userId:user.userId,deviceFingerPrint
        }
    })

    const sessionDuration = Number(process.env.SESSION_DURATION)
    if(isSessionExisting){
        await prismaClient.session.update({
            where:{
                id:isSessionExisting.id
            },
            data:{
                accessToken,refreshToken,
                expiredAt:setTimeInFuture(sessionDuration)
            }
        })
    }else{
        await prismaClient.session.create({
            data:{
                userId:user.userId,
                accessToken,refreshToken,deviceFingerPrint,
                expiredAt:setTimeInFuture(sessionDuration)
            }
        })
    }

    return ResponseHandler.sendSuccessResponse({res,data:{
        accessToken,refreshToken,user
    }})
})

export const refreshUserToken = catchAuthError(async(req,res,next)=>{
    const user = req.user

    if(!user){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }

    const {email,userId} = user
    const newAccessToken = signAccessToken({email,userId})

    const {refreshToken}:IRefreshTokenBody = req.body 

    const deviceFingerPrint = generateDeviceId(req)

    const userSession = await prismaClient.session.findFirst({
        where:{
            userId,deviceFingerPrint,refreshToken
        }
    })

    if(!userSession){
        return ResponseHandler.sendErrorResponse({res,code:400,error:"Token invalid or expired",status_code:"LOGIN_REDIRECT"})
    }

    const sessionDuration = Number(process.env.SESSION_DURATION)

    await prismaClient.session.update({
        where:{id:userSession.id},
        data:{
            accessToken:newAccessToken,
            expiredAt:setTimeInFuture(sessionDuration)
    }})
    
    return ResponseHandler.sendSuccessResponse({res,data:{
        accessToken:newAccessToken,refreshToken,user:req.user
        }
    
    })
})  

export const logOutUser = catchAuthError(async(req,res,next)=>{
    const user = req.user

    if(!user){
        return ResponseHandler.sendErrorResponse({res,error:"server error",code:500})
    }
    
    const {userId} = user

    const deviceFingerPrint = generateDeviceId(req)

    const userSession = await prismaClient.session.findFirst({
        where:{
            userId,deviceFingerPrint
        }
    })

    if(!userSession){
        return ResponseHandler.sendErrorResponse({res,code:500,error:"server error"})
    }
  
    await prismaClient.session.delete({
        where:{
            id:userSession.id
        },
    })
    return ResponseHandler.sendSuccessResponse({res})
})

export const forgotPassword = catchDefaultError(async(req,res,next)=>{
    const {email}:ISignUpBody = req.body
    
    const user = await prismaClient.user.findFirst({
        where:{email}
    })
    if(!user){
        return ResponseHandler.sendErrorResponse({res,error:"User does not exist in the application"})
    }

    const otpCode = generateOTP()

    const otpObject = await prismaClient.verificationOTP.create({
        data:{
            otpCode,
            type:"RESET_PASSWORD",
            userId:user.id,
            expiredTime:setTimeInFuture(Number(process.env.OTP_EXPIRY_MINUTE))
        }
    })
    await mailSender({to:email,subject:"VibeEasy Reset password code",body:otpCode,name:`VibeEasy Verification`})

    return ResponseHandler.sendSuccessResponse({res,message:"Reset password verification has been sent to email",data:{
        verificationId:otpObject.id
    }})
})

export const resetPassword = catchDefaultError(async(req,res,next)=>{

    const {verificationId,otpCode,password}:IForgotPasswordBody = req.body
    
    const otpObject = await prismaClient.verificationOTP.findFirst({
        where:{
            id:verificationId,type:"RESET_PASSWORD",otpCode,
            expiredTime:{
                gt:new Date()
            }
        },include:{
            user:true
        }
    })
    if (!otpObject){
        return ResponseHandler.sendErrorResponse({res,error:"OTP supplied invalid or expired"})
    }
    
    const hashedPassword = await bcryptHash(password)

    await prismaClient.user.update({
        where:{id:otpObject.userId},
        data:{isMailVerified:true,password:hashedPassword}
    })

    await prismaClient.verificationOTP.deleteMany({
        where:{
            type:"RESET_PASSWORD",userId:otpObject.userId
        }
    })

    return ResponseHandler.sendSuccessResponse({res,message:"Password has been successfully reset"})

})