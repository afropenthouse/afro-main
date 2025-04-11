import express from "express"
import { verifyAccessToken } from "../middlewares/verifyAccessToken"
import { createVirtualAccountNumber, getAllBanks, getWalletInfo, sendToVibeEazyUser, verifyAccountNumber, withdrawToExternalBank } from "../controllers/wallet/wallet-controller"
import { CreateVirtualWalletValidation, sendToWalletValidation, verifyAccountValidation, walletWithdrawalValidation } from "../validation/wallet-validation"
import { getCashwyreBanks } from "../controllers/wallet/wallet-controller"
import { verifyCashwyreAccountNumber } from "../controllers/wallet/wallet-controller"
import { withdrawToExternalBankCashwyre } from "../controllers/wallet/wallet-controller"
import { cashwyreWalletWithdrawalValidation } from "../validation/wallet-validation"
import { getAllDiscounts } from "../controllers/discounts/discount-controller"
import { addDiscountValidation } from "../validation/discount-vlidation"


const discountRoutes = express.Router()

discountRoutes.route("/all").get(getAllDiscounts)

export default discountRoutes