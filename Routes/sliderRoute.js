import express from "express";
import { createSlider, getAllSliders } from "./../Controllers/sliderCn.js";
import upload from "../Utils/uploadFile.js";
const sliderRouter = express.Router();
sliderRouter
  .route("/")
  .post(upload.single("file"), createSlider)
  .get(getAllSliders);

export default sliderRouter;
