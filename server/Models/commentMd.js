
import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    message:{
        type:String,
        required:[true,'message required'],
        trim:true
    },
    blogId:{
        type:mongoose.Schema.ObjectId,
        ref:'Blog'
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'Blog'
    }
},{timestamps:true})

const Comment=mongoose.model('Comment',commentSchema)
export default Comment
