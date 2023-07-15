import { Request, Response } from "express"

// Handle Product Data
// Move multer to seperate File

export async function addProduct(req: Request, res: Response) {
    console.log(req.body)
    res.status(201).json("RESPONSE FROM BACKEND")
}
