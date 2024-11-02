import express from "express";
import {
  forgetPassword,
  login,
  register,
  verifySmsCode,
} from "../Controllers/authCn.js";
import isAdmin from "../Middlewares/isAdmin.js";
import isLogin from "../Middlewares/isLogin.js";

const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
// authRouter.route("/send-sms").post(sendSms);
authRouter.route("/verify-code").post(isLogin,verifySmsCode);
authRouter.route("/forget-password").post(forgetPassword);

export default authRouter;
