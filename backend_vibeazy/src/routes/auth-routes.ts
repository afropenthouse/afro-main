import express from "express"
import {  forgotPasswordValidation, loginValidation, passwordResetValidation, refreshTokenValidation, signUpValidation, verifyEmailValidation } from "../validation/user-validation"
import { userSignUp, logOutUser, refreshUserToken, signInUser, verifyLoginCredentials, verifyUserEmail, forgotPassword, resetPassword } from "../controllers/user/auth-controller"
import { verifyAccessToken } from "../middlewares/verifyAccessToken"

const authRoutes = express.Router()

authRoutes.route('/signup').post(signUpValidation,userSignUp)
authRoutes.route('/email/verify').post(verifyEmailValidation,verifyUserEmail,signInUser)
authRoutes.route('/login').post(loginValidation,verifyLoginCredentials,signInUser)
authRoutes.route('/forgot-password').post(forgotPasswordValidation,forgotPassword)
authRoutes.route('/reset-password').post(passwordResetValidation,resetPassword)

//authenticated related end points

authRoutes.route('/token/refresh').post(verifyAccessToken,refreshTokenValidation,refreshUserToken)
authRoutes.route('/logout').get(verifyAccessToken,logOutUser)

export default authRoutes