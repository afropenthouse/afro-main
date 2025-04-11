import { Request } from "express";


export interface ITokenData {
    userId: string;
    email: string;
}

export interface IUserDetail extends ITokenData{
    username: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    profileImage: string | null
}

export interface IExpressRequest extends Request {
    user?: IUserDetail
}

export interface IVerifyEmailBody {
    verificationId: string
    otpCode : string
}

export interface ISignUpBody {
    username: string
    email: string
    phoneNumber: string
    password: string
    referralUsername?: string
}

export interface IEncodedUserTokenValue{
    email: string
    userId: string
}

export interface ILoginBody{
    email: string
    password: string
}

export interface IRefreshTokenBody{
    refreshToken: string
}


export interface IForgotPasswordBody extends IVerifyEmailBody{
    password:string
}


export interface IPinCreateBody{
    pin: string
}