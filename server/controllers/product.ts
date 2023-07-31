import { Request, Response } from "express"
import Product, { ProductSchema } from "../models/Product"
import { statuses, categories } from "./frontendData"

export async function addProduct(req: Request, res: Response) {
    //Add check if the same item exits by this user already
    // Limit to 5 postings a day

    try {
        // take out the data from the request
        const {
            productName,
            description,
            category,
            price,
            status,
            picturePath,
            createdBy,
        } = <ProductSchema>req.body

        console.log(createdBy)

        // check if the data from frontend is not hijacked
        if (categories.includes(category) && statuses.includes(status)) {
            const newProduct = new Product({
                productName,
                description,
                category,
                price,
                status,
                picturePath,
                sold: false,
                createdBy: createdBy,
            })

            console.log("Createdby", createdBy)

            const savedProduct = await newProduct.save()
            res.status(201).json(savedProduct)
        }
    } catch (error) {
        res.status(404).json({
            errorMessage: "Product not created, internal error",
        })
    }
}

export async function getProduct(req: Request, res: Response) {
    const id = req.params.id
    console.log(id)

    try {
        const product = await Product.findOne({ _id: id }) // no criteria
        // set here the rigth status
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({
            errorMessage: "Product not found",
        })
    }
}
