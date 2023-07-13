import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User"

type RegisterData = {
    username: string
    email: string
    phone: string
    password: string
    r_password: string
    picturePath: string
}

export async function register(req: Request, res: Response) {
    try {
        const { username, email, phone, password, r_password, picturePath } = <
            RegisterData
        >req.body

        if (password !== r_password)
            res.status(403).json({ errorMessage: "passwords didn't matched" })
        // Add salt and hash the password
        const salt: string = bcrypt.genSaltSync(10)
        const hash: string = bcrypt.hashSync(password, salt)
        const newUser = new User({
            username,
            email,
            password: hash,
            phone,
            lastOnline: new Date(),
            picturePath: picturePath,
        })

        const savedUser = await newUser.save()

        res.status(201).json(savedUser)
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
            .json({ errorMessage: "Server side Error, Contact Helpdesk" })

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    // Do not send the password to the frontend
    user.password = ""

    res.status(201).json({ user, token })
}
