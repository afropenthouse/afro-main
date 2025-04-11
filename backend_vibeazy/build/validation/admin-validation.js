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
exports.addVenueValidation = addVenueValidation;
exports.addPromoCodeValidation = addPromoCodeValidation;
exports.addLocationValidation = addLocationValidation;
exports.addCategoryValidation = addCategoryValidation;
exports.editVenueValidation = editVenueValidation;
exports.deleteVenueValidation = deleteVenueValidation;
var joi_1 = __importDefault(require("joi"));
var response_handler_1 = __importDefault(require("../utils/response-handler"));
function addVenueValidation(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var venueValidationSchema, validation, error;
        return __generator(this, function (_a) {
            venueValidationSchema = joi_1.default.object({
                categoryId: joi_1.default.string().uuid().required(),
                venueName: joi_1.default.string().required(),
                startAmount: joi_1.default.number().min(0).required(),
                endAmount: joi_1.default.number().min(joi_1.default.ref('startAmount')).required(), // endAmount should be >= startAmount
                accountNumber: joi_1.default.string(), // Allowing only numeric account numbers
                bankName: joi_1.default.string(),
                rating: joi_1.default.number().min(0).max(5).optional(), // Assuming rating is between 0 and 5
                callLine: joi_1.default.string(), // Numeric pattern for phone number-like call lines
                discount: joi_1.default.number().min(0).default(0).optional(),
                longitude: joi_1.default.string(),
                latitude: joi_1.default.string(),
                locationId: joi_1.default.string().uuid().required(),
                webLink: joi_1.default.string().required(),
                venueImages: joi_1.default.array().items(joi_1.default.string()).min(1).required(),
            });
            validation = venueValidationSchema.validate(req.body);
            if (validation.error) {
                error = validation.error.message ? validation.error.message : validation.error.details[0].message;
                return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, code: 400, error: error })];
            }
            next();
            return [2 /*return*/];
        });
    });
}
function addPromoCodeValidation(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var resetValidation, validation, error;
        return __generator(this, function (_a) {
            resetValidation = joi_1.default.object({
                discountPercent: joi_1.default.number().min(0).max(100).required(),
                code: joi_1.default.string().required(),
                isActive: joi_1.default.boolean().default(true),
                venueId: joi_1.default.string().required(),
            });
            validation = resetValidation.validate(req.body);
            if (validation.error) {
                error = validation.error.message ? validation.error.message : validation.error.details[0].message;
                return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, code: 400, error: error })];
            }
            next();
            return [2 /*return*/];
        });
    });
}
function addLocationValidation(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var resetValidation, validation, error;
        return __generator(this, function (_a) {
            resetValidation = joi_1.default.object({
                city: joi_1.default.string().required(),
            });
            validation = resetValidation.validate(req.body);
            if (validation.error) {
                error = validation.error.message ? validation.error.message : validation.error.details[0].message;
                return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, code: 400, error: error })];
            }
            next();
            return [2 /*return*/];
        });
    });
}
function addCategoryValidation(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var resetValidation, validation, error;
        return __generator(this, function (_a) {
            resetValidation = joi_1.default.object({
                category: joi_1.default.string().required(),
            });
            validation = resetValidation.validate(req.body);
            if (validation.error) {
                error = validation.error.message ? validation.error.message : validation.error.details[0].message;
                return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, code: 400, error: error })];
            }
            next();
            return [2 /*return*/];
        });
    });
}
function editVenueValidation(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var schema, validation, error;
        return __generator(this, function (_a) {
            schema = joi_1.default.object({
                id: joi_1.default.string().uuid().required(),
                categoryId: joi_1.default.string().uuid().optional(),
                venueName: joi_1.default.string().optional(),
                startAmount: joi_1.default.number().optional(),
                endAmount: joi_1.default.number().min(joi_1.default.ref('startAmount')).optional(), // endAmount should be >= startAmount
                accountNumber: joi_1.default.string().pattern(/^[0-9]+$/).optional(), // Allowing only numeric account numbers
                bankName: joi_1.default.string().optional(),
                rating: joi_1.default.number().min(0).max(5).optional(), // Assuming rating is between 0 and 5
                callLine: joi_1.default.string().optional(), // Numeric pattern for phone number-like call lines
                discount: joi_1.default.number().min(0).default(0),
                longitude: joi_1.default.string().optional(),
                latitude: joi_1.default.string().optional(),
                locationId: joi_1.default.string().uuid().optional(),
                webLink: joi_1.default.string().optional(),
                venueImages: joi_1.default.array().items(joi_1.default.string()).min(1).optional(),
            });
            validation = schema.validate(req.body);
            if (validation.error) {
                error = validation.error.message ? validation.error.message : validation.error.details[0].message;
                return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, code: 400, error: error })];
            }
            return [2 /*return*/, next()];
        });
    });
}
function deleteVenueValidation(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteSchema, validation, error;
        return __generator(this, function (_a) {
            deleteSchema = joi_1.default.object({
                venueId: joi_1.default.string().required(),
            });
            validation = deleteSchema.validate(req.body);
            if (validation.error) {
                error = validation.error.message ? validation.error.message : validation.error.details[0].message;
                return [2 /*return*/, response_handler_1.default.sendErrorResponse({ res: res, code: 400, error: error })];
            }
            next();
            return [2 /*return*/];
        });
    });
}
