import catchAsync from "../Utils/catchAsync.js";
import jwt from "jsonwebtoken";
import Comment from "../Models/commentMd.js";

export const createComment = catchAsync(async (req, res, next) => {
  const { message} = req?.body;
  const token = req?.headers?.authorization?.split(" ")[1];
  const { id } = jwt.verify(token, process.env.SECRET_KEY);

  const newComment = await Comment.create({
    message,
    userId: id,
    blogId:req.params.id
  });
  return res.status(201).json({
    status: "success",
    data: {
      comment: newComment,
    },
  });
});

export const getBlogComments = catchAsync(async (req, res) => {
  const blogId = req.params.id;
  const comments = await Comment.find({ blogId }).populate("blogId");
  return res.status(200).json({
    status: "success",
    data: comments,
  });
});
export const deleteComment = catchAsync(async (req, res, next) => {
  const deletedComment = await Comment.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    status: "success",
    data: deletedComment,
  });
});
