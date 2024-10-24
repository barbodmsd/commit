import express from 'express'
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from '../Controllers/blogCn.js'
import upload from '../Utils/uploadFile.js'
import isAdmin from '../Middleware/isAdmin.js'
const blogRouter = express.Router()

blogRouter.route('/').get(getAllBlog).post(isAdmin, upload.single('file'), createBlog)
blogRouter.route('/:id').get(getBlogById).patch(isAdmin, upload.single('file'), updateBlog).delete(isAdmin, deleteBlog)

export default blogRouter