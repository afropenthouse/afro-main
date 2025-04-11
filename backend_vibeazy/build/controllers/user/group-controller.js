"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdrawFromGroupToExternalBank = exports.withdrawFromGroup = exports.depositIntoGroup = exports.joinGroupThroughLink = exports.addUserToGroup = exports.createNewGroupWallet = exports.getSingleGroupDetail = exports.getAllUserGroups = void 0;
var wrapper_1 = require("../../middlewares/wrapper");
var pris_client_1 = __importDefault(require("../../prisma/pris-client"));
var group_utils_1 = require("../../utils/group-utils");
var response_handler_1 = __importDefault(require("../../utils/response-handler"));
var transaction_utils_1 = require("../../utils/transaction-utils");
var cashwyre_1 = require("../../services/cashwyre");
var user_utils_1 = require("../../utils/user-utils");
exports.getAllUserGroups = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, userGroups, transformedGroup;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "server error", code: 500 })];
                }
                return [4 /*yield*/, pris_client_1.default.individualWallet.findMany({
                        where: { userId: userId },
                        include: { collection: true }
                    })];
            case 1:
                userGroups = _b.sent();
                transformedGroup = userGroups.map(function (_a) {
                    var collection = _a.collection, item = __rest(_a, ["collection"]);
                    return __assign(__assign({}, item), { collection: __assign(__assign({}, collection), { isAdmin: userId === collection.adminId }) });
                });
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: transformedGroup })];
        }
    });
}); });
exports.getSingleGroupDetail = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, groupId, collectiveWallet;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({
                            res: res,
                            error: "Server error",
                            code: 500,
                        })];
                }
                groupId = req.params.id;
                return [4 /*yield*/, pris_client_1.default.collectiveWallet.findFirst({
                        where: { id: groupId },
                        include: {
                            individuals: true,
                            transactions: true, // Include related transactions
                        },
                    })];
            case 1:
                collectiveWallet = _b.sent();
                if (!collectiveWallet) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({
                            res: res,
                            error: "Collective wallet not found",
                        })];
                }
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({
                        res: res,
                        data: collectiveWallet,
                    })];
        }
    });
}); });
exports.createNewGroupWallet = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, groupLogo, name, sharableLink, newGroup;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "server error", code: 500 })];
                }
                _a = req.body, groupLogo = _a.groupLogo, name = _a.name;
                sharableLink = (0, group_utils_1.generateGroupLink)();
                return [4 /*yield*/, pris_client_1.default.collectiveWallet.create({
                        data: {
                            adminId: userId,
                            name: name,
                            groupLogo: groupLogo,
                            sharableLink: sharableLink,
                            individuals: {
                                create: {
                                    userId: userId,
                                }
                            }
                        }
                    })];
            case 1:
                newGroup = _c.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: newGroup })];
        }
    });
}); });
exports.addUserToGroup = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, username, groupId, searchedUser, collectiveWallet, isAlreadyAMember;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "server error", code: 500 })];
                }
                _a = req.body, username = _a.username, groupId = _a.groupId;
                return [4 /*yield*/, pris_client_1.default.user.findFirst({ where: { username: {
                                contains: username,
                                mode: "insensitive"
                            } } })];
            case 1:
                searchedUser = _c.sent();
                if (!searchedUser) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Username does not exist" })];
                }
                return [4 /*yield*/, pris_client_1.default.collectiveWallet.findFirst({
                        where: { id: groupId }
                    })];
            case 2:
                collectiveWallet = _c.sent();
                if (!collectiveWallet) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "No collective wallet found" })];
                }
                if (collectiveWallet.adminId !== userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Not permitted to add user", code: 401 })];
                }
                return [4 /*yield*/, pris_client_1.default.individualWallet.findFirst({
                        where: { userId: searchedUser.id, collectionId: groupId, }
                    })];
            case 3:
                isAlreadyAMember = _c.sent();
                if (isAlreadyAMember) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "User is already a member" })];
                }
                return [4 /*yield*/, pris_client_1.default.individualWallet.create({
                        data: {
                            userId: searchedUser.id, collectionId: groupId
                        }
                    })];
            case 4:
                _c.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, message: "".concat(username, " has been added to ").concat(collectiveWallet.name) })];
        }
    });
}); });
exports.joinGroupThroughLink = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, sharableLink, isLinkValid, isAlreadyAMember;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "server error", code: 500 })];
                }
                sharableLink = req.body.sharableLink;
                return [4 /*yield*/, pris_client_1.default.collectiveWallet.findFirst({
                        where: { sharableLink: sharableLink }
                    })];
            case 1:
                isLinkValid = _b.sent();
                if (!isLinkValid) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Link is invalid" })];
                }
                return [4 /*yield*/, pris_client_1.default.individualWallet.findFirst({
                        where: {
                            userId: userId,
                            collectionId: isLinkValid.id
                        }
                    })];
            case 2:
                isAlreadyAMember = _b.sent();
                if (isAlreadyAMember) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Already a member of this group" })];
                }
                return [4 /*yield*/, pris_client_1.default.individualWallet.create({
                        data: {
                            userId: userId,
                            collectionId: isLinkValid.id
                        }
                    })];
            case 3:
                _b.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, message: "Successfully added to the group", data: {
                            groupId: isLinkValid.id
                        } })];
        }
    });
}); });
exports.depositIntoGroup = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, groupId, amount, collectiveWallet, isAMember, userWallet, walletOperations, transactionOperations, notificationOperations, individualWallet, operations;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "server error", code: 500 })];
                }
                _a = req.body, groupId = _a.groupId, amount = _a.amount;
                return [4 /*yield*/, pris_client_1.default.collectiveWallet.findFirst({
                        where: { id: groupId },
                        include: { individuals: true }
                    })];
            case 1:
                collectiveWallet = _d.sent();
                if (!collectiveWallet) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "No group found " })];
                }
                return [4 /*yield*/, pris_client_1.default.individualWallet.findFirst({
                        where: {
                            collectionId: groupId,
                            userId: userId,
                        }
                    })];
            case 2:
                isAMember = _d.sent();
                if (!isAMember) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Not a member of this group" })];
                }
                return [4 /*yield*/, pris_client_1.default.userWallet.findFirst({
                        where: { userId: userId }
                    })];
            case 3:
                userWallet = _d.sent();
                if (!userWallet || userWallet.balance < amount) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Insufficient balance in wallet" })];
                }
                walletOperations = [
                    //update group wallet balance
                    pris_client_1.default.collectiveWallet.update({
                        where: { id: groupId },
                        data: {
                            groupBalance: { increment: amount },
                            lastDepositedAt: new Date()
                        }
                    }),
                    //increment user wallet balance
                    pris_client_1.default.userWallet.update({
                        where: { id: userWallet.id },
                        data: {
                            balance: { decrement: amount },
                            lastWithdrawalAt: new Date()
                        }
                    }),
                ];
                transactionOperations = [
                    //create credit transaction for group wallet
                    pris_client_1.default.transactions.create({
                        data: {
                            txRef: (0, transaction_utils_1.generateTransactionRef)(),
                            userId: userId,
                            type: "CREDIT",
                            amount: amount,
                            name: "".concat((_c = req.user) === null || _c === void 0 ? void 0 : _c.username, " Deposit"),
                            productDescription: "GROUP_WALLET",
                            featureId: collectiveWallet.id
                        }
                    }),
                    //create debit transaction for user wallet
                    pris_client_1.default.transactions.create({
                        data: {
                            txRef: (0, transaction_utils_1.generateTransactionRef)(),
                            userId: userId,
                            type: "DEBIT",
                            amount: amount,
                            name: "".concat(collectiveWallet.name, " Deposit"),
                            productDescription: "WALLET",
                            featureId: userWallet.id
                        }
                    })
                ];
                notificationOperations = pris_client_1.default.notifications.createMany({
                    data: collectiveWallet.individuals.map(function (item) {
                        var _a;
                        return {
                            userId: item.userId,
                            type: "COLLECTION_GROUP",
                            content: "".concat((_a = req.user) === null || _a === void 0 ? void 0 : _a.username, " Deposited ").concat(amount, " into ").concat(collectiveWallet.name)
                        };
                    })
                });
                individualWallet = pris_client_1.default.individualWallet.update({
                    where: { id: isAMember.id },
                    data: {
                        contributedAmount: { increment: amount }
                    }
                });
                operations = __spreadArray(__spreadArray(__spreadArray([], walletOperations, true), transactionOperations, true), [notificationOperations, individualWallet], false);
                //update all in a single operation
                return [4 /*yield*/, pris_client_1.default.$transaction(operations)];
            case 4:
                //update all in a single operation
                _d.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, message: "Successfully deposited ".concat(amount, " into ").concat(collectiveWallet.name) })];
        }
    });
}); });
exports.withdrawFromGroup = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, groupId, amount, username, collectiveWallet, isAdmin, destinationUser, userWallet, walletOperations, transactionOperations, notificationOperations, operations;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "server error", code: 500 })];
                }
                _a = req.body, groupId = _a.groupId, amount = _a.amount, username = _a.username;
                return [4 /*yield*/, pris_client_1.default.collectiveWallet.findFirst({
                        where: { id: groupId },
                        include: { individuals: true }
                    })];
            case 1:
                collectiveWallet = _d.sent();
                if (!collectiveWallet) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "No group found " })];
                }
                isAdmin = collectiveWallet.adminId === userId;
                if (!isAdmin) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Not permitted to withdraw from this group", code: 401 })];
                }
                return [4 /*yield*/, pris_client_1.default.user.findFirst({
                        where: { username: username },
                        include: { wallet: true }
                    })];
            case 2:
                destinationUser = _d.sent();
                if (!destinationUser) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "username supplied is invalid" })];
                }
                userWallet = destinationUser.wallet;
                if (!userWallet) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "supplied user has no active wallet" })];
                }
                walletOperations = [
                    //decrement group wallet balance
                    pris_client_1.default.collectiveWallet.update({
                        where: { id: groupId },
                        data: {
                            groupBalance: { decrement: amount },
                            lastWithdrawalAt: new Date()
                        }
                    }),
                    //increase user wallet balance
                    pris_client_1.default.userWallet.update({
                        where: { id: userWallet.id },
                        data: {
                            balance: { increment: amount },
                            lastDepositedAt: new Date()
                        }
                    }),
                ];
                transactionOperations = [
                    //create debit transaction for group wallet
                    pris_client_1.default.transactions.create({
                        data: {
                            txRef: (0, transaction_utils_1.generateTransactionRef)(),
                            userId: userId,
                            type: "DEBIT",
                            amount: amount,
                            name: "".concat((_c = req.user) === null || _c === void 0 ? void 0 : _c.username, " Withdrawal"),
                            productDescription: "GROUP_WALLET",
                            featureId: collectiveWallet.id
                        }
                    }),
                    //create credit transaction for user wallet
                    pris_client_1.default.transactions.create({
                        data: {
                            txRef: (0, transaction_utils_1.generateTransactionRef)(),
                            userId: userId,
                            type: "CREDIT",
                            amount: amount,
                            name: "".concat(collectiveWallet.name, " Withdrawal"),
                            productDescription: "WALLET",
                            featureId: userWallet.id
                        }
                    })
                ];
                notificationOperations = pris_client_1.default.notifications.createMany({
                    data: collectiveWallet.individuals.map(function (item) {
                        var _a;
                        return {
                            userId: item.userId,
                            type: "COLLECTION_GROUP",
                            content: "".concat((_a = req.user) === null || _a === void 0 ? void 0 : _a.username, " withdrew ").concat(amount, " from ").concat(collectiveWallet.name)
                        };
                    })
                });
                operations = __spreadArray(__spreadArray(__spreadArray([], walletOperations, true), transactionOperations, true), [notificationOperations], false);
                //update all in a single operation
                return [4 /*yield*/, pris_client_1.default.$transaction(operations)];
            case 3:
                //update all in a single operation
                _d.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, message: "Successfully withdrew ".concat(amount, " into ").concat(username, " wallet") })];
        }
    });
}); });
exports.withdrawFromGroupToExternalBank = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, groupId, amount, accountNumber, bankCode, accountName, pin, collectiveWallet, isAdmin, userWallet, userPin, isPinValid, transaction, paymentStatus;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId;
                if (!userId) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "server error", code: 500 })];
                }
                _a = req.body, groupId = _a.groupId, amount = _a.amount, accountNumber = _a.accountNumber, bankCode = _a.bankCode, accountName = _a.accountName, pin = _a.pin;
                return [4 /*yield*/, pris_client_1.default.collectiveWallet.findFirst({
                        where: { id: groupId },
                        include: { individuals: true }
                    })];
            case 1:
                collectiveWallet = _d.sent();
                if (!collectiveWallet) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "No group found " })];
                }
                isAdmin = collectiveWallet.adminId === userId;
                if (!isAdmin) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Not permitted to withdraw", code: 401 })];
                }
                return [4 /*yield*/, pris_client_1.default.userWallet.findFirst({
                        where: { userId: userId },
                        include: { user: true }
                    })];
            case 2:
                userWallet = _d.sent();
                if (!userWallet) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "User has no active wallet" })];
                }
                userPin = (_c = userWallet.user) === null || _c === void 0 ? void 0 : _c.pin;
                if (!userPin) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "No pin has been created" })];
                }
                return [4 /*yield*/, (0, user_utils_1.bcryptCompare)({ password: pin, hashedPassword: userPin })];
            case 3:
                isPinValid = _d.sent();
                if (!isPinValid) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Pin supplied is invalid" })];
                }
                if (collectiveWallet.groupBalance < amount) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Insufficient fund in group" })];
                }
                return [4 /*yield*/, pris_client_1.default.transactions.create({
                        data: {
                            txRef: (0, transaction_utils_1.generateTransactionRef)(),
                            status: "PENDING",
                            userId: userId,
                            productDescription: "GROUP_WALLET",
                            featureId: collectiveWallet.id,
                            amount: amount,
                            type: "DEBIT",
                            name: "Withdrawal To Bank",
                            collectiveWalletId: groupId
                        }
                    })];
            case 4:
                transaction = _d.sent();
                return [4 /*yield*/, (0, cashwyre_1.initiateCashwyrePayout)(bankCode, accountName, accountNumber, amount, transaction.txRef)];
            case 5:
                paymentStatus = _d.sent();
                if (!!paymentStatus) return [3 /*break*/, 7];
                return [4 /*yield*/, pris_client_1.default.transactions.update({
                        where: { id: transaction.id },
                        data: { status: "FAIL" }
                    })];
            case 6:
                _d.sent();
                return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "payment could not be completed, try again" })];
            case 7: return [4 /*yield*/, pris_client_1.default.collectiveWallet.update({
                    where: { id: collectiveWallet.id },
                    data: {
                        groupBalance: {
                            decrement: amount
                        }
                    }
                })];
            case 8:
                _d.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, message: "payment of NGN ".concat(amount, " is being processed") })];
        }
    });
}); });
