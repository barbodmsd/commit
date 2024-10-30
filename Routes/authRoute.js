import express from 'express'
import { forgetPassword, login, register, sendSms, verifySmsCode } from '../Controllers/authCn.js'

const authRouter = express.Router()

authRouter.route('/register').post(register)
authRouter.route('/login').post(login)
authRouter.route('/send-sms').post(sendSms)
authRouter.route('/verify-code').post(verifySmsCode)
authRouter.route('/forget-password').post(forgetPassword)

export default authRouter