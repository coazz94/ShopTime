import express from "express"
import { login } from "../controllers/auth"
import { register } from "../controllers/auth"
import { uploadProfilePictures } from "../storage/multer"

const router = express.Router()

// login - register routes
router.post("/login", login)
router.post("/register", uploadProfilePictures.single("picture"), register)

export { router as authRoutes }
