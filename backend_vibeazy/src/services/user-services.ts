import { ISignUpBody } from "../interfaces/user-interface";
import prismaClient from "../prisma/pris-client";

class UserService{
    async CreateUser(data:ISignUpBody){
        return await prismaClient.user.create({data})
    }   
    
}

export default new UserService()