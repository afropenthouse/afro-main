"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRefreshToken = exports.signAccessToken = exports.isDevelopment = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var isDevelopment = function () {
    return process.env.APP_ENV === "DEV";
};
exports.isDevelopment = isDevelopment;
var signAccessToken = function (_a) {
    var email = _a.email, userId = _a.userId;
    var isDev = (0, exports.isDevelopment)();
    var accessToken = jsonwebtoken_1.default.sign({ userId: userId, email: email }, process.env.JWT_SECRET, { expiresIn: isDev ? "7d" : "7d" });
    return accessToken;
};
exports.signAccessToken = signAccessToken;
var signRefreshToken = function (_a) {
    var userId = _a.userId;
    var isDev = (0, exports.isDevelopment)();
    var refreshToken = jsonwebtoken_1.default.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: isDev ? "30d" : "30d" });
    return refreshToken;
};
exports.signRefreshToken = signRefreshToken;
