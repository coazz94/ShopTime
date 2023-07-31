import express from "express"
import { addProduct, getProduct } from "../controllers/product"
import { uploadProductPictures } from "../storage/multer"
import { getAllProducts } from "../controllers/products"

const router = express.Router()

// get Router get a specify product
router.get("/:id", getProduct)

// get route get all products
router.get("/get/all", getAllProducts)

// post new product
router.post("/add", uploadProductPictures.single("picture"), addProduct)

// edit a product

// delete a product

export { router as productRoutes }
