import catchAsync from "../Utils/catchAsync";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = catchAsync(async (req, res) => {
  const { password, ...others } = req?.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser
});
