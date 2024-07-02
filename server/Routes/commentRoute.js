import express from "express";
import {
  getBlogComments,
  deleteComment,
  createComment,
} from "../Controllers/commentCn.js";
import isAdmin from "../Middlewares/isAdmin.js";
import isLogin from "../Middlewares/isLogin.js";
const commentRoute = express.Router();

commentRoute
  .route("/:id")
  .get(getBlogComments)
  .delete(isAdmin,deleteComment)
  .post(isLogin,createComment);

export default commentRoute;
