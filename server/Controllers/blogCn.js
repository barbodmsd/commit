import Blog from "../Models/blogMd.js";
import User from "../Models/userMd.js";
import catchAsync from "../Utils/catchAsync.js";
import jwt from "jsonwebtoken";
export const createBlog = catchAsync(async (req, res) => {
  const image = req?.file?.filename || "";
  const token = req?.headers?.authorization?.split(" ")[1];
  const { id } = jwt.verify(token, process.env.SECRET_KEY);
  const newBlog = await Blog.create({ ...req.body, image, owner: id });
  await User.findByIdAndUpdate(id, { $push: { blogId: newBlog._id } });
  return res.status(201).json({
    status: "success",
    data: newBlog,
  });
});
