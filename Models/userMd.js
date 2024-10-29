import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    address: { type: String, required: [true, 'address is required'] },
    city: { type: String, required: [true, 'city is required'] },
    country: { type: String, required: [true, 'country is required'] },
    postalCode: { type: Number, required: [true, 'postalCode is required'] },
})
const cartSchema = new mongoose.Schema({
    totalPrice: {
        type: Number,
        default: 0
    },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 }
    }]
})
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, 'email format invalid'],
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'phone is required'],
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    address: addressSchema,
    cart: { type: cartSchema, required: [true, 'cartSchema is required'] }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User