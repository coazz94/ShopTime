import { Request, Response } from "express"

export async function register(req: Request, res: Response) {
    console.log(req.body)

    // try {
    //     const { username, email, phone, password, r_password } = req.body
    //     console.log(username, email, phone, password, r_password)
    // } catch (error) {}
}

export function login() {
    console.log("hey")
}
