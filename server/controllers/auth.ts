import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User"

type RegisterData = {
    username: string
    email: string
    phone: number
    password: string
    r_password: string
    picture: string
}

export async function register(req: Request, res: Response) {
    try {
        const { username, email, phone, password, r_password, picture } = <
            RegisterData
        >req.body

        console.log(req.body)

        res.status(201).json(req.body)
    } catch (error) {
        console.log(error)
    }
}

export async function login(req: Request, res: Response) {
    const { email, password: loginPassword } = req.body

    // Try to find the user
    const user = await User.findOne({ email })
    // if user doesn't exists return error
    if (!user) return res.status(404).json({ errorMessage: "User not found" })

    // if user found check password with hash
    const isMatch = bcrypt.compareSync(loginPassword, user.password)

    // if no match password is wrong
    if (!isMatch)
        return res.status(404).json({ errorMessage: "Password is wrong" })

    if (process.env.JWT_SECRET === undefined)
        return res
            .status(404)
            .json({ errorMessage: "JWT_SECRET wasn't available" })

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    // Do not send the password to the frontend
    user.password = ""

    res.status(201).json({ user, token })
}

// if (password !== r_password)
//     res.status(403).json({ errorMessage: "passwords didn't matched" })
// const salt: string = bcrypt.genSaltSync(10)
// const hash: string = bcrypt.hashSync(password, salt)
// const newUser = new User({
//     username,
//     email,
//     password: hash,
//     phone,
//     lastOnline: new Date(),
// })

// const savedUser = await newUser.save()
