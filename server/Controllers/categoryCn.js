import Category from "../Models/categoryMd.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";

export const createCategory = catchAsync(async (req, res) => {
  const newCategory = await Category.create(req.body);
  return res.status(201).json({
    status: "success",
    data: newCategory,
  });
});

export const getAllCategory = catchAsync(async (req, res) => {
  const features = new ApiFeatures(Category, req.query)
    .filters()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const category = await features.query;
  return res.status(201).json({
    status: "success",
    data: category,
  });
});

export const blogsCategory = catchAsync(async (req, res) => {
  const blogs = await Category.find().populate("blogId");
  return res.status(200).json({
    status: "success",
    data: blogs,
  });
});

export const deleteCategory = catchAsync(async (req, res) => {
  const deletedCategory = await Category.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    status: "success",
    data: deletedCategory,
  });
});
