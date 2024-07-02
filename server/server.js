import app from "./app.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({path:'./config.env'})
// mongoose connect
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("MONGO IS CONNECT"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 7001;
app.listen(port, () => console.log("server is run :)"));
