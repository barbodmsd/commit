import Blog from "../Models/blogMd.js";
import User from "../Models/userMd.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import jwt from "jsonwebtoken";
import HandleError from "../Utils/handleError.js";
import fs from "fs";
import { __dirname } from "../app.js";
import Category from "../Models/categoryMd.js";

export const createBlog = catchAsync(async (req, res) => {
  const image = req?.file?.filename || "";
  const token = req?.headers?.authorization?.split(" ")[1];
  const { categoryId } = req?.body;
  const { id } = jwt.verify(token, process.env.SECRET_KEY);
  const newBlog = await Blog.create({ ...req.body, image, owner: id });
  await User.findByIdAndUpdate(id, { $push: { blogId: newBlog._id } });
  await Category.findByIdAndUpdate(categoryId, {
    $push: { blogId: newBlog._id },
  });
  return res.status(201).json({
    status: "success",
    data: newBlog,
  });
});

export const getAllBlogs = catchAsync(async (req, res) => {
  const features = new ApiFeatures(Blog, req.query)
    .filters()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const blogs = await features.query;
  return res.status(201).json({
    status: "success",
    data: blogs,
  });
});

export const getBlogById = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id).populate('categoryId')
  if (!blog) {
    return next(new HandleError("Invalid id", 404));
  }
  return res.status(201).json({
    status: "success",
    data: blog,
  });
});

export const deleteBlog = catchAsync(async (req, res) => {
  const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  if (deletedBlog.image) {
    fs.unlinkSync(__dirname + "/Public/" + deletedBlog.image);
  }
  return res.status(200).json({
    status: "success",
    data: deletedBlog,
  });
});

export const updateBlog = catchAsync(async (req, res) => {
  const image = req?.file?.filename || "";
  const { imageBody } = req?.body;
  let updatedBlog;
  const oldBlog = await Blog.findById(req.params.id);
  if (image) {
    updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, image },
      { new: true, runValidators: true }
    );
    if (oldBlog.image) {
      fs.unlinkSync(__dirname + "/Public/" + oldBlog.image);
    }
  } else if (imageBody == "delete") {
    updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, image: "" },
      { new: true, runValidators: true }
    );
    if (oldBlog.image) {
      fs.unlinkSync(__dirname + "/Public/" + oldBlog.image);
    }
  } else {
    updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
  }
  return res.status(200).json({
    status: "success",
    data: updatedBlog,
  });
});
