"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var verifyAccessToken_1 = require("../middlewares/verifyAccessToken");
var wallet_controller_1 = require("../controllers/wallet/wallet-controller");
var wallet_validation_1 = require("../validation/wallet-validation");
var wallet_controller_2 = require("../controllers/wallet/wallet-controller");
var wallet_controller_3 = require("../controllers/wallet/wallet-controller");
var wallet_controller_4 = require("../controllers/wallet/wallet-controller");
var wallet_validation_2 = require("../validation/wallet-validation");
var walletRoutes = express_1.default.Router();
walletRoutes.use(verifyAccessToken_1.verifyAccessToken);
walletRoutes.route("/virtual-account/create").post(wallet_validation_1.CreateVirtualWalletValidation, wallet_controller_1.createVirtualAccountNumber);
walletRoutes.route("/transfer").post(wallet_validation_1.sendToWalletValidation, wallet_controller_1.sendToVibeEazyUser);
walletRoutes.route("/banks/all").get(wallet_controller_1.getAllBanks);
walletRoutes.route("/banks/cashwyre").get(wallet_controller_2.getCashwyreBanks);
walletRoutes.route("/verify/account").post(wallet_validation_1.verifyAccountValidation, wallet_controller_1.verifyAccountNumber);
walletRoutes.route("/verify/cashwyreaAccount").post(wallet_validation_1.verifyAccountValidation, wallet_controller_3.verifyCashwyreAccountNumber);
walletRoutes.route("/info").get(wallet_controller_1.getWalletInfo);
walletRoutes.route("/withdraw").post(wallet_validation_1.walletWithdrawalValidation, wallet_controller_1.withdrawToExternalBank);
walletRoutes.route("/withdrawThroughCashwyre").post(wallet_validation_2.cashwyreWalletWithdrawalValidation, wallet_controller_4.withdrawToExternalBankCashwyre);
exports.default = walletRoutes;
