import Category from "../Models/categoryMd.js";
import catchAsync from "../Utils/catchAsync.js";
import Response from "../Utils/response.js";
import fs from "fs";
import { __dirname } from "../app.js";

export const createCategory = catchAsync(async (req, res, next) => {
  const image = req?.file?.filename || "";
  const newCategory = await Category.create({ ...req.body, image });
  return new Response(res, 201, { data: newCategory }).send();
});
export const getAllCategory = catchAsync(async (req, res, next) => {
  const categories = await Category.find();
  return new Response(res, 200, { data: categories }).send();
});
export const getCategoryById = catchAsync(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  return new Response(res, 200, { data: category }).send();
});
export const updateCategory = catchAsync(async (req, res, next) => {
  const imageDelete = req?.body?.imageDelete;
  const image = req?.file?.filename || "";
  const oldCategory = await Category.findById(req.params.id);
  let updatedCategory;
  if (image) {
    updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { ...req.body, image },
      { new: true, runValidators: true }
    );
    if (oldCategory?.image) {
      fs.unlinkSync(`${__dirname}/Public/${oldCategory.image}`);
    }
  } else if (imageDelete == "delete") {
    updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { ...req.body, image: "" },
      { new: true, runValidators: true }
    );
    if (oldCategory?.image) {
      fs.unlinkSync(`${__dirname}/Public/${oldCategory.image}`);
    }
  } else {
    updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
  }
  return new Response(res, 200, {
    data: updatedCategory,
    message: "update successfully",
  }).send();
});
export const deleteCategory = catchAsync(async (req, res, next) => {
  const deletedCategory = await Category.findByIdAndDelete(req.params.id);
  fs.unlinkSync(`${__dirname}/Public/${deletedCategory.image}`);
  return new Response(res, 200, {
    message: "delete category successfully",
  }).send();
});
