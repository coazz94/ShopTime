import express from "express"
import { addProduct } from "../controllers/product"

const router = express.Router()

// get Router get a specify product

// get route get all products

// post new product
router.post("/add", addProduct)

// edit a product

// delete a product

export { router as productRoutes }
