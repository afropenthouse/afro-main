import { IAddCategoryBody, IAddLocationBody, IAddPromoCode, IAddVenueBody, IDeleteVenue, IUpdateVenue, IAddDiscount } from "../../interfaces/admin-Interface";
import { catchAuthError } from "../../middlewares/wrapper";
import prismaClient from "../../prisma/pris-client";
import ResponseHandler from "../../utils/response-handler";



export const addNewCategory = catchAuthError(async(req,res,next)=>{
    const {category}:IAddCategoryBody = req.body
    const newCategory = await prismaClient.category.create({data:{category}})
    return ResponseHandler.sendSuccessResponse({res,data:{category:newCategory}})
})

export const addNewLocation = catchAuthError(async(req,res,next)=>{
    const {city}:IAddLocationBody = req.body
    const location = await prismaClient.location.create({data:{city}})
    return ResponseHandler.sendSuccessResponse({res,data:{location}})
})

export const addNewVenue = catchAuthError(async(req,res,next)=>{
    const {categoryId,locationId,...venueData}:IAddVenueBody = req.body

    const category = await prismaClient.category.findFirst({where:{id:categoryId}})
    
    if(!category){
        return ResponseHandler.sendErrorResponse({res,error:"Category Id supplied invalid"})
    }

    const location = await prismaClient.location.findFirst({where:{id:locationId}})
    if(!location){
        return ResponseHandler.sendErrorResponse({res,error:"Location Id supplied invalid"})
    }

    const venue = await prismaClient.venues.create({
        data:{
            categoryId,locationId,...venueData
        }
    })

    return ResponseHandler.sendSuccessResponse({res,data:{venue}})
})

export const addPromoCodes = catchAuthError(async(req,res,next)=>{
    const {venueId,...promoCodeData}:IAddPromoCode = req.body 
    
    const venue = await prismaClient.venues.findFirst({where:{
        id:venueId
    }})

    if(!venue){
        return ResponseHandler.sendErrorResponse({res,error:"Venue ID supplied invalid"})
    }
    const isExisting = await prismaClient.promoCodes.findFirst({
        where:{
            venueId,code:promoCodeData.code
        }
    })
    if(isExisting){
        return ResponseHandler.sendErrorResponse({res,error:"Promo code already existing for this location"})
    }
    const promoCode = await prismaClient.promoCodes.create({
        data:{
            venueId,...promoCodeData
        }
    })

    return ResponseHandler.sendSuccessResponse({res,data:{promoCode}})
})


export const getAllCategory = catchAuthError(async(req,res,next)=>{
    const category = await prismaClient.category.findMany({include:{venues:true}}) 
    return ResponseHandler.sendSuccessResponse({res,data:{category}})
})

export const getAllLocation = catchAuthError(async(req,res,next)=>{
    const location = await prismaClient.location.findMany({include:{venues:true}}) 
    return ResponseHandler.sendSuccessResponse({res,data:{location}})
})

export const getAllVenueData = catchAuthError(async(req,res,next)=>{
    const venues = await prismaClient.venues.findMany({
        include:{
            promoCode:true,
            location:true,
            category:true
        }
    })
    return ResponseHandler.sendSuccessResponse({res,data:{venues}})
})

export const updateVenue = catchAuthError(async(req,res,next)=>{
    const {id,...venueData}:IUpdateVenue = req.body
    const venue = await prismaClient.venues.findFirst({
        where:{id:id}
    })
    if(!venue){
        return ResponseHandler.sendErrorResponse({res,error:"Venue ID is Invalid"})
    }
    const updatedVenue = await prismaClient.venues.update({
        where:{id:id},
        data:venueData
    })
    return ResponseHandler.sendSuccessResponse({res,message:"venue update successful",data:updatedVenue})
})
export const deleteVenue = catchAuthError(async(req,res,next)=>{
    const {venueId}:IDeleteVenue = req.body
    const venue = await prismaClient.venues.findFirst({
        where:{id:venueId}
    })
    if(!venue){
        return ResponseHandler.sendErrorResponse({res,error:"Venue ID is Invalid"})
    }
    
    await prismaClient.venues.delete({
        where:{id:venueId}
    })
    return ResponseHandler.sendSuccessResponse({res,message:"venue successfully deleted"})
})


export const addNewDiscount = catchAuthError(async(req,res,next)=>{
    const {title, image, url}:IAddDiscount = req.body
    const newDiscount = await prismaClient.discount.create({
        data: {
            title,
            image,
            url
        }
    });
    return ResponseHandler.sendSuccessResponse({res,data:{category:newDiscount}})
})