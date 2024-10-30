import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: [true, 'product is required'] },
    variants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Variant', required: [true, 'variant is required'] }],
    price: { type: Number, required: [true, 'price is required'] },
    quantity: { type: Number, required: [true, 'quantity is required'] },
    image: { type: String, default: '' },
    discount: {
        type: Number,
        min: 0,
        max: 0
    },
    finalPrice: {
        type: Number,
        required: [true, 'finalPrice is required']
    }
}, { timestamps: true })

productVariantSchema.pre('save', (next) => {
    if (this.discount) {
        this.finalPrice = this.price - (this.price * (this.discount / 100))
    }
    next()
})
const ProductVariant = mongoose.model('ProductVariant', productVariantSchema)
export default ProductVariant