import express from "express"
import { allProdController, prodDetailsController } from "../controllers/shop.controller.js"
const prodRouter = express.Router()
import { authMiddleware } from "../middleware/authMiddleware.js"

prodRouter.get("/page/:pageNo",authMiddleware,allProdController)
prodRouter.get("/product/:productId",prodDetailsController)

export default prodRouter