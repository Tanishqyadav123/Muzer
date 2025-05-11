import express from "express";
import {
  signupUser,
  sendOtpOnEmail,
  verifyOTPOnEmail,
  signinUser,
} from "../controllers/auth.controller";

export const authRouter = express.Router();
authRouter.post("/sendOtp", sendOtpOnEmail);
authRouter.post("/verifyOtp", verifyOTPOnEmail);
authRouter.post("/signup", signupUser);
authRouter.post("/signin", signinUser);
