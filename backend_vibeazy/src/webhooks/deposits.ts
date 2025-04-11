import { WebhookData, WebhookDataProd } from "../interfaces/flutterwave-interface"
import prismaClient from "../prisma/pris-client"
import { generateTransactionRef } from "../utils/transaction-utils"


export const depositIntoWalletFlutterwave = async(dataFromWebhook: WebhookDataProd) => {
    const {status,tx_ref:txRef,amount} = dataFromWebhook.data

    if(status !== "successful"){
        return
    }

    const userWallet = await prismaClient.userWallet.findFirst({
        where:{walletRef:txRef}
    })

    if(!userWallet){
        throw Error("Invalid ref passed")
    }

    //update user wallet here
    await prismaClient.userWallet.update({
        where:{id:userWallet.id},
        data:{
            balance:{
                increment:amount,
            },
            lastDepositedAt: new Date()
        }
    })

    //create deposit transaction for user

    await prismaClient.transactions.create({
        data:{
            txRef:generateTransactionRef(),
            type:'CREDIT',
            amount,featureId:userWallet.id,
            userId:userWallet.userId,
            productDescription:"WALLET",
            name:"Wallet Deposit",
        }
    })

}