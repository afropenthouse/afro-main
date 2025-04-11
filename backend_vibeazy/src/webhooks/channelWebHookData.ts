import { WebhookData, WebhookDataProd } from "../interfaces/flutterwave-interface";
import prismaClient from "../prisma/pris-client";
import { IFlwTransactionVerificationData } from "../interfaces/flutterwave-interface";
import { generateTransactionRef, isRefWalletRef } from "../utils/transaction-utils";
import { depositIntoWalletFlutterwave } from "./deposits";
import { CashwyrePayoutEvent } from "../interfaces/cashwyre-interface";

export const channelWebHookData = async(dataFromWebhook: WebhookDataProd, flwVerification?: IFlwTransactionVerificationData) => {

    console.log("channeled after response")
    //* Begin request computations
    const txRef = dataFromWebhook.data.tx_ref;
    
    // Check for corresponding transaction on the db
    const isWalletRef = isRefWalletRef(txRef)

    const transaction = await prismaClient.transactions.findFirst({
        where: {txRef}
    })
    
    // If none, just return
    if (!transaction && !isWalletRef) {
        throw new Error("Transaction not found in the database")
    }    

    if(isWalletRef){
        //handle wallet transactions
        depositIntoWalletFlutterwave(dataFromWebhook)
        return
    }
    //? Now run different transactions depending on transaction type/description
    if(transaction && transaction.productDescription){
        switch (transaction.productDescription) {
            
        }
    }else{
        console.log("Transaction description not found")
        return
    }
}

export const updateWithDrawalTransaction = async (dataFromWebhook:WebhookDataProd) =>{
    const ref = dataFromWebhook.data.reference
    
    
    const transaction = await prismaClient.transactions.findFirst({
        where: {txRef:ref}
    })
    

    if (!transaction) {
        throw new Error("Transaction not found in the database")
    }    

    const isSuccess = dataFromWebhook.data.status === "successful" || dataFromWebhook.data.status === "SUCCESSFUL"

    if(isSuccess){
        await prismaClient.transactions.update({
            where:{id:transaction.id},
            data:{
                status:"SUCCESS"
            }
        })
    }else{
        await prismaClient.transactions.update({
            where:{id:transaction.id},
            data:{
                status:"FAIL"
            }
        })
        
        const transactionData = await prismaClient.transactions.findFirst({
            where:{id:transaction.id},
            include:{user:{
                include:{
                    wallet:true
                }
            }}
        })

        if(transactionData?.productDescription === "OUTWARD_WITHDRAWAL"){
            if(transactionData && (transactionData.user.wallet?.id === transaction.featureId) && transaction.type === "DEBIT"){
                const walletUpdate =  prismaClient.userWallet.update({
                    where:{id:transactionData.user.wallet?.id},
                    data:{
                        balance:{
                            increment:transactionData.amount
                        }
                    }
                })
        
                const newTransaction =  prismaClient.transactions.create({
                    data:{
                        txRef:generateTransactionRef(),
                        amount:transactionData.amount,
                        userId:transactionData.userId,
                        productDescription:"WALLET",
                        featureId:transactionData.user.wallet?.id || "",
                        name:`${transactionData.user.firstName} ${transactionData.user.lastName}`,
                        type:"REFUND"
                    }
                })
        
                await prismaClient.$transaction([walletUpdate,newTransaction])
            }
        }  else if (transactionData?.productDescription === "GROUP_WALLET"){

            const groupWalletUpdate = prismaClient.collectiveWallet.update({
                where:{
                    id:transactionData.id,
                },
                data:{
                    groupBalance:{increment:transactionData.amount}
                }
            })

            const newTransaction =  prismaClient.transactions.create({
                data:{
                    txRef:generateTransactionRef(),
                    amount:transactionData.amount,
                    userId:transactionData.userId,
                    productDescription:"GROUP_WALLET",
                    featureId:transactionData.featureId,
                    name:`Withdrawal refund`,
                    type:"REFUND"
                }
            })

            await prismaClient.$transaction([groupWalletUpdate,newTransaction])
        }

    }

}

export const updateCashwyreWithDrawalTransaction = async (dataFromWebhook:CashwyrePayoutEvent) =>{
    const ref = dataFromWebhook["eventData"].reference
    
    
    const transaction = await prismaClient.transactions.findFirst({
        where: {txRef:ref}
    })
    

    if (!transaction) {
        throw new Error("Transaction not found")
    }    

    const isSuccess = dataFromWebhook["eventData"].status === "success" || dataFromWebhook["eventData"].status === "SUCCESS"

    if(isSuccess){
        await prismaClient.transactions.update({
            where:{id:transaction.id},
            data:{
                status:"SUCCESS"
            }
        })
    }else{
        await prismaClient.transactions.update({
            where:{id:transaction.id},
            data:{
                status:"FAIL"
            }
        })
        
        const transactionData = await prismaClient.transactions.findFirst({
            where:{id:transaction.id},
            include:{user:{
                include:{
                    wallet:true
                }
            }}
        })

        if(transactionData?.productDescription === "OUTWARD_WITHDRAWAL"){
            if(transactionData && (transactionData.user.wallet?.id === transaction.featureId) && transaction.type === "DEBIT"){
                const walletUpdate =  prismaClient.userWallet.update({
                    where:{id:transactionData.user.wallet?.id},
                    data:{
                        balance:{
                            increment:transactionData.amount
                        }
                    }
                })
        
                const newTransaction =  prismaClient.transactions.create({
                    data:{
                        txRef:generateTransactionRef(),
                        amount:transactionData.amount,
                        userId:transactionData.userId,
                        productDescription:"WALLET",
                        featureId:transactionData.user.wallet?.id || "",
                        name:`${transactionData.user.firstName} ${transactionData.user.lastName}`,
                        type:"REFUND"
                    }
                })
        
                await prismaClient.$transaction([walletUpdate,newTransaction])
            }
        }  else if (transactionData?.productDescription === "GROUP_WALLET"){

            const groupWalletUpdate = prismaClient.collectiveWallet.update({
                where:{
                    id:transactionData.id,
                },
                data:{
                    groupBalance:{increment:transactionData.amount}
                }
            })

            const newTransaction =  prismaClient.transactions.create({
                data:{
                    txRef:generateTransactionRef(),
                    amount:transactionData.amount,
                    userId:transactionData.userId,
                    productDescription:"GROUP_WALLET",
                    featureId:transactionData.featureId,
                    name:`Withdrawal refund`,
                    type:"REFUND"
                }
            })

            await prismaClient.$transaction([groupWalletUpdate,newTransaction])
        }

    }

}