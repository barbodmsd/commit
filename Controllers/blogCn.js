import Blog from "../Models/blogModel.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import fs from 'fs'
import { __dirname } from './../app.js'

export const createBlog = catchAsync(async (req, res, next) => {
    const image = req?.file?.filename || ''
    const newBlog = await Blog.create({ ...req.body, image })
    return res.status(201).json({
        status: 'success',
        data: { newBlog }
    })
})
export const getAllBlog = catchAsync(async (req, res, next) => {
    const features = new ApiFeatures(Blog, req.query).filters().sort().limitFields().paginate().populate()
    const allBlogs = await features.query
    return res.status(200).json({
        status: 'success',
        data: { allBlogs }
    })
})
export const getBlogById = catchAsync(async (req, res, next) => {
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid id'
        })
    }
    return res.status(200).json({
        status: 'success',
        data: { blog }
    })
})
export const updateBlog = catchAsync(async (req, res, next) => {
    const image = req?.file?.filename || ''
    const imageBody = req?.body?.imageBody || ''
    const oldBlog = await Blog.findById(req?.params.id)
    let updatedBlog;
    if (image) {
        updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { ...req.body, image }, { new: true, runValidators: true })
        if (oldBlog.image) {
            fs.unlinkSync(`${__dirname}/Public/${oldBlog.image}`)
        }
    } else if (imageBody == 'delete') {
        updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { ...req.body, image: '' }, { new: true, runValidators: true })
        if (oldBlog.image) {
            fs.unlinkSync(`${__dirname}/Public/${oldBlog.image}`)
        }
    } else {
        updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    }

    return res.status(200).json({
        status: 'success',
        data: { updatedBlog }
    })

})
export const deleteBlog = catchAsync(async (req, res, next) => {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id)
    if (deletedBlog?.image) {
        fs.unlinkSync(`${__dirname}/Public/${deletedBlog?.image}`)
    }
    return res.status(200).json({
        status: 'success',
        message: 'deleted successfully'
    })
})