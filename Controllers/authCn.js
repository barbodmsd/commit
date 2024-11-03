import bcrypt from "bcryptjs";
import User from "../Models/userMd.js";
import catchAsync from "../Utils/catchAsync.js";
import Response from "../Utils/response.js";
import jwt from "jsonwebtoken";
import { sendSmd, verifyCode } from "../Utils/smsHandler.js";
import HandleError from "../Utils/handleError.js";

export const register = catchAsync(async (req, res, next) => {
  const { password, role, ...others } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await User.create({ ...others, password: hashPassword });
  return new Response(res, 201, {
    newUser,
    message: "register successfully",
  }).send();
});
export const login = catchAsync(async (req, res, next) => {
  const { password, username } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return next(new HandleError("user not found", 404));
  }
  const comparePass = bcrypt.compareSync(password, user.password);
  if (!comparePass || username != user.username) {
    return next(new HandleError("user not found", 404));
  }
  const token = jwt.sign(
    { id: user._id, role: user.role, loginComplete: false, phone: user.phone },
    process.env.JWT_SECRET
  );
  const send = await sendSmd(user.phone);
  if (!send.success) {
    return new HandleError(send.message, 500);
  }
  return new Response(res, 200, {
    token,
    message: "login successfully",
  }).send();
});
export const verifySmsCode = catchAsync(async (req, res, next) => {
  const { code } = req.body;
  const oldToken = req?.headers?.authorization?.split(" ")[1];
  const { phone, id } = jwt.verify(oldToken, process.env.JWT_SECRET);
  const smsData = await verifyCode(phone, code);
  if (!smsData.success) {
    return next(new HandleError(smsData.message, 400));
  }
  const user = await User.findById(id);
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
      loginComplete: true,
    },
    process.env.JWT_SECRET
  );
  return new Response(res, 200, { user, token }).send();
});
export const sendAgain = catchAsync(async (req, res, next) => {
  const { phone, id } = jwt.verify(oldToken, process.env.JWT_SECRET);
  const send = await sendSmd(phone);
  if (!send.success) {
    return new HandleError(send.message, 500);
  }
  return new Response(res, 200, { message: "sms sent" }).send();
});
export const forgetPassword = catchAsync(async (req, res, next) => {});
