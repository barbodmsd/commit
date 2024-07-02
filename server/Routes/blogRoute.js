import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../Controllers/blogCn.js";
import upload from "../Utils/uploadFile.js";
import isAdmin from "../Middlewares/isAdmin.js";
const blogRoute = express.Router();

blogRoute
  .route("/")
  .post(isAdmin, upload.single("file"), createBlog)
  .get(getAllBlogs);

blogRoute
  .route("/:id")
  .get(getBlogById)
  .delete(isAdmin, deleteBlog)
  .patch(isAdmin, upload.single("file"), updateBlog);

export default blogRoute;
