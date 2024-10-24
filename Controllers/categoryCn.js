import Category from "../Models/categoryModel.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";

export const createCategory = catchAsync(async (req, res, next) => {
    const newCategory = await Category.create(req.body)
    return res.status(201).json({
        status: 'success',
        data: { newCategory }
    })
})
export const getAllCategory = catchAsync(async (req, res, next) => {
    const features = new ApiFeatures(Category, req.query).filters().sort().limitFields().paginate().populate()
    const allCategories = await features.query
    return res.status(200).json({
        status: 'success',
        data: { allCategories }
    })
})
export const getCategoryBlogs = catchAsync(async (req, res, next) => {
    const categoryBlogs = await Category.findById(req.params.id).populate('blogId')
    return res.status(200).json({
        status: 'success',
        data: { categoryBlogs }
    })
})

export const deleteCategory = catchAsync(async (req, res, next) => {
    await Category.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        status: 'success',
        message: 'deleted successfully'
    })
})