import catchAsync from "../Utils/catchAsync";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/userMd";

export const register = catchAsync(async (req, res) => {
  const { password, ...others } = req?.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await User.create({ ...others, password:hashPassword });
  const token = jwt.sign(
    { role: newUser.role, id: newUser._id },
    process.env.SECRET_KEY
  );
  return res.status(201).json({
    status: "success",
    message: "Register successfully",
    data: {
      user: {
        username: newUser.username,
        email: newUser.email,
        image: newUser.image,
        role: newUser.role,
      },
      token,
    },
  });
});
