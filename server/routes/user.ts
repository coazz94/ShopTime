import express from "express"
import { getUser } from "../controllers/users"

const router = express.Router()

/* READ */
router.get("/:id", getUser)

export { router as userRoutes }
