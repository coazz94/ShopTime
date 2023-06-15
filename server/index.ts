import express, { Express, Request, Response } from "express"
import "dotenv/config"

// Routes
import { authRoutes } from "./routes/auth"
import { userRoutes } from "./routes/user"

const app = express()

app.use(express.json())

// app.post("/auth/register", register)

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

app.listen(8000, () => console.log("Server is Running"))
