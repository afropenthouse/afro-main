import { Request,Response,NextFunction } from 'express';
import Joi from 'joi';
import ResponseHandler from '../utils/response-handler';


export async function createGroupValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
        
    const createGroupSchema = Joi.object({
        name: Joi.string().required(),
        groupLogo: Joi.string().optional()
    });

    const validation = createGroupSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}

export async function addUserToGroupValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
        
    const addUserSchema = Joi.object({
        username: Joi.string().required(),
        groupId: Joi.string().required()
    });

    const validation = addUserSchema.validate(req.body);

    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}

export async function joinGroupWithLinkValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
        
    const joinWithLinkSchema = Joi.object({
        sharableLink: Joi.string().required(),
    });

    const validation = joinWithLinkSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}

export async function depositIntoGroupValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
        
    const depositSchema = Joi.object({
        amount: Joi.number().required(),
        groupId: Joi.string().required()
    });

    const validation = depositSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}

export async function withDrawFromGroupValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
        
    const depositSchema = Joi.object({
        amount: Joi.number().required(),
        groupId: Joi.string().required(),
        username: Joi.string().required()
    });

    const validation = depositSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}

export async function withDrawFromGroupToBankValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
        
    const withdrawalSchema = Joi.object({
        amount: Joi.number().required(),
        groupId: Joi.string().required(),
        bankCode: Joi.string().required(),
        accountNumber: Joi.string().required(),
        accountName: Joi.string().required(),
        pin: Joi.string().required()
    });

    const validation = withdrawalSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}