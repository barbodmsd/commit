import Category from "../Models/categoryMd.js";
import Product from "../Models/productMd.js";
import catchAsync from "../Utils/catchAsync.js";
import Response from "../Utils/response.js";

export const search = catchAsync(async (req, res, next) => {
  const { search } = req.body;
  const categories = await Category.find({
    name: { $regex: search, $options: "i" },
  });
  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  });
  return new Response(res, 200, { data: { categories, products } }).send();
});
