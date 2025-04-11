"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var verifyAccessToken_1 = require("../middlewares/verifyAccessToken");
var venue_controller_1 = require("../controllers/venue/venue-controller");
var venue_validation_1 = require("../validation/venue-validation");
var venueRoutes = express_1.default.Router();
venueRoutes.use(verifyAccessToken_1.verifyAccessToken);
venueRoutes.route("/all").get(venue_controller_1.getFilteredVenues);
venueRoutes.route("/:id").get(venue_controller_1.getVenueDetail);
venueRoutes.route("/promo-code/detail").post(venue_validation_1.promoCodeDetailValidation, venue_controller_1.getPromCodeDetail);
venueRoutes.route("/pay").post(venue_validation_1.makePaymentValidation, venue_controller_1.MakePaymentAtVenue);
exports.default = venueRoutes;
