import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'title is required'],
    },
    image: {
        type: String,
        required: [true, 'image is required'],
        default: ''
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'description is required']
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    defaultVariant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductVariant'
    },
    variants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductVariant'
    }]
}, { timestamps: true })
const Product = mongoose.model("Product", productSchema)
export default Product