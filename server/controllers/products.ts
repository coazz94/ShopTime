import { Request, Response } from "express"

export async function getAllProducts(req: Request, res: Response) {
    console.log("reached")
    res.status(201).json("got the route")
}
