import Slider from "../Models/sliderMd.js";
import catchAsync from "../Utils/catchAsync.js";
import Response from "../Utils/response.js";
import fs from 'fs'
import {__dirname} from './../app.js'

export const createSlider = catchAsync(async (req, res, next) => {
  const image = req?.file?.filename || "";
  const newSlider = await Slider.create({ ...req.body, image });
  return new Response(res, 201, { newSlider });
});

export const getAllSliders = catchAsync(async (req, res, next) => {
  const sliders = await Slider.find();
  return new Response(res, 200, { sliders });
});

export const deleteSlider = catchAsync(async (req, res, next) => {
  const deletedSlider = await Slider.findByIdAndDelete(req.params.id);
  if(deletedSlider?.image){
    fs.unlinkSync(`${__dirname}/Public/${deletedSlider.image}`)
  }
  return new Response(res,200,{message:'slider deleted successfully'})
});
