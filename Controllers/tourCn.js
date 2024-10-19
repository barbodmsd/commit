import fs from 'fs'
import { __dirname } from '../server.js'


export const getAllTours = (req, res, next) => {
    try {
        const tours = fs.readFileSync(`${__dirname}/data/tours-simple.json`)
        res.status(200).json(JSON.parse(tours))
    } catch (error) {
        return res.status(500).json({ message: 'error' })
    }
}

export const getTourById = (req, res, next) => {
    try {
        const { id } = req.params
        const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
        const tour = tours.filter(e => e.id == id)
        if (tour.length > 0) {
            return res.status(200).json({ tour })
        } else {
            return res.status(400).json({ message: 'is invalid' })
        }
    } catch (error) {
        return res.status(500).json({ message: 'error' })
    }
}
// export const updateTour=(req,res,next)=>{
//     try {
//         const {id}=req.params
//         const data=req.body
//         const tours=JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
//         const updatedTour=tours.map(e=>{
//             if(e.id==id){
//                 return {...data,...e}
//             }else{
//                 return e
//             }
//         })
//         fs.writeFileSync(`${__dirname}/data/tours-simple.json`,JSON.stringify(updatedTour))
//         return req.status(200).json({updatedTour})
//     } catch (error) {
//         return res.status(500).json({message:'error'})
//     }
// }
export const updateTour = (req, res, next) => {
    try {
        const data = req.body
        const { id } = req.params
        const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
        const newTour = tours.map(e => {
            if (e.id == id) {
                return { ...data, ...e }
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

export const deleteTour = (req, res, next) => {
    try {
        const { id } = req.params
        const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))
        const deletedTour = tours.filter(e => e.id != id)
        fs.writeFileSync(`${__dirname}/data/tours-simple.json`, JSON.stringify(deletedTour))
        return res.status(201).json(deletedTour)
    } catch (error) {
        return res.status(500).json({ message: "something wrong" });
    }
}

