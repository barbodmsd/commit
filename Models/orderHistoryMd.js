import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductVariant'
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    statusPayment: {
        type: String,
        enum: ['success', 'fail'],
    },
    totalPrice: {
        type: Number,
        default: 0,
        required: [true, 'totalPrice is required']
    }
}, { timestamps: true })

const OrderHistory = mongoose.model('OrderHistory', orderSchema)
export default OrderHistory