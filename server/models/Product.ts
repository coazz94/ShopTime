import mongoose, { Schema, Types } from "mongoose"

export interface ProductSchema {
    _id: {
        type: Types.ObjectId
        auto: boolean
    }
    productName: string
    description: string
    picturePath: string
    category: string
    price: Types.Decimal128
    status: string
    sold: boolean
    createdBy: Types.ObjectId
    comments: Types.ObjectId[]
}

const productSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
    },
    productName: { type: String, required: true, max: 15, min: 5 },
    description: { type: String, required: true, max: 50, min: 8 },
    picturePath: { type: String, default: "" },
    category: { type: String, required: true, max: 15, min: 4 },
    price: { type: Types.Decimal128, required: true },
    status: { type: String, required: true },
    sold: { type: Boolean, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
})

const Product = mongoose.model("Product", productSchema)

export default Product
