import mongoose from "mongoose";
import app from './app.js'
import { configDotenv } from "dotenv";
configDotenv({path:'./config.env'})
mongoose.connect(process.env.DATABASE_URL).then(() => console.log('MONGO CONNECT')).catch(err => console.log(err))

const port = process.env.PORT || 2805
app.listen(port, () => console.log(`Server is running on port ${port}`))