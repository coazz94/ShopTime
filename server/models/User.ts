import mongoose, { Schema, Types } from "mongoose"

export interface UserSchema {
    _id: Types.ObjectId
    username: string
    email: string
    password: string
    phone: string
    lastOnline: Date
    picturePath: string
}

// https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose

// give every user a userId

const userSchema = new Schema<UserSchema>(
    {
        _id: { type: mongoose.Schema.Types.ObjectId },
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
