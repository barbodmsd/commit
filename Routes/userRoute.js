import express from 'express'
import { deleteUser, getAllUser, updateUser } from '../Controllers/userCn.js'
import isAdmin from '../Middleware/isAdmin.js'
const userRouter = express.Router()

userRouter.route('/').get(isAdmin,getAllUser)
userRouter.route('/:id').patch(updateUser).delete(deleteUser)

export default userRouter
