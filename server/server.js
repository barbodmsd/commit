import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import app from "./app.js";
configDotenv({ path: "./config.env" });

mongoose
  .connect(process.env.DATA_BASE)
  .then(() => console.log("mongodb connect"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 7001;

app.listen(port, () =>
  console.log(`server connect on port ${port}`)
);
