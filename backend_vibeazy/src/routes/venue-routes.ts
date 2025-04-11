import express from "express"
import { verifyAccessToken } from "../middlewares/verifyAccessToken"
import { getFilteredVenues, getPromCodeDetail, getVenueDetail, MakePaymentAtVenue } from "../controllers/venue/venue-controller"
import { makePaymentValidation, promoCodeDetailValidation } from "../validation/venue-validation"


const venueRoutes = express.Router()

venueRoutes.use(verifyAccessToken)

venueRoutes.route("/all").get(getFilteredVenues)
venueRoutes.route("/:id").get(getVenueDetail)
venueRoutes.route("/promo-code/detail").post(promoCodeDetailValidation,getPromCodeDetail)
venueRoutes.route("/pay").post(makePaymentValidation,MakePaymentAtVenue)

export default venueRoutes