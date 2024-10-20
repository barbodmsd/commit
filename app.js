import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import HandleError from './Utils/handlError.js'
import catchError from './Utils/catchError.js'

const __filename=fileURLToPath(import.meta.url)
export const __dirname=path.dirname(__filename)
const app=express()

app.use(express.json())
app.use(express.static('Public'))
app.use(cors())
app.use(morgan('dev'))


app.use('*',()=>{
    return new HandleError('Route Not Found',404)
})
app.use(catchError)
export default app