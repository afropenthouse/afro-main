import { Request,Response,NextFunction } from 'express';
import Joi from 'joi';
import ResponseHandler from '../utils/response-handler';


export async function addDiscountValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> { 
    const resetValidation = Joi.object({
        image: Joi.string().required(),
        title: Joi.string().required(),
        url: Joi.string().required(),
      });
    const validation = resetValidation.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    next();
}