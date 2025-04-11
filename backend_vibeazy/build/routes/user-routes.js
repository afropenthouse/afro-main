"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var verifyAccessToken_1 = require("../middlewares/verifyAccessToken");
var user_controller_1 = require("../controllers/user/user-controller");
var user_validation_1 = require("../validation/user-validation");
var userRoutes = express_1.default.Router();
userRoutes.use(verifyAccessToken_1.verifyAccessToken);
userRoutes.route("/pin/create").post(user_validation_1.createPinValidation, user_controller_1.createPin);
userRoutes.route("/profile").get(user_controller_1.getUserProfileDetail);
exports.default = userRoutes;
