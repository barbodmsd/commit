import express from 'express'
import { getAllUser } from '../Controllers/userCn.js'

const userRoute=express.Router()
userRoute.route('/').get(getAllUser)
export default userRoute
