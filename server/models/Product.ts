import mongoose, { Schema, Types } from "mongoose"

export interface ProductSchema {
    _id: Types.ObjectId
    productName: string
    test: string
    picturePath: string
    sold: boolean
}

const productSchema = new Schema<ProductSchema>({
    _id: { type: mongoose.Schema.Types.ObjectId },
    productName: { type: String, required: true, max: 15, min: 4 },
    // createdby:
    picturePath: { type: String, default: "" },
    sold: { type: Boolean, default: false },
})

const Product = mongoose.model("Product", productSchema)

export default Product
