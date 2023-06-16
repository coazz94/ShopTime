import express, { Request, Response } from "express"
// import User from "../models/User.js"

async function getUser(req: Request, res: Response) {
    res.send(200).json({ message: "hey" })

    // try {
    //     const { id } = req.params
    //     const user = "Aleks"
    //     res.send(200).json({ message: "hey" })
    // } catch (error: unknown) {
    //     if (error instanceof Error) {
    //         res.send(404).json({ message: error.message })
    //     } else {
    //         res.send(404).json({
    //             message: "Something went wrong with the Request",
    //         })
    //     }
    // }
}

export { getUser }
