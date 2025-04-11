"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCashwyreWithDrawalTransaction = exports.updateWithDrawalTransaction = exports.channelWebHookData = void 0;
var pris_client_1 = __importDefault(require("../prisma/pris-client"));
var transaction_utils_1 = require("../utils/transaction-utils");
var deposits_1 = require("./deposits");
var channelWebHookData = function (dataFromWebhook, flwVerification) { return __awaiter(void 0, void 0, void 0, function () {
    var txRef, isWalletRef, transaction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("channeled after response");
                txRef = dataFromWebhook.data.tx_ref;
                isWalletRef = (0, transaction_utils_1.isRefWalletRef)(txRef);
                return [4 /*yield*/, pris_client_1.default.transactions.findFirst({
                        where: { txRef: txRef }
                    })
                    // If none, just return
                ];
            case 1:
                transaction = _a.sent();
                // If none, just return
                if (!transaction && !isWalletRef) {
                    throw new Error("Transaction not found in the database");
                }
                if (isWalletRef) {
                    //handle wallet transactions
                    (0, deposits_1.depositIntoWalletFlutterwave)(dataFromWebhook);
                    return [2 /*return*/];
                }
                //? Now run different transactions depending on transaction type/description
                if (transaction && transaction.productDescription) {
                    switch (transaction.productDescription) {
                    }
                }
                else {
                    console.log("Transaction description not found");
                    return [2 /*return*/];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.channelWebHookData = channelWebHookData;
var updateWithDrawalTransaction = function (dataFromWebhook) { return __awaiter(void 0, void 0, void 0, function () {
    var ref, transaction, isSuccess, transactionData, walletUpdate, newTransaction, groupWalletUpdate, newTransaction;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                ref = dataFromWebhook.data.reference;
                return [4 /*yield*/, pris_client_1.default.transactions.findFirst({
                        where: { txRef: ref }
                    })];
            case 1:
                transaction = _d.sent();
                if (!transaction) {
                    throw new Error("Transaction not found in the database");
                }
                isSuccess = dataFromWebhook.data.status === "successful" || dataFromWebhook.data.status === "SUCCESSFUL";
                if (!isSuccess) return [3 /*break*/, 3];
                return [4 /*yield*/, pris_client_1.default.transactions.update({
                        where: { id: transaction.id },
                        data: {
                            status: "SUCCESS"
                        }
                    })];
            case 2:
                _d.sent();
                return [3 /*break*/, 10];
            case 3: return [4 /*yield*/, pris_client_1.default.transactions.update({
                    where: { id: transaction.id },
                    data: {
                        status: "FAIL"
                    }
                })];
            case 4:
                _d.sent();
                return [4 /*yield*/, pris_client_1.default.transactions.findFirst({
                        where: { id: transaction.id },
                        include: { user: {
                                include: {
                                    wallet: true
                                }
                            } }
                    })];
            case 5:
                transactionData = _d.sent();
                if (!((transactionData === null || transactionData === void 0 ? void 0 : transactionData.productDescription) === "OUTWARD_WITHDRAWAL")) return [3 /*break*/, 8];
                if (!(transactionData && (((_a = transactionData.user.wallet) === null || _a === void 0 ? void 0 : _a.id) === transaction.featureId) && transaction.type === "DEBIT")) return [3 /*break*/, 7];
                walletUpdate = pris_client_1.default.userWallet.update({
                    where: { id: (_b = transactionData.user.wallet) === null || _b === void 0 ? void 0 : _b.id },
                    data: {
                        balance: {
                            increment: transactionData.amount
                        }
                    }
                });
                newTransaction = pris_client_1.default.transactions.create({
                    data: {
                        txRef: (0, transaction_utils_1.generateTransactionRef)(),
                        amount: transactionData.amount,
                        userId: transactionData.userId,
                        productDescription: "WALLET",
                        featureId: ((_c = transactionData.user.wallet) === null || _c === void 0 ? void 0 : _c.id) || "",
                        name: "".concat(transactionData.user.firstName, " ").concat(transactionData.user.lastName),
                        type: "REFUND"
                    }
                });
                return [4 /*yield*/, pris_client_1.default.$transaction([walletUpdate, newTransaction])];
            case 6:
                _d.sent();
                _d.label = 7;
            case 7: return [3 /*break*/, 10];
            case 8:
                if (!((transactionData === null || transactionData === void 0 ? void 0 : transactionData.productDescription) === "GROUP_WALLET")) return [3 /*break*/, 10];
                groupWalletUpdate = pris_client_1.default.collectiveWallet.update({
                    where: {
                        id: transactionData.id,
                    },
                    data: {
                        groupBalance: { increment: transactionData.amount }
                    }
                });
                newTransaction = pris_client_1.default.transactions.create({
                    data: {
                        txRef: (0, transaction_utils_1.generateTransactionRef)(),
                        amount: transactionData.amount,
                        userId: transactionData.userId,
                        productDescription: "GROUP_WALLET",
                        featureId: transactionData.featureId,
                        name: "Withdrawal refund",
                        type: "REFUND"
                    }
                });
                return [4 /*yield*/, pris_client_1.default.$transaction([groupWalletUpdate, newTransaction])];
            case 9:
                _d.sent();
                _d.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.updateWithDrawalTransaction = updateWithDrawalTransaction;
var updateCashwyreWithDrawalTransaction = function (dataFromWebhook) { return __awaiter(void 0, void 0, void 0, function () {
    var ref, transaction, isSuccess, transactionData, walletUpdate, newTransaction, groupWalletUpdate, newTransaction;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                ref = dataFromWebhook["eventData"].reference;
                return [4 /*yield*/, pris_client_1.default.transactions.findFirst({
                        where: { txRef: ref }
                    })];
            case 1:
                transaction = _d.sent();
                if (!transaction) {
                    throw new Error("Transaction not found");
                }
                isSuccess = dataFromWebhook["eventData"].status === "success" || dataFromWebhook["eventData"].status === "SUCCESS";
                if (!isSuccess) return [3 /*break*/, 3];
                return [4 /*yield*/, pris_client_1.default.transactions.update({
                        where: { id: transaction.id },
                        data: {
                            status: "SUCCESS"
                        }
                    })];
            case 2:
                _d.sent();
                return [3 /*break*/, 10];
            case 3: return [4 /*yield*/, pris_client_1.default.transactions.update({
                    where: { id: transaction.id },
                    data: {
                        status: "FAIL"
                    }
                })];
            case 4:
                _d.sent();
                return [4 /*yield*/, pris_client_1.default.transactions.findFirst({
                        where: { id: transaction.id },
                        include: { user: {
                                include: {
                                    wallet: true
                                }
                            } }
                    })];
            case 5:
                transactionData = _d.sent();
                if (!((transactionData === null || transactionData === void 0 ? void 0 : transactionData.productDescription) === "OUTWARD_WITHDRAWAL")) return [3 /*break*/, 8];
                if (!(transactionData && (((_a = transactionData.user.wallet) === null || _a === void 0 ? void 0 : _a.id) === transaction.featureId) && transaction.type === "DEBIT")) return [3 /*break*/, 7];
                walletUpdate = pris_client_1.default.userWallet.update({
                    where: { id: (_b = transactionData.user.wallet) === null || _b === void 0 ? void 0 : _b.id },
                    data: {
                        balance: {
                            increment: transactionData.amount
                        }
                    }
                });
                newTransaction = pris_client_1.default.transactions.create({
                    data: {
                        txRef: (0, transaction_utils_1.generateTransactionRef)(),
                        amount: transactionData.amount,
                        userId: transactionData.userId,
                        productDescription: "WALLET",
                        featureId: ((_c = transactionData.user.wallet) === null || _c === void 0 ? void 0 : _c.id) || "",
                        name: "".concat(transactionData.user.firstName, " ").concat(transactionData.user.lastName),
                        type: "REFUND"
                    }
                });
                return [4 /*yield*/, pris_client_1.default.$transaction([walletUpdate, newTransaction])];
            case 6:
                _d.sent();
                _d.label = 7;
            case 7: return [3 /*break*/, 10];
            case 8:
                if (!((transactionData === null || transactionData === void 0 ? void 0 : transactionData.productDescription) === "GROUP_WALLET")) return [3 /*break*/, 10];
                groupWalletUpdate = pris_client_1.default.collectiveWallet.update({
                    where: {
                        id: transactionData.id,
                    },
                    data: {
                        groupBalance: { increment: transactionData.amount }
                    }
                });
                newTransaction = pris_client_1.default.transactions.create({
                    data: {
                        txRef: (0, transaction_utils_1.generateTransactionRef)(),
                        amount: transactionData.amount,
                        userId: transactionData.userId,
                        productDescription: "GROUP_WALLET",
                        featureId: transactionData.featureId,
                        name: "Withdrawal refund",
                        type: "REFUND"
                    }
                });
                return [4 /*yield*/, pris_client_1.default.$transaction([groupWalletUpdate, newTransaction])];
            case 9:
                _d.sent();
                _d.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.updateCashwyreWithDrawalTransaction = updateCashwyreWithDrawalTransaction;
