import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'content is required'],
        trim: true
    },
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })
const Comment = mongoose.model('Category', commentSchema)
export default Comment