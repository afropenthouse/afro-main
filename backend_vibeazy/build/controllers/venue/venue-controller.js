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
exports.getVenueDetail = exports.MakePaymentAtVenue = exports.getPromCodeDetail = exports.getFilteredVenues = void 0;
var constants_1 = require("../../config/constants");
var wrapper_1 = require("../../middlewares/wrapper");
var pris_client_1 = __importDefault(require("../../prisma/pris-client"));
var flutterwave_1 = require("../../services/flutterwave");
var arithmetic_util_1 = require("../../utils/arithmetic-util");
var response_handler_1 = __importDefault(require("../../utils/response-handler"));
var transaction_utils_1 = require("../../utils/transaction-utils");
exports.getFilteredVenues = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var city, startAmount, endAmount, category, page, filterObject, _a, venue, totalCount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                city = req.query.city || null;
                startAmount = Number(req.query.startAmount);
                endAmount = Number(req.query.endAmount);
                category = req.query.category || null;
                console.log(category);
                page = Number(req.query.page) || 1;
                // const pageSize = 2;
                if (!startAmount || !endAmount) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Invalid 'startAmount' or 'endAmount' passed" })];
                }
                if (startAmount > endAmount) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Invalid range passed" })];
                }
                filterObject = {
                    startAmount: {
                        gte: startAmount
                    },
                    endAmount: {
                        lte: endAmount
                    }
                };
                if (city) {
                    filterObject.location = { city: city };
                }
                if (category) {
                    filterObject.category = { category: category };
                }
                return [4 /*yield*/, pris_client_1.default.$transaction([
                        pris_client_1.default.venues.findMany({
                            where: filterObject,
                            include: {
                                category: true,
                                location: true
                            },
                            orderBy: {
                                rating: "desc"
                            },
                            // skip:(page - 1) * pageSize,
                            // take:pageSize
                        }),
                        pris_client_1.default.venues.count({ where: filterObject })
                    ])
                    // const totalPages = Math.ceil(totalCount / pageSize)
                ];
            case 1:
                _a = _b.sent(), venue = _a[0], totalCount = _a[1];
                // const totalPages = Math.ceil(totalCount / pageSize)
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: {
                            // totalPages,
                            totalCount: totalCount,
                            page: page,
                            venue: venue
                        } })];
        }
    });
}); });
exports.getPromCodeDetail = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, venueId, promoCode;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, code = _a.code, venueId = _a.venueId;
                return [4 /*yield*/, pris_client_1.default.promoCodes.findFirst({
                        where: {
                            venueId: venueId,
                            code: code
                        }
                    })];
            case 1:
                promoCode = _b.sent();
                if (!promoCode) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Promo code not valid for this venue" })];
                }
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { promoCode: promoCode } })];
        }
    });
}); });
exports.MakePaymentAtVenue = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, promoCodeId, venueId, amount, userId, venue, wallet, amountToPay, referralAmountToPay, promoCodePercent, promoCode, discountedAmount, removableFromReferralWallet, amountToSendToVenue, tx_ref, venueTransfer, txRef, transaction;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.body, promoCodeId = _a.promoCodeId, venueId = _a.venueId, amount = _a.amount;
                userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Server error", code: 500 })];
                }
                return [4 /*yield*/, pris_client_1.default.venues.findFirst({ where: { id: venueId } })];
            case 1:
                venue = _d.sent();
                if (!venue) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Venue ID supplied invalid" })];
                }
                return [4 /*yield*/, pris_client_1.default.userWallet.findFirst({ where: { userId: userId } })];
            case 2:
                wallet = _d.sent();
                if (!wallet) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Wallet has not been created for this user" })];
                }
                amountToPay = amount;
                referralAmountToPay = 0;
                promoCodePercent = 0;
                if (!promoCodeId) return [3 /*break*/, 5];
                return [4 /*yield*/, pris_client_1.default.promoCodes.findFirst({ where: { id: promoCodeId } })];
            case 3:
                promoCode = _d.sent();
                if (!promoCode) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Promo code not valid" })];
                }
                return [4 /*yield*/, pris_client_1.default.promoCodes.update({
                        where: { id: promoCodeId },
                        data: {
                            useTimes: promoCode.useTimes + 1
                        }
                    })];
            case 4:
                _d.sent();
                promoCodePercent = promoCode.discountPercent;
                discountedAmount = (0, arithmetic_util_1.calculateDiscountedAmount)(amount, promoCode.discountPercent);
                removableFromReferralWallet = amount * (constants_1.ReferralDiscountPercent / 100);
                //exclude from referral wallet if amount to pay is more than 10,000 
                //And referral balance is sufficient
                if ((amount >= constants_1.MinimumForReferralDiscount) &&
                    (wallet.referralBalance >= removableFromReferralWallet)) {
                    amountToPay = discountedAmount - removableFromReferralWallet;
                    referralAmountToPay = removableFromReferralWallet;
                }
                else {
                    amountToPay = discountedAmount;
                }
                _d.label = 5;
            case 5:
                if (wallet.balance < amountToPay) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Insufficient balance" })];
                }
                amountToSendToVenue = (0, arithmetic_util_1.calculateDiscountedAmount)(amount, (promoCodePercent * 2));
                console.log("venue-Amount", amountToSendToVenue);
                return [4 /*yield*/, pris_client_1.default.transactions.create({
                        data: {
                            txRef: (0, transaction_utils_1.generateTransactionRef)(),
                            status: "PENDING",
                            userId: userId,
                            productDescription: "VENUE_OUTWARD_PAYMENT",
                            featureId: venueId,
                            amount: amountToSendToVenue,
                            type: "NEUTRAL",
                            name: ((_c = req.user) === null || _c === void 0 ? void 0 : _c.username) || ""
                        }
                    })
                    //make transaction and verify it is successful before debiting users
                ];
            case 6:
                tx_ref = (_d.sent()).txRef;
                return [4 /*yield*/, (0, flutterwave_1.initiateBankTransfer)({
                        bankCode: venue.bankName, accountNumber: venue.accountNumber,
                        amount: amountToSendToVenue,
                        tx_ref: tx_ref,
                        narration: "subsidiary payment"
                    })];
            case 7:
                venueTransfer = _d.sent();
                console.log(venueTransfer, "app-console");
                if (!venueTransfer) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "payment could not be completed, try again" })];
                }
                txRef = (0, transaction_utils_1.generateTransactionRef)();
                return [4 /*yield*/, pris_client_1.default.transactions.create({
                        data: {
                            txRef: txRef,
                            amount: amountToPay,
                            userId: userId,
                            productDescription: "VENUE_PAYMENT",
                            featureId: venue.id,
                            name: venue.venueName,
                            type: "DEBIT"
                        }
                    })];
            case 8:
                transaction = _d.sent();
                return [4 /*yield*/, pris_client_1.default.userWallet.update({
                        where: { userId: userId },
                        data: {
                            balance: {
                                decrement: amountToPay
                            },
                            referralBalance: {
                                decrement: referralAmountToPay
                            }
                        }
                    })];
            case 9:
                _d.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, message: "".concat(amountToPay + referralAmountToPay, " NGN Payment is successful"), data: { transaction: transaction } })];
        }
    });
}); });
exports.getVenueDetail = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var venueId, venue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                venueId = req.params.id;
                return [4 /*yield*/, pris_client_1.default.venues.findFirst({
                        where: { id: venueId },
                        include: {
                            location: true,
                            category: true
                        }
                    })];
            case 1:
                venue = _a.sent();
                if (!venue) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "venue Id supplied is invaliod" })];
                }
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: venue })];
        }
    });
}); });
