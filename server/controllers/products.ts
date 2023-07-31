import { Request, Response } from "express"
import Product from "../models/Product"

export async function getAllProducts(req: Request, res: Response) {
    try {
        // find all products in the db and return them
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({
            errorMessage: "No Products found",
        })
    }
}
