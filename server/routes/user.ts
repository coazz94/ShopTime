import express from "express"

const router = express.Router()

/* READ */
router.get("/:id", (req, res) => res.send("hey"))

export { router as userRoutes }
