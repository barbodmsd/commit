import catchAsync from "../Utils/catchAsync.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/userMd.js";

export const register = catchAsync(async (req, res) => {
  const { password, ...others } = req?.body;
  const image=req?.file?.filename
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await User.create({ ...others, password: hashPassword,image });
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

export const login = catchAsync(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({
      status: "error",
      message: "username or password incorrect!",
    });
  }
  const passwordCompare = bcrypt.compareSync(password, user.password);
  if (username != user.username || !passwordCompare) {
    return res.status(400).json({
      status: "error",
      message: "username or password incorrect!",
    });
  }
  const token = jwt.sign(
    { role: user.role, id: user._id },
    process.env.SECRET_KEY
  );
  return res.status(200).json({
    status: "success",
    message: "Login successfully",
    data: {
      user: {
        username: user.username,
        email: user.email,
        image: user.image,
        role: user.role,
      },
      token,
    },
  });
});
