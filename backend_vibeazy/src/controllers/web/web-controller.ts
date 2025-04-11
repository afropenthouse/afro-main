import { MinimumForReferralDiscount, ReferralDiscountPercent } from "../../config/constants";
import { IGetPromoCodeDetail, IVenuePayment, IVenueQuery } from "../../interfaces/venue-interface";
import { catchAuthError } from "../../middlewares/wrapper";
import prismaClient from "../../prisma/pris-client";
import { initiateBankTransfer } from "../../services/flutterwave";
import { calculateDiscountedAmount } from "../../utils/arithmetic-util";
import ResponseHandler from "../../utils/response-handler";
import { generateTransactionRef } from "../../utils/transaction-utils";
export const getFilteredVenues = catchAuthError(async (req, res, next) => {
    const city = (req.query.city as string) || null;
    const startAmount = Number(req.query.startAmount);
    const endAmount = Number(req.query.endAmount);
    const category = (req.query.category as string) || null;
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.count) || 9;
  
    if (isNaN(startAmount) || isNaN(endAmount)) {
      return ResponseHandler.sendErrorResponse({
        res,
        error: "Invalid 'startAmount' or 'endAmount' passed",
      });
    }
  
    if (startAmount > endAmount) {
      return ResponseHandler.sendErrorResponse({
        res,
        error: "Invalid range passed",
      });
    }
  
    // @ts-ignore
    const filterObject: Prisma.VenuesWhereInput = {
        startAmount:{
            gte:startAmount
        },
        endAmount:{
            lte:endAmount
        }
    };
  
    if (city) {
      filterObject.location = { city };
    }
  
    if (category) {
      filterObject.category = { category };
    }
  
    const [venue, totalCount] = await prismaClient.$transaction([
      prismaClient.venues.findMany({
        where: filterObject,
        include: {
          category: true,
          location: true,
        },
        orderBy: {
          rating: "desc",
        },
        // skip: (page - 1) * pageSize,
        // // take: pageSize,
      }),
      prismaClient.venues.count({
        where: filterObject,
      }),
    ]);
  
    const totalPages = Math.ceil(totalCount / pageSize);
  
    return ResponseHandler.sendSuccessResponse({
      res,
      data: {
        page,
        totalCount,
        totalPages,
        venue,
      },
    });
  });
  
  

  export const addWebEmail = catchAuthError(async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return ResponseHandler.sendErrorResponse({ 
            res, 
            error: "Email is required", 
            code: 400 
        });
    }

    const newEmail = await prismaClient.web.create({
        data: { email }
    });

    return ResponseHandler.sendSuccessResponse({
        res,
        data: { message: "Email added successfully", email: newEmail.email }
    });
});
