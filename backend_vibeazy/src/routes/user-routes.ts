import express from "express"
import { verifyAccessToken } from "../middlewares/verifyAccessToken"
import { createPin, getUserProfileDetail } from "../controllers/user/user-controller"
import { createPinValidation } from "../validation/user-validation"

const userRoutes = express.Router()

userRoutes.use(verifyAccessToken)

userRoutes.route("/pin/create").post(createPinValidation,createPin)
userRoutes.route("/profile").get(getUserProfileDetail)

export default userRoutes