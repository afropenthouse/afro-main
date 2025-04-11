"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var discount_controller_1 = require("../controllers/discounts/discount-controller");
var discountRoutes = express_1.default.Router();
discountRoutes.route("/all").get(discount_controller_1.getAllDiscounts);
exports.default = discountRoutes;
