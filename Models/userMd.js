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
        productVariant: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant', required: [true, 'productId is required'] },
        quantity: { type: Number, default: 1 },

    }]
})
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
        unique: [true, 'username already exist']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, 'email format invalid'],
        trim: true,
        unique: [true, 'email already exist']
    },
    password: {
        type: String,
        trim: true
    },
    // phone: {
    //     type: String,
    //     unique: [true, 'phone already exist'],
    //     required: [true, 'phone is required'],
    //     trim: true,
    //     match: [
    //         /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm,
    //         "invalid phone number",
    //     ],
    // },
    // role: {
    //     type: String,
    //     enum: ['user', 'admin'],
    //     default: 'user'
    // },
    // address: addressSchema,
    // cart: { type: cartSchema, required: [true, 'cartSchema is required'] }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User