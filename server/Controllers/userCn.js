import fs from "fs";
import jwt from "jsonwebtoken";
import User from "../Models/userMd.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import { __dirname } from "../app.js";

export const getAllUsers = catchAsync(async (req, res) => {
  const features = new ApiFeatures(User, req.query)
    .filters()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const users = await features.query;
  return res.status(201).json({
    status: "success",
    data: users,
  });
});

export const getUserById = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new HandleError("Invalid id", 404));
  }
  return res.status(201).json({
    status: "success",
    data: user,
  });
});

export const deleteUser = catchAsync(async (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  const { id, role } = jwt.verify(token, process.env.SECRET_KEY);

  if (role == "admin" || id == req.params.id) {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser.image) {
      fs.unlinkSync(__dirname + "/Public/" + deletedUser.image);
    }
    return res.status(200).json({
      status: "success",
      data: deletedUser,
    });
  } else {
    return next(new HandleError("You don't hve permission"));
  }
});

export const updateUser = catchAsync(async (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  const { id, role } = jwt.verify(token, process.env.SECRET_KEY);
  const image = req?.file?.filename || "";
  const { imageBody } = req?.body;
  let updatedUser;
  const oldUser = await User.findById(id);

  if (role == "admin" || id == req.params.id) {
    if (image) {
      updatedUser = await User.findByIdAndUpdate(
        id,
        { ...req.body, image },
        { new: true, runValidators: true }
      );
      if (oldUser.image) {
        fs.unlinkSync(__dirname + "/Public/" + oldUser.image);
      }
    } else if (imageBody == "delete") {
      updatedUser = await User.findByIdAndUpdate(
        id,
        { ...req.body, image: "" },
        { new: true, runValidators: true }
      );
      if (oldUser.image) {
        fs.unlinkSync(__dirname + "/Public/" + oldUser.image);
      }
    } else {
      updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
    }
    return res.status(200).json({
      status: "success",
      data: updatedUser,
    });
  } else {
    return next(new HandleError("You don't hve permission"));
  }
});
