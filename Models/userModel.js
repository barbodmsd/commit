import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
        unique: [true, 'username already taken']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'email is required'],
        unique: [true, 'email already taken'],
        match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gsi, 'email invalid']
    },
    password: {
        type: String,
        trim: true,
        minLength: 6
    },
    image: {
        type: String
    },
    role: {
        type:String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User