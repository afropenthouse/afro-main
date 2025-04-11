"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var venue_controller_1 = require("../controllers/venue/venue-controller");
var venue_validation_1 = require("../validation/venue-validation");
var web_controller_1 = require("../controllers/web/web-controller");
var webRoutes = express_1.default.Router();
// venueRoutes.use(verifyAccessToken)
webRoutes.route("/all").get(web_controller_1.getFilteredVenues);
webRoutes.route("/:id").get(venue_controller_1.getVenueDetail);
webRoutes.route("/promo-code/detail").post(venue_validation_1.promoCodeDetailValidation, venue_controller_1.getPromCodeDetail);
webRoutes.route("/pay").post(venue_validation_1.makePaymentValidation, venue_controller_1.MakePaymentAtVenue);
exports.default = webRoutes;
