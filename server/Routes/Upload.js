import express from "express";
import { deleteFile, uploadFile } from "../Controllers/uploadCn.js";
import upload from "../Utils/uploadFile.js";
const uploadRouter = express.Router();
uploadRouter
  .route("/")
  .post( upload.single("file"), uploadFile)
  .delete(deleteFile);
export default uploadRouter;