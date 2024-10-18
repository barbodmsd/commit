import express from "express";
import { createTour, deleteTour, getAllTour, getTourById, updateTour } from "../Controllers/tourCn.js";
const tourRoute = express.Router()

tourRoute.route('/').get(getAllTour).post(createTour)
tourRoute.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour)
export default tourRoute