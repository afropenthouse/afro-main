import express from "express"
import { verifyWebHook } from "../webhooks/verifyWebHook"
import { verifyCashwyreWebHook } from "../webhooks/verifyWebHook"



const hookRoutes = express.Router()


hookRoutes.route("/").post(verifyWebHook)
hookRoutes.route("/cashwyre").post(verifyCashwyreWebHook)


export default hookRoutes