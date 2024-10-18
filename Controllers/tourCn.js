import fs from 'fs'
import { __dirname } from '../server.js'

export const getAllTour = (req, res, next) => {
    const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
    return res.status(200).json(tours)
}

export const getTourById = (req, res, next) => {
    try {
        const { id } = req.params
        const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
        const tour = tours.filter(e => e.id == id)
        if (tour.length == 0) {
            return res.status(400).json({ message: 'id invalid' })
        }
        return res.status(200).json({ tour })
    } catch (error) {
        return res.status(500).json({ message: 'something wrong' })
    }
}

export const createTour = (req, res, next) => {
    try {
        const data = req.body
        const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
        const newId = tours[tours.length - 1].id + 1
        tours.push({ ...data, id: newId })
        fs.writeFileSync(`${__dirname}/data/tours-simple.json`, JSON.stringify(tours))
        return res.status(201).json({ ...data, id: newId })
    } catch (error) {
        return res.status(500).json({ message: "something wrong" });
    }
}
export const updateTour = (req, res, next) => {
    try {
        const data = req.body
        const { id } = req.params
        const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
        const newTour = tours.map(e => {
            if (e.id == id) {
                return { ...e, ...data }
            } else {
                return e
            }
        })
        fs.writeFileSync(`${__dirname}/data/tours-simple.json`, JSON.stringify(newTour))
        return res.status(201).json(newTour)
    } catch (error) {
        return res.status(500).json({ message: "something wrong" });
    }
}
export const deleteTour = (req, res, next) => {
    try {
        const { id } = req.params
        const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
        const newTour = tours.filter(e=>e.id!=id)
        fs.writeFileSync(`${__dirname}/data/tours-simple.json`, JSON.stringify(newTour))
        return res.status(201).json(newTour)
    } catch (error) {
        return res.status(500).json({ message: "something wrong" });
    }
}