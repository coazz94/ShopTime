import mongoose, { Schema, Types } from "mongoose"

export interface CommentSchema {
    _id: {
        type: Types.ObjectId
        auto: boolean
    }
    createdBy: Types.ObjectId
    description: string
}

const commentSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    comment: { type: String, required: true, max: 50, min: 8 },
})

const Comment = mongoose.model("Comment", commentSchema)

export default Comment
