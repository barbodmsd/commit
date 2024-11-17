import express from 'express'
import { getAllUsers, getOneUser, updateUser } from '../Controllers/userCn.js'
import isAdmin from '../Middlewares/isAdmin.js'
import isLogin from '../Middlewares/isLogin.js';
const userRouter=express.Router()

userRouter.route('/').get(isAdmin,getAllUsers);
userRouter.route('/:id').patch(updateUser).get(isLogin,getOneUser)


export default userRouter