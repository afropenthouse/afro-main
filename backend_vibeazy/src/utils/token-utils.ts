import jwt from "jsonwebtoken";
import { IEncodedUserTokenValue } from "../interfaces/user-interface";

export const isDevelopment = ()=>{
    return process.env.APP_ENV === "DEV"
}

export const signAccessToken  = ({email,userId}:IEncodedUserTokenValue)=>{
    const isDev = isDevelopment()
    const accessToken = jwt.sign(
        {userId,email},
        process.env.JWT_SECRET as string,
        { expiresIn:isDev?"7d":"7d" }
    );
    return accessToken
}

export const signRefreshToken = ({userId}:{userId:string})=>{
    const isDev = isDevelopment()
    const refreshToken = jwt.sign(
        {userId},
        process.env.JWT_SECRET as string,
        { expiresIn:isDev?"30d":"30d" }
    );
    return refreshToken
}

  