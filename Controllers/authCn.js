import bcrypt from 'bcryptjs'
import User from '../Models/userMd.js'
import catchAsync from '../Utils/catchAsync.js'
import Response from '../Utils/response.js'

export const register = catchAsync(async (req, res, next) => {
    const { password, role, ...others } = req.body
    const hashPassword = bcrypt.hashSync(password, 10)
    const newUser = await User.create({ ...others, password: hashPassword })
    // return res.status(201).json({
    //     status: 'success',
    //     message: 'register successfully'
    // })
    return new Response(res, 201, { mesage: 'successfully' }).send()

})
export const login = catchAsync(async (req, res, next) => { })
export const sendSms = catchAsync(async (req, res, next) => { })
export const verifySmsCode = catchAsync(async (req, res, next) => { })
export const forgetPassword = catchAsync(async (req, res, next) => { })

