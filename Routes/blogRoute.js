import express from 'express'
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from '../Controllers/blogCn.js'
import upload from '../Utils/uploadFile.js'
const blogRouter = express.Router()

blogRouter.route('/').get(getAllBlog).post(upload.single('file'),createBlog)
blogRouter.route('/:id').get(getBlogById).patch(upload.single('file'),updateBlog).delete(deleteBlog)

export default blogRouter