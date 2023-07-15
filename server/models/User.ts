import mongoose, { Schema, Types } from "mongoose"

export interface UserSchema {
    _id: {
        type: Types.ObjectId
        auto: boolean
    }
    username: string
    email: string
    password: string
    phone: string
    lastOnline: Date
    picturePath: string
}

const userSchema = new Schema<UserSchema>(
    {
        _id: {
            type: mongoose.Types.ObjectId,
            auto: true,
        },
        username: { type: String, required: true, max: 12, min: 4 },
        email: { type: String, required: true, max: 50, min: 10 },
        password: { type: String, required: true, min: 5 },
        phone: { type: String, min: 2 },
        lastOnline: { type: Date },
        picturePath: { type: String, default: "" },
    },
    { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
