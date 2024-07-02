import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description required"],
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    owner: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;