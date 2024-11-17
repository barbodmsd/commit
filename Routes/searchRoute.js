import express from 'express'
import { search } from '../Controllers/searchCn.js'
const searchRouter=express.Router()

searchRouter.route('/').get(search)

export default searchRouter