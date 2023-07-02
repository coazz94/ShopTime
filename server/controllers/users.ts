import express, { Request, Response } from "express"
import User from "../models/User.js"

async function getUser(req: Request, res: Response) {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message })
        } else {
            res.status(404).json({
                message: "Something went wrong with the Request",
            })
        }
    }
}

export { getUser }

//648dae3240e11476d41053b9 Jelenchita
