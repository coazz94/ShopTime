import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import bodyParser from "body-parser"
import cors from "cors"
import path from "path"
import multer from "multer"
import "dotenv/config"
import mongoose from "mongoose"
import { register } from "./controllers/auth"

// Routes
import { authRoutes } from "./routes/auth"
import { userRoutes } from "./routes/user"
import User from "./models/User"
import { users } from "./data"

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

// use helmet for crossOriginResourcePolicy
// cross-origin so we accept cross origin i every request
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))

// use morgan for better output
app.use(morgan("tiny"))

// use these bodyParsers for the Post requests
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(bodyParser.json({ limit: "30mb" }))

// to be able to communicate in our APP use cors()
app.use(cors())

// set the directory where we save the files
app.use("/assets", express.static(path.join(__dirname, "public/assets")))

// TODO FILENAME DISsapears from reequest

// setup multer location of the storage for files, and name
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})
// setup the middleware
export const upload = multer({ storage: storage })

// app.post("/auth/register", upload.single("picture"), register)
app.post("/auth/register", upload.single("picture"), register)
app.use("/auth", authRoutes)
app.use("/user", userRoutes)

// connect to the mongodb database, use `` for the URI In typescript !
mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
        app.listen(PORT, () =>
            console.log(
                `Mongo is connected, Server is Running on Port: ${PORT}`
            )
        )
        // User.insertMany(users)
    })
    .catch((error) => console.log(`${error} did not connect`))

// app.listen(PORT, () => console.log("listening"))
