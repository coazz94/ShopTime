import express from "express"
import { addProduct, getProduct } from "../controllers/product"
import { uploadProductPictures } from "../storage/multer"

const router = express.Router()

// get Router get a specify product
router.get("/:id", getProduct)

// get route get all products

// post new product
router.post("/add", uploadProductPictures.single("picture"), addProduct)

// edit a product

// delete a product

export { router as productRoutes }
