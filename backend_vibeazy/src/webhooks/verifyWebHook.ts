
import { NextFunction, Response } from 'express';
import { Request } from 'express';
import ResponseHandler from '../utils/response-handler';
import { channelWebHookData, updateWithDrawalTransaction } from './channelWebHookData';
import {  WebhookDataProd } from '../interfaces/flutterwave-interface';
import { flwTransactionVerification, verifyTransferReference } from '../services/flutterwave';
import prismaClient from '../prisma/pris-client';
import { stringifyError } from '../utils/user-utils';
import { isDevelopment } from '../utils/token-utils';
import { CashwyrePayoutEvent } from '../interfaces/cashwyre-interface';
import { updateCashwyreWithDrawalTransaction } from './channelWebHookData';

//this middleware verify the hooks is valid and from flutterwave
export const verifyWebHook = async(req: Request, res: Response, next: NextFunction)=>{  

    console.log(req.body);
    console.log(req.headers);

    // Verify webhook payload comes from Flutterwave using the secret hash set in the Flutterwave Settings, if not return
    if (req.headers['verif-hash'] !== process.env.FLW_HASH) {
        ResponseHandler.sendSuccessResponse({res, code: 200, message: "Received Invalid hash key"});
        return;
    }

    const dataFromWebhook: WebhookDataProd = req.body;

    const isDev = isDevelopment()

    //verify transaction ref on production
    if(!isDev){
        if(dataFromWebhook['event.type'] === "Transfer"){
            const isValid = await verifyTransferReference({transferId:dataFromWebhook.data.id})
            if(!isValid){
                return ResponseHandler.sendErrorResponse({res,error:"Transaction Not Successful"})
            }
        }else{
            const flw_verification = await flwTransactionVerification({txRef:dataFromWebhook.data.tx_ref})
            if(!flw_verification){
                return ResponseHandler.sendErrorResponse({res,error:"Transaction has been compromised"})
            }
        }
    }
    
    // DO not await processing
    ResponseHandler.sendSuccessResponse({res, code: 200, message: "Received"});


    try {
        if(
            (dataFromWebhook['event.type'] === "BANK_TRANSFER_TRANSACTION")
        ){
            await channelWebHookData(dataFromWebhook)
        }
        else if(dataFromWebhook["event.type"] === "Transfer"){
            await updateWithDrawalTransaction(dataFromWebhook)
        }
        else{
            await prismaClient.errorLogs.create({
                data:{
                    txRef:dataFromWebhook.data.tx_ref,
                    logs:`Event ${dataFromWebhook['event.type']} was received and could not be processed`
                }
            })
        }
    } catch(e) {
        console.log("An error occurred processing webhook");
        console.log(e)
        const error = stringifyError(e)
        await prismaClient.errorLogs.create({
            data:{
                txRef:dataFromWebhook.data.tx_ref || dataFromWebhook.data.reference || "",
                logs:stringifyError(error)
            }
        })
    }

    return

}


export const verifyCashwyreWebHook = async(req: Request, res: Response, next: NextFunction)=>{  

    console.log(req.body);
    console.log(req.headers);


    const dataFromWebhook: CashwyrePayoutEvent = req.body;

    // const isDev = isDevelopment()



    try {
       
        if(dataFromWebhook["eventType"]){
            await updateCashwyreWithDrawalTransaction(dataFromWebhook)
            return ResponseHandler.sendSuccessResponse({res, code: 200, message: "Received webhook"});
        }
        else{
            await prismaClient.errorLogs.create({
                data:{
                    txRef:dataFromWebhook["eventData"].reference,
                    logs:`Event ${dataFromWebhook['eventType']} was received and could not be processed`
                }
            })
        }
    } catch(e) {
        console.log("An error occurred processing webhook");
        console.log(e)
        const error = stringifyError(e)
        await prismaClient.errorLogs.create({
            data:{
                txRef:dataFromWebhook["eventData"].reference,
                logs:stringifyError(error)
            }
        })
    }

    return

}