import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User"
import { UserSchema } from "../models/User"

type RegisterData = {
    username: string
    email: string
    phone: number
    password: string
    r_password: string
}

export async function register(req: Request, res: Response) {
    try {
        // const { username, email, phone, password, r_password } = <RegisterData>(
        //     req.body
        // )

        // const salt: string = await bcrypt.genSalt()
        // const passwordHash: string = await bcrypt.hash(password, salt)

        // const newUser = new User({
        //     username,
        //     email,
        //     password: passwordHash,
        //     phone,
        //     lastOnline: new Date(),
        // })

        // const savedUser = await newUser.save()
        // res.status(201).json(savedUser)

        res.status(201).json("succeed")
    } catch (error) {
        console.log(error)
    }
}

export function login() {
    console.log("hey")
}
