import User from "../Models/userModel.js";
import catchAsync from "../Utils/catchAsync.js";
import jwt from 'jsonwebtoken'
import fs from 'fs'
import { __dirname } from "../app.js";

export const getAllUser = catchAsync(async (req, res, next) => {
    const users = await User.find()
    return res.status(200).json({ status: "success", data: { users } })

})

export const updateUser = catchAsync(async (req, res, next) => {
    const image = req?.file?.filename || ''
    const imageDeleted = req.body?.imageDeleted
    const oldUser = await User.findById(req.params.id)
    let updatedUser;
    const token = req.headers.authorization.split(' ')[1];
    const { id, role } = jwt.verify(token, process.env.SECRET)
    if (role == 'admin' || id == req.params.id) {
        if (image) {
            updatedUser = await User.findByIdAndUpdate(req.params.id, { ...req.body, image }, { new: true, runValidators: true })
            if (oldUser.image) {
                fs.unlinkSync(`${__dirname}/Public/${oldUser.image}`)
            }
        } else if (imageDeleted == 'delete') {
            updatedUser = await User.findByIdAndUpdate(req.params.id, { ...req.body, image: '' }, { new: true, runValidators: true })
            if (oldUser.image) {
                fs.unlinkSync(`${__dirname}/Public/${oldUser.image}`)
            }
        } else {
            updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        }
    } else {
        return res.status(401).json({ status: 'fail', message: "you don't have permission" })

    }
    return res.status(200).json({ status: 'success', data: { updatedUser } })
})
export const deleteUser = catchAsync(async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const { id, role } = jwt.verify(token, process.env.SECRET)
    if (role == 'admin' || id == req.params.id) {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({ status: 'success', deletedUser })
    } else {
        return res.status(400).json({ message: 'you no' })
    }
})