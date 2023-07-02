import express from "express"
import { getUser } from "../controllers/users"

const router = express.Router()

/* READ */
router.get("/:id", getUser)
// router.get("/:id", (req, res) => res.send("<h1>Test</h1>"))
// router.get("/:id", (req, res) => res.send(req.params))

export { router as userRoutes }
