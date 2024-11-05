import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import catchError from "./Utils/catchError.js";
import HandleError from "./Utils/handleError.js";
import {
  userRouter,
  authRouter,
  cartRouter,
  categoryRouter,
  productRouter,
  discountCodeRouter,
  orderHistoryRouter,
  searchRouter,
  sliderRouter,
  variantRouter,
  commentRouter,
} from "./index.js";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const app = express();

// middlewares
app.use(express.json());
app.use(express.static("Public"));
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);
app.use("/categories", categoryRouter);
app.use("/comments", commentRouter);
app.use("/discount-code", discountCodeRouter);
app.use("/order-history", orderHistoryRouter);
app.use("/products", productRouter);
app.use("/search", searchRouter);
app.use("/sliders", sliderRouter);
app.use("/variant", variantRouter);

// handle error
app.use("*", (req, res, next) => {
  return next(new HandleError("route not found", 404));
});
app.use(catchError);

export default app;
