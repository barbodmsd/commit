import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true
    },
    blogId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
}, { timestamps: true })
const Category = mongoose.model('Category', categorySchema)
export default Category