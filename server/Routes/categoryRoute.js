import express from "express";
import isAdmin from "../Middlewares/isAdmin.js";
import {
  blogsCategory,
  createCategory,
  deleteCategory,
  getAllCategory,
} from "../Controllers/categoryCn.js";
const categoryRoute = express.Router();

categoryRoute.route("/").post(isAdmin, createCategory).get(getAllCategory);
categoryRoute.route("/:id").get(blogsCategory).delete(deleteCategory);

export default categoryRoute;
