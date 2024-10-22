import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import blogRouter from './Routes/blogRoute.js'
import catchError from './Utils/catchError.js'
import HandleError from './Utils/handlError.js'

const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)
const app = express()

// middlewares
app.use(express.json())
app.use(express.static('Public'))
app.use(cors())
app.use(morgan('dev'))

// routes
app.use('/v1/blogs', blogRouter)


app.use('*', () => {
    return new HandleError('Route Not Found', 404)
})
app.use(catchError)




export default app