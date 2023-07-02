import mongoose, { Schema, InferSchemaType, mongo } from "mongoose"

// set the type for the User
// type User = InferSchemaType<typeof userSchema>

export interface UserSchema {
    username: string
    email: string
    password: string
    phone: number
    lastOnline: Date
    picturePath: string
}

const userSchema = new Schema<UserSchema>(
    {
        username: { type: String, required: true, max: 12, min: 4 },
        email: { type: String, required: true, max: 50, min: 10 },
        password: { type: String, required: true, min: 5 },
        phone: { type: Number, min: 2 },
        lastOnline: { type: Date },
        picturePath: { type: String, default: "" },
    },
    { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
