import express from "express";
import upload from "../Utils/uploadFile.js";
import isAdmin from "../Middlewares/isAdmin.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
} from "../Controllers/categoryCn.js";
const categoryRouter = express.Router();

categoryRouter
  .route("/")
  .post(isAdmin, upload.single("file"), createCategory)
  .get(getAllCategory);
categoryRouter
  .route("/:id")
  .patch(isAdmin, upload.single("file"), updateCategory)
  .get(getCategoryById)
  .delete(isAdmin, deleteCategory);

export default categoryRouter;
