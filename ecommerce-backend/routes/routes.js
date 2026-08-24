import express from "express"
import { Router } from "express"
import { authLogin,authRegister,getUserData } from "../controllers/auth.controller.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = Router()

router.post("/register",authRegister)
router.post("/login",authLogin)
router.get("/getUser",authMiddleware,getUserData)

export default router