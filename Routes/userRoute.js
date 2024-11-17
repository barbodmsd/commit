import express from 'express'
import { getAllUsers, updateUser,getOneUser } from '../Controllers/userCn.js'
import isAdmin from '../Middlewares/isAdmin.js'
const userRouter=express.Router

userRouter.route('/').get(isAdmin,getAllUsers)
userRouter.route('/:id').patch(updateUser).get(isLogin,getOneUser)


export default userRouter