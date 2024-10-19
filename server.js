import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
import tourRouter from './Routes/tourRoute.js';

const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)
const app=express()


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/tours',tourRouter)

app.use('*',(req,res,next)=>{
    return res.status(404).json({message:'not found'})
})

app.listen(5000,(req,res,next)=>{
    console.log('server is run')
})










