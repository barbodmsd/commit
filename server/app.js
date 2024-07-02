
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import userRoute from "./Routes/userRoute.js";
import blogRoute from "./Routes/blogRoute.js";
import categoryRoute from "./Routes/categoryRoute.js";
import commentRoute from "./Routes/commentRoute.js";
import authRoute from "./Routes/authRoute.js";
import HandleError from "./Utils/handleError.js";
import catchError from "./Utils/catchError.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(express.static("Public"));
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/users", userRoute);
app.use("/blogs", blogRoute);
app.use("/categories", categoryRoute);
app.use("/comments", commentRoute);
app.use("/auth", authRoute);
app.use("*", (req, res, next) => {
  return next(new HandleError("Route Not Found", 404));
});
app.use(catchError);

export default app
