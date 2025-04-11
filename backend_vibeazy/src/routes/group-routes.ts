import express from "express"
import { verifyAccessToken } from "../middlewares/verifyAccessToken"
import {
     addUserToGroupValidation, createGroupValidation, depositIntoGroupValidation, joinGroupWithLinkValidation, 
     withDrawFromGroupToBankValidation, 
     withDrawFromGroupValidation
} from "../validation/group-validation"
import {
     addUserToGroup, createNewGroupWallet, depositIntoGroup, getAllUserGroups, getSingleGroupDetail, joinGroupThroughLink,
     withdrawFromGroup,
     withdrawFromGroupToExternalBank
} from "../controllers/user/group-controller"


const groupRoutes = express.Router()

groupRoutes.use(verifyAccessToken)

groupRoutes.route('/all').get(getAllUserGroups)
groupRoutes.route("/new").post(createGroupValidation,createNewGroupWallet)
groupRoutes.route("/single/:id").get(getSingleGroupDetail)
groupRoutes.route("/add").post(addUserToGroupValidation,addUserToGroup)
groupRoutes.route("/join").post(joinGroupWithLinkValidation,joinGroupThroughLink)
groupRoutes.route("/deposit").post(depositIntoGroupValidation,depositIntoGroup)
groupRoutes.route("/withdraw").post(withDrawFromGroupValidation,withdrawFromGroup)
groupRoutes.route("/withdraw-to-bank").post(withDrawFromGroupToBankValidation,withdrawFromGroupToExternalBank)

export default groupRoutes