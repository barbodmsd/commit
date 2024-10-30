import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['color', 'size'],
        required: [true, 'type is required']
    },
    value: {
        type: String,
        required: [true, 'value is required']
    }
}, { timestamps: true })
const Variant = mongoose.model('Variant', variantSchema)
export default Variant