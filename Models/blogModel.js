import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        trim: true,
    },
    image: { type: String, default: '' },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Blog = mongoose.model('Blog', blogSchema)
export default Blog
