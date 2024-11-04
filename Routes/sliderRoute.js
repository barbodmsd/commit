import express from "express";
import { createSlider, deleteSlider, getAllSliders } from "./../Controllers/sliderCn.js";
import upload from "../Utils/uploadFile.js";
const sliderRouter = express.Router();
sliderRouter
  .route("/")
  .post(upload.single("file"), createSlider)
  .get(getAllSliders);

  sliderRouter.route('/:id').delete(deleteSlider)
export default sliderRouter;
