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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewDiscount = exports.deleteVenue = exports.updateVenue = exports.getAllVenueData = exports.getAllLocation = exports.getAllCategory = exports.addPromoCodes = exports.addNewVenue = exports.addNewLocation = exports.addNewCategory = void 0;
var wrapper_1 = require("../../middlewares/wrapper");
var pris_client_1 = __importDefault(require("../../prisma/pris-client"));
var response_handler_1 = __importDefault(require("../../utils/response-handler"));
exports.addNewCategory = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var category, newCategory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                category = req.body.category;
                return [4 /*yield*/, pris_client_1.default.category.create({ data: { category: category } })];
            case 1:
                newCategory = _a.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { category: newCategory } })];
        }
    });
}); });
exports.addNewLocation = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var city, location;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                city = req.body.city;
                return [4 /*yield*/, pris_client_1.default.location.create({ data: { city: city } })];
            case 1:
                location = _a.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { location: location } })];
        }
    });
}); });
exports.addNewVenue = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, categoryId, locationId, venueData, category, location, venue;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, categoryId = _a.categoryId, locationId = _a.locationId, venueData = __rest(_a, ["categoryId", "locationId"]);
                return [4 /*yield*/, pris_client_1.default.category.findFirst({ where: { id: categoryId } })];
            case 1:
                category = _b.sent();
                if (!category) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Category Id supplied invalid" })];
                }
                return [4 /*yield*/, pris_client_1.default.location.findFirst({ where: { id: locationId } })];
            case 2:
                location = _b.sent();
                if (!location) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Location Id supplied invalid" })];
                }
                return [4 /*yield*/, pris_client_1.default.venues.create({
                        data: __assign({ categoryId: categoryId, locationId: locationId }, venueData)
                    })];
            case 3:
                venue = _b.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { venue: venue } })];
        }
    });
}); });
exports.addPromoCodes = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, venueId, promoCodeData, venue, isExisting, promoCode;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, venueId = _a.venueId, promoCodeData = __rest(_a, ["venueId"]);
                return [4 /*yield*/, pris_client_1.default.venues.findFirst({ where: {
                            id: venueId
                        } })];
            case 1:
                venue = _b.sent();
                if (!venue) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Venue ID supplied invalid" })];
                }
                return [4 /*yield*/, pris_client_1.default.promoCodes.findFirst({
                        where: {
                            venueId: venueId,
                            code: promoCodeData.code
                        }
                    })];
            case 2:
                isExisting = _b.sent();
                if (isExisting) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Promo code already existing for this location" })];
                }
                return [4 /*yield*/, pris_client_1.default.promoCodes.create({
                        data: __assign({ venueId: venueId }, promoCodeData)
                    })];
            case 3:
                promoCode = _b.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { promoCode: promoCode } })];
        }
    });
}); });
exports.getAllCategory = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var category;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pris_client_1.default.category.findMany({ include: { venues: true } })];
            case 1:
                category = _a.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { category: category } })];
        }
    });
}); });
exports.getAllLocation = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var location;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pris_client_1.default.location.findMany({ include: { venues: true } })];
            case 1:
                location = _a.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { location: location } })];
        }
    });
}); });
exports.getAllVenueData = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var venues;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pris_client_1.default.venues.findMany({
                    include: {
                        promoCode: true,
                        location: true,
                        category: true
                    }
                })];
            case 1:
                venues = _a.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { venues: venues } })];
        }
    });
}); });
exports.updateVenue = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, venueData, venue, updatedVenue;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, venueData = __rest(_a, ["id"]);
                return [4 /*yield*/, pris_client_1.default.venues.findFirst({
                        where: { id: id }
                    })];
            case 1:
                venue = _b.sent();
                if (!venue) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Venue ID is Invalid" })];
                }
                return [4 /*yield*/, pris_client_1.default.venues.update({
                        where: { id: id },
                        data: venueData
                    })];
            case 2:
                updatedVenue = _b.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, message: "venue update successful", data: updatedVenue })];
        }
    });
}); });
exports.deleteVenue = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var venueId, venue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                venueId = req.body.venueId;
                return [4 /*yield*/, pris_client_1.default.venues.findFirst({
                        where: { id: venueId }
                    })];
            case 1:
                venue = _a.sent();
                if (!venue) {
                    return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, error: "Venue ID is Invalid" })];
                }
                return [4 /*yield*/, pris_client_1.default.venues.delete({
                        where: { id: venueId }
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, message: "venue successfully deleted" })];
        }
    });
}); });
exports.addNewDiscount = (0, wrapper_1.catchAuthError)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, image, url, newDiscount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, title = _a.title, image = _a.image, url = _a.url;
                return [4 /*yield*/, pris_client_1.default.discount.create({
                        data: {
                            title: title,
                            image: image,
                            url: url
                        }
                    })];
            case 1:
                newDiscount = _b.sent();
                return [2 /*return*/, response_handler_1.default.sendSuccessResponse({ res: res, data: { category: newDiscount } })];
        }
    });
}); });
