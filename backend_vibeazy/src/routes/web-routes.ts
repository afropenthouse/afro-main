import express from "express"
import { verifyAccessToken } from "../middlewares/verifyAccessToken"
import {getPromCodeDetail, getVenueDetail, MakePaymentAtVenue } from "../controllers/venue/venue-controller"
import { makePaymentValidation, promoCodeDetailValidation } from "../validation/venue-validation"
import { getFilteredVenues } from "../controllers/web/web-controller"
import { addWebEmail } from "../controllers/web/web-controller"


const webRoutes = express.Router()

// venueRoutes.use(verifyAccessToken)

webRoutes.route("/all").get(getFilteredVenues)
webRoutes.route("/web-register").post(addWebEmail)

export default webRoutes