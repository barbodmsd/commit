import User from "../Models/userMd.js";
import catchAsync from "../Utils/catchAsync.js";
import Response from "../Utils/response.js";

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  return new Response(res, 200, { data: users }).send();
});
export const getOneUser=catchAsync(async(req,res,next)=>{
    const user=await User.find(req.params.id)
  return new Response(res, 200, { data: user }).send();

})
export const updateUser = catchAsync(async (req, res, next) => {
  const { id: userId, role: userRole } =
    req?.headers?.authorization.split(" ")[1];
  let updatedUser;
  if (userId == req.params.id || userRole == "admin") {
    if (userRole == "admin") {
      updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    } else {
      const { role = "", ...others } = req.body;
      updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    }
  } else {
    return next(new HandleError("you dont have permission", 401));
  }
  return new Response(res, 200, {
    data: updatedUser,
    message: "update successfully",
  }).send();
});
