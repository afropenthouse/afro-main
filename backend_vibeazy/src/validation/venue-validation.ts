import { Request,Response,NextFunction } from 'express';
import Joi from 'joi';
import ResponseHandler from '../utils/response-handler';


export async function promoCodeDetailValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
    const promoCodeSchema = Joi.object({
    code: Joi.string().required(),
    venueId: Joi.string().uuid().required()
    });

    const validation = promoCodeSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}

export async function makePaymentValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
    const promoCodeSchema = Joi.object({
    amount: Joi.number().required(),
    venueId: Joi.string().uuid().required(),
    promoCodeId : Joi.string().optional()
    });

    const validation = promoCodeSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}
