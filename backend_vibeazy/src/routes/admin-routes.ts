import express from "express"
import {
    addCategoryValidation, addLocationValidation, addPromoCodeValidation, addVenueValidation, 
    deleteVenueValidation, 
    editVenueValidation,
} from "../validation/admin-validation"

import { 
    addNewCategory, addNewLocation, addNewVenue, addPromoCodes, deleteVenue, getAllCategory, getAllLocation, getAllVenueData, 
    updateVenue
} from "../controllers/admin/admin-controller"
import { addDiscountValidation } from "../validation/discount-vlidation"
import { addNewDiscount } from "../controllers/admin/admin-controller"
import { getAllDiscounts } from "../controllers/discounts/discount-controller"
import { getVenueDetail } from "../controllers/venue/venue-controller"


const adminRoutes = express.Router()

adminRoutes.route("/category").post(addCategoryValidation,addNewCategory)
adminRoutes.route("/category").get(getAllCategory)
adminRoutes.route("/location").post(addLocationValidation,addNewLocation)
adminRoutes.route("/location").get(getAllLocation)
adminRoutes.route("/venue").post(addVenueValidation,addNewVenue)
adminRoutes.route("/venue").get(getAllVenueData)
adminRoutes.route("/venue/edit").put(editVenueValidation,updateVenue)
adminRoutes.route("/venue/delete").delete(deleteVenueValidation,deleteVenue)
adminRoutes.route("/promo-code").post(addPromoCodeValidation,addPromoCodes)
adminRoutes.route("/discount").post(addDiscountValidation,addNewDiscount)
adminRoutes.route("/discount").get(getAllDiscounts)
adminRoutes.route("/venue/:id").get(getVenueDetail)

export default adminRoutes