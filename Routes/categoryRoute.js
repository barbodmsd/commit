import express from 'express'
import { createCategory, deleteCategory, getAllCategory, getCategoryBlogs } from '../Controllers/categoryCn.js'
const categoryRouter = express.Router()

categoryRouter.route('/').get(getAllCategory).post(createCategory)
categoryRouter.route('/:id').get(getCategoryBlogs).delete(deleteCategory)

export default categoryRouter