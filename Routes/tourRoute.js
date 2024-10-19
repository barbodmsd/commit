import express from 'express'
import { createTour, deleteTour, getAllTours, getTourById, updateTour } from '../Controllers/tourCn.js'
const tourRouter=express.Router()

tourRouter.route('/').get(getAllTours).post(createTour)
tourRouter.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour)

export default tourRouter