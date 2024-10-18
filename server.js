import express from 'express'
import userRoute from './Routes/userRoute.js'
import path from 'path'
import { fileURLToPath } from 'url'
import tourRoute from './Routes/tourRoute.js'
import cors from 'cors'


const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)
const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRoute)
app.use('/tours', tourRoute)
app.use('*', (req, res, next) => {
    return res.status(404).json({ message: 'not found' })
})
app.listen(5000, (req, res, next) => { console.log('server is run') })