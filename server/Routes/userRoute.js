import express from "express";
import isAdmin from "../Middlewares/isAdmin.js";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../Controllers/userCn.js";
import isLogin from "../Middlewares/isLogin.js";
import upload from "../Utils/uploadFile.js";
const userRoute = express.Router();

userRoute.route("/").get(isAdmin, getAllUsers);
userRoute
  .route("/:id")
  .patch(isLogin,upload.single('file'),updateUser)
  .delete(deleteUser)
  .get(getUserById);

export default userRoute;
