import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import catchError from "./Utils/catchError.js";
import HandleError from "./Utils/handleError.js";
import uploadRouter from "./Routes/Upload.js";


const app = express();
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

// middlewares
app.use(express.json());
app.use(express.static("Public"));
app.use(morgan("dev"));
app.use(cors());

// routes
app.use('/api/upload',uploadRouter)

app.use("*", (req, res, next) => {
    return next(new HandleError("Route Not Found", 404));
  });
  app.use(catchError);

export default app