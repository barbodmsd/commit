import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required'],
        trim:true
    },
    image:{
        type:String,
        default:''
    },
    description:{
        type:String,
        required:[true,'description is required'],
        trim:true,
    },
    subCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }

},{timestamps:true})

const Category=mongoose.model('Category',categorySchema)
export default Category