import express from 'express'
import { createBlog } from '../Controllers/blogCn.js'
import upload from '../Utils/uploadFile.js'
import isAdmin from '../Middlewares/isAdmin.js'
const blogRoute=express.Router()

blogRoute.route('/').post(isAdmin,upload.single('file'),createBlog)

export default blogRoute