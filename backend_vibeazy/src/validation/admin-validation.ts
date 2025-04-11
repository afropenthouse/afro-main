import { Request,Response,NextFunction } from 'express';
import Joi from 'joi';
import ResponseHandler from '../utils/response-handler';

export async function addVenueValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> { 
    const venueValidationSchema = Joi.object({
        categoryId: Joi.string().uuid().required(),
        venueName: Joi.string().required(),
        startAmount: Joi.number().min(0).required(),
        endAmount: Joi.number().min(Joi.ref('startAmount')).required(),  // endAmount should be >= startAmount
        accountNumber: Joi.string(),  // Allowing only numeric account numbers
        bankName: Joi.string(),
        rating: Joi.number().min(0).max(5).optional(), // Assuming rating is between 0 and 5
        callLine: Joi.string(), // Numeric pattern for phone number-like call lines
        discount: Joi.number().min(0).default(0).optional(),
        longitude: Joi.string(),
        latitude: Joi.string(),
        locationId: Joi.string().uuid().required(),
        webLink: Joi.string().required(),
        venueImages: Joi.array().items(Joi.string()).min(1).required(),
      });

    const validation = venueValidationSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    next();
}

export async function addPromoCodeValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> { 
    const resetValidation = Joi.object({
        discountPercent: Joi.number().min(0).max(100).required(),
        code: Joi.string().required(),
        isActive: Joi.boolean().default(true),
        venueId: Joi.string().required(),
      });

    const validation = resetValidation.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    next();
}

export async function addLocationValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> { 
    const resetValidation = Joi.object({
        city: Joi.string().required(),
      });
    const validation = resetValidation.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    next();
}

export async function addCategoryValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> { 
    const resetValidation = Joi.object({
        category: Joi.string().required(),
      });
    const validation = resetValidation.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    next();
}
  
export async function editVenueValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
    const schema = Joi.object({
        id: Joi.string().uuid().required(),
        categoryId: Joi.string().uuid().optional(),
        venueName: Joi.string().optional(),
        startAmount: Joi.number().optional(),
        endAmount: Joi.number().min(Joi.ref('startAmount')).optional(),  // endAmount should be >= startAmount
        accountNumber: Joi.string().pattern(/^[0-9]+$/).optional(),  // Allowing only numeric account numbers
        bankName: Joi.string().optional(),
        rating: Joi.number().min(0).max(5).optional(),  // Assuming rating is between 0 and 5
        callLine: Joi.string().optional(),  // Numeric pattern for phone number-like call lines
        discount: Joi.number().min(0).default(0),
        longitude: Joi.string().optional(),
        latitude: Joi.string().optional(),
        locationId: Joi.string().uuid().optional(),
        webLink: Joi.string().optional(),
        venueImages: Joi.array().items(Joi.string()).min(1).optional(),
    });
    const validation = schema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;
        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}
export async function deleteVenueValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> { 
    const deleteSchema = Joi.object({
        venueId: Joi.string().required(),
      });
    const validation = deleteSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;
        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    next();
}
