import { Request, Response, NextFunction } from "express"

export function addProduct(req: Request, res: Response, next: NextFunction) {
    console.log("hey")
    res.status(201)
    next()
}
