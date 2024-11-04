import express from "express";
import {
  forgetPassword,
  login,
  register,
  sendAgain,
  updatePassword,
  verifyCodePassword,
  verifySmsCode,
} from "../Controllers/authCn.js";

const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/verify-code").post(verifySmsCode);
authRouter.route("/send-again").post(sendAgain);
authRouter.route("/forget-password").post(forgetPassword);  
authRouter.route("/verify-code-password").post(verifyCodePassword);  
authRouter.route("/update-password").post(updatePassword);  

 
export default authRouter;
