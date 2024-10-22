import express from 'express'
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from '../Controllers/blogCn.js'
const blogRouter = express.Router()

blogRouter.route('/').get(getAllBlog).post(createBlog)
blogRouter.route('/:id').get(getBlogById).patch(updateBlog).delete(deleteBlog)

export default blogRouter