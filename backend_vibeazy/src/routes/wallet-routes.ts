import express from "express"
import { verifyAccessToken } from "../middlewares/verifyAccessToken"
import { createVirtualAccountNumber, getAllBanks, getWalletInfo, sendToVibeEazyUser, verifyAccountNumber, withdrawToExternalBank } from "../controllers/wallet/wallet-controller"
import { CreateVirtualWalletValidation, sendToWalletValidation, verifyAccountValidation, walletWithdrawalValidation } from "../validation/wallet-validation"
import { getCashwyreBanks } from "../controllers/wallet/wallet-controller"
import { verifyCashwyreAccountNumber } from "../controllers/wallet/wallet-controller"
import { withdrawToExternalBankCashwyre } from "../controllers/wallet/wallet-controller"
import { cashwyreWalletWithdrawalValidation } from "../validation/wallet-validation"


const walletRoutes = express.Router()

walletRoutes.use(verifyAccessToken)

walletRoutes.route("/virtual-account/create").post(CreateVirtualWalletValidation,createVirtualAccountNumber)
walletRoutes.route("/transfer").post(sendToWalletValidation,sendToVibeEazyUser)
walletRoutes.route("/banks/all").get(getAllBanks)
walletRoutes.route("/banks/cashwyre").get(getCashwyreBanks)
walletRoutes.route("/verify/account").post(verifyAccountValidation,verifyAccountNumber)
walletRoutes.route("/verify/cashwyreaAccount").post(verifyAccountValidation,verifyCashwyreAccountNumber)
walletRoutes.route("/info").get(getWalletInfo)
walletRoutes.route("/withdraw").post(walletWithdrawalValidation,withdrawToExternalBank)
walletRoutes.route("/withdrawThroughCashwyre").post(cashwyreWalletWithdrawalValidation,withdrawToExternalBankCashwyre)

export default walletRoutes