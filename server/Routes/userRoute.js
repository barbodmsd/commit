import express from "express";
import isAdmin from "../Middlewares/isAdmin.js";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../Controllers/userCn.js";
const userRoute = express.Router();

userRoute.route("/").get(isAdmin, getAllUsers);
userRoute
  .route("/:id")
  .patch( updateUser)
  .delete(deleteUser)
  .get(getUserById);

export default userRoute;
