"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var verifyWebHook_1 = require("../webhooks/verifyWebHook");
var verifyWebHook_2 = require("../webhooks/verifyWebHook");
var hookRoutes = express_1.default.Router();
hookRoutes.route("/").post(verifyWebHook_1.verifyWebHook);
hookRoutes.route("/cashwyre").post(verifyWebHook_2.verifyCashwyreWebHook);
exports.default = hookRoutes;
