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
exports.getFilteredVenues = void 0;
var wrapper_1 = require("../../middlewares/wrapper");
var pris_client_1 = __importDefault(require("../../prisma/pris-client"));
var response_handler_1 = __importDefault(require("../../utils/response-handler"));
exports.getFilteredVenues = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var city, startAmount, endAmount, category, page, pageSize, filterObject, _a, venue, totalCount, totalPages;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                city = req.query.city || null;
                startAmount = Number(req.query.startAmount);
                endAmount = Number(req.query.endAmount);
                category = req.query.category || null;
                page = Number(req.query.page) || 1;
                pageSize = Number(req.query.count) || 9;
                if (isNaN(startAmount) || isNaN(endAmount)) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({
                            res: res,
                            error: "Invalid 'startAmount' or 'endAmount' passed",
                        })];
                }
                if (startAmount > endAmount) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({
                            res: res,
                            error: "Invalid range passed",
                        })];
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
                                location: true,
                            },
                            orderBy: {
                                rating: "desc",
                            },
                            skip: (page - 1) * pageSize,
                            take: pageSize,
                        }),
                        pris_client_1.default.venues.count({
                            where: filterObject,
                        }),
                    ])];
            case 1:
                _a = _b.sent(), venue = _a[0], totalCount = _a[1];
                totalPages = Math.ceil(totalCount / pageSize);
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({
                        res: res,
                        data: {
                            page: page,
                            totalCount: totalCount,
                            totalPages: totalPages,
                            venue: venue,
                        },
                    })];
        }
    });
}); });
