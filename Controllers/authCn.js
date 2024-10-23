import User from "../Models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import catchAsync from "../Utils/catchAsync.js"
import HandleError from "../Utils/handlError.js"

export const register = catchAsync(async (req, res, next) => {
    const { password, ...others } = req.body
    const hashPassword = bcrypt.hashSync(password, 12)
    const newUser = await User.create({ ...others, password: hashPassword })
    return res.status(201).json({
        status: 'success',
        message: 'register successfully',
        data: { newUser }
    })
})
export const login = catchAsync(async (req, res, next) => {
    const { password, email } = req?.body
    const user = await User.findOne({ email })
    if (!user) {
        return next(new HandleError('user not found', 401))
    }
    const comparePassword = bcrypt.compareSync(password, user.password)
    if (!(email == user.email) && !comparePassword) {
        return next(new HandleError('user not found', 401))
    }
    const token = jwt.sign({ id: user._id, role: user.role },process.env.SECRET)
    return res.status(200).json({
        user, token
    })
})