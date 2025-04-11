import { MinimumForReferralDiscount, ReferralDiscountPercent } from "../../config/constants";
import { IGetPromoCodeDetail, IVenuePayment, IVenueQuery } from "../../interfaces/venue-interface";
import { catchAuthError } from "../../middlewares/wrapper";
import prismaClient from "../../prisma/pris-client";
import { initiateBankTransfer } from "../../services/flutterwave";
import { calculateDiscountedAmount } from "../../utils/arithmetic-util";
import ResponseHandler from "../../utils/response-handler";
import { generateTransactionRef } from "../../utils/transaction-utils";

export const getFilteredVenues = catchAuthError(async(req,res,next)=>{
    const city = req.query.city as string || null
    const startAmount = Number(req.query.startAmount)
    const endAmount = Number(req.query.endAmount)
    const category = req.query.category as string || null;

    console.log(category)

    const page = Number(req.query.page) || 1;
    // const pageSize = 2;

    if(!startAmount || !endAmount){
        return ResponseHandler.sendErrorResponse({res,error:"Invalid 'startAmount' or 'endAmount' passed"})
    }

    if(startAmount > endAmount){
        return ResponseHandler.sendErrorResponse({res,error:"Invalid range passed"})
    }
    const filterObject:IVenueQuery = {
        startAmount:{
            gte:startAmount
        },
        endAmount:{
            lte:endAmount
        }
    }

    if(city){
        filterObject.location = {city}
    }
    if(category){
        filterObject.category = {category}
    }

    
    const [venue,totalCount] = await prismaClient.$transaction([
        prismaClient.venues.findMany({
            where:filterObject,
            include:{
                category:true,
                location:true
            },
            orderBy:{
                rating:"desc"
            },
            // skip:(page - 1) * pageSize,
            // take:pageSize
        }),
        prismaClient.venues.count({where:filterObject})
    ])  

    // const totalPages = Math.ceil(totalCount / pageSize)

    return ResponseHandler.sendSuccessResponse({res,data:{
        // totalPages,
        totalCount,
        page,venue
    }})
})

export const getPromCodeDetail = catchAuthError(async(req,res,next)=>{
    const { code,venueId }:IGetPromoCodeDetail = req.body
    const promoCode = await prismaClient.promoCodes.findFirst({
        where:{
            venueId,code
        }
    })

    if(!promoCode){
        return ResponseHandler.sendErrorResponse({res,error:"Promo code not valid for this venue"})
    }

    return ResponseHandler.sendSuccessResponse({res,data:{promoCode}})
})

export const MakePaymentAtVenue = catchAuthError(async(req,res,next)=>{
    const {promoCodeId,venueId,amount}:IVenuePayment = req.body

    const userId = req.user?.userId

    if(!userId){
        return ResponseHandler.sendErrorResponse({res,error:"Server error",code:500})
    }

    const venue = await prismaClient.venues.findFirst({where:{id:venueId}})
    if(!venue){
        return ResponseHandler.sendErrorResponse({res,error:"Venue ID supplied invalid"})
    }

    const wallet = await prismaClient.userWallet.findFirst({where:{userId}})

    if(!wallet){
        return ResponseHandler.sendErrorResponse({res,error:"Wallet has not been created for this user"})
    }
    
    let amountToPay = amount
    let referralAmountToPay = 0
    let promoCodePercent = 0


    if(promoCodeId){
        const promoCode = await prismaClient.promoCodes.findFirst({where:{id:promoCodeId}})
        if(!promoCode){
            return ResponseHandler.sendErrorResponse({res,error:"Promo code not valid"})
        }
        await prismaClient.promoCodes.update({
            where:{id:promoCodeId},
            data:{
                useTimes:promoCode.useTimes + 1
            }
        })

        promoCodePercent = promoCode.discountPercent

        let discountedAmount = calculateDiscountedAmount(amount,promoCode.discountPercent)
        //1% of money is removed from referralWallet
        const removableFromReferralWallet = amount * (ReferralDiscountPercent/100)
        
        //exclude from referral wallet if amount to pay is more than 10,000 
        //And referral balance is sufficient
        if(
            (amount >= MinimumForReferralDiscount) &&
            (wallet.referralBalance >= removableFromReferralWallet)       
        ){
            amountToPay = discountedAmount - removableFromReferralWallet
            referralAmountToPay = removableFromReferralWallet
        }
        else{
            amountToPay = discountedAmount
        }
    }

    if(wallet.balance < amountToPay){
        return ResponseHandler.sendErrorResponse({res,error:"Insufficient balance"})
    }

    //we send twice the discounted value to venue account Number
    const amountToSendToVenue = calculateDiscountedAmount(amount,(promoCodePercent * 2))
    console.log("venue-Amount",amountToSendToVenue)
    
    //create venue transaction
    const {txRef:tx_ref} = await prismaClient.transactions.create({
        data:{
            txRef:generateTransactionRef(),
            status:"PENDING",
            userId,
            productDescription:"VENUE_OUTWARD_PAYMENT",
            featureId:venueId,
            amount:amountToSendToVenue,
            type:"NEUTRAL",
            name:req.user?.username || ""
        }
    })

    //make transaction and verify it is successful before debiting users
    const venueTransfer = await initiateBankTransfer({
        bankCode:venue.bankName,accountNumber:venue.accountNumber,
        amount:amountToSendToVenue,tx_ref,narration:`subsidiary payment`
    })
    
    console.log(venueTransfer,"app-console")
    if(!venueTransfer){
        return ResponseHandler.sendErrorResponse({res,error:"payment could not be completed, try again"})
    }
    
    const txRef = generateTransactionRef()

    //create wallet debit transaction
    const transaction = await prismaClient.transactions.create({
        data:{
            txRef,
            amount:amountToPay,
            userId,
            productDescription:"VENUE_PAYMENT",
            featureId:venue.id,
            name:venue.venueName,
            type:"DEBIT"
        }
    }) 
    
    
    await prismaClient.userWallet.update({
        where:{userId},
        data:{
            balance:{
                decrement:amountToPay
            },
            referralBalance:{
                decrement:referralAmountToPay
            }
        }
    })
    

    return ResponseHandler.sendSuccessResponse({res,message:`${amountToPay + referralAmountToPay} NGN Payment is successful`,data:{transaction}})
})

export const getVenueDetail = catchAuthError(async(req,res,next)=>{
    const venueId = req.params.id
    const venue = await prismaClient.venues.findFirst({
        where:{id:venueId},
        include:{
            location:true,
            category:true
        }
    })
    if(!venue){
        return ResponseHandler.sendErrorResponse({res,error:"venue Id supplied is invaliod"})
    }
    return ResponseHandler.sendSuccessResponse({res,data:venue})
})