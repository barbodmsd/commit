import express from 'express'
import { login, register } from '../Controllers/authCn.js'
import upload from '../Utils/uploadFile.js'
const authRoute=express.Router()

authRoute.route('/register').post(upload.single('file'),register)
authRoute.route('/').post(login)


export default authRoute