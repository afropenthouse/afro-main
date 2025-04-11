import { WebhookData } from "../interfaces/flutterwave-interface";
import prismaClient from "../prisma/pris-client";

export const updateTransferTransactionStatus = async (data:WebhookData)=>{
    const transaction = await prismaClient.transactions.findFirst({
        where:{txRef:data.transfer.reference}
    })

    if(!transaction){
        throw new Error("Invalid transaction passed")
    }
    if(data.transfer.status === "SUCCESS"){
        await prismaClient.transactions.update({
            where:{id:transaction.id},
            data:{status:"SUCCESS"}
        })
    }else if(data.transfer.status === "FAILED"){
        await prismaClient.transactions.update({
            where:{
                id:transaction.id
            },
            data:{
                status:"FAIL"
            }
        })
    }
    console.log("Web hook processed ----------- !")
}