import { Request,Response,NextFunction } from 'express';
import Joi from 'joi';
import ResponseHandler from '../utils/response-handler';


export async function verifyEmailValidation (req:Request,
    res:Response,
    next:NextFunction):Promise<Response | void>{
    const emailSchema = Joi.object({
        verificationId: Joi.string().required(),
        otpCode: Joi.string().length(4).required()
    });

    const validation = emailSchema.validate(req.body);
    if (validation.error) {
        const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

        return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next()
}

export async function signUpValidation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const completeProfileSchema = Joi.object({
      username: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      phoneNumber: Joi.string()
  .pattern(/^[0-9]+$/)
  .min(10)
  .max(15)
  .allow('')
  .optional(),
      password: Joi.string().min(8).required(),
      referralUsername: Joi.string().optional()
    });
  
    const validation = completeProfileSchema.validate(req.body);
    if (validation.error) {
      const error = validation.error.message
        ? validation.error.message
        : validation.error.details[0].message;
  
      return ResponseHandler.sendErrorResponse({ res, code: 400, error });
    }
    return next();
}

export async function forgotPasswordValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const resetSchema = Joi.object({
      email: Joi.string().email().required(),
  });

  const validation = resetSchema.validate(req.body);
  if (validation.error) {
      const error = validation.error.message ? validation.error.message : validation.error.details[0].message;
      return ResponseHandler.sendErrorResponse({ res, code: 400, error });
  }
  return next();
}

export async function loginValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(), 
  });

  const validation = loginSchema.validate(req.body);
  if (validation.error) {
      const error = validation.error.message ? validation.error.message : validation.error.details[0].message;
      return ResponseHandler.sendErrorResponse({ res, code: 400, error });
  }
  return next();
}

export async function refreshTokenValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const loginSchema = Joi.object({
      refreshToken: Joi.string().min(8).required(), 
  });

  const validation = loginSchema.validate(req.body);
  if (validation.error) {
      const error = validation.error.message ? validation.error.message : validation.error.details[0].message;
      return ResponseHandler.sendErrorResponse({ res, code: 400, error });
  }
  return next();
}

export async function passwordResetValidation (req:Request,
  res:Response,
  next:NextFunction):Promise<Response | void>{
  const resetSchema = Joi.object({
      verificationId: Joi.string().required(),
      otpCode: Joi.string().length(4).required(),
      password: Joi.string().min(8).required()
  });

  const validation = resetSchema.validate(req.body);
  if (validation.error) {
      const error = validation.error.message ? validation.error.message : validation.error.details[0].message;

      return ResponseHandler.sendErrorResponse({ res, code: 400, error });
  }
  return next()
}


export async function createPinValidation(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const loginSchema = Joi.object({
      pin: Joi.string().length(4).required(),
  });

  const validation = loginSchema.validate(req.body);
  if (validation.error) {
      const error = validation.error.message ? validation.error.message : validation.error.details[0].message;
      return ResponseHandler.sendErrorResponse({ res, code: 400, error });
  }
  return next();
}