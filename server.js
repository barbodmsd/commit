import app from "./app.js";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv({ path: './config.env' })

// connect to database
mongoose.connect(process.env.DATABASE_URL).then(() => console.log('MONGOOSE IS CONNECT')).catch(err => console.log(err))
const port = process.env.PORT || 7001

app.listen(port,(req,res,next)=>{
    console.log('server is run')
})