import { catchAuthError } from "../../middlewares/wrapper"
import prismaClient from "../../prisma/pris-client"
import ResponseHandler from "../../utils/response-handler"


export const getAllDiscounts = catchAuthError(async(req,res,next)=>{
    const discounts = await prismaClient.discount.findMany({})
    return ResponseHandler.sendSuccessResponse({res,data:{discounts}})
})


