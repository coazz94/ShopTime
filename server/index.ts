import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import bodyParser from "body-parser"
import cors from "cors"
import path from "path"
import multer from "multer"
import "dotenv/config"

// Routes
import { authRoutes } from "./routes/auth"
import { userRoutes } from "./routes/user"

const PORT = process.env.PORT

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

// setup multer location of the storage for files, and name
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname)
    },
})
// setup the middleware
const upload = multer({ storage: storage })

// app.post("/auth/register", register)

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

app.listen(PORT, () => console.log(`Server is Running on Port: ${PORT}`))
