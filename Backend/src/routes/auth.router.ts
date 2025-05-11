import express from "express";
import {
  signupUser,
  sendOtpOnEmail,
  verifyOTPOnEmail,
  signinUser,
  forgotPasswordOtp,
  setNewPasword,
} from "../controllers/auth.controller";

export const authRouter = express.Router();
authRouter.post("/send-otp", sendOtpOnEmail);
authRouter.post("/verify-otp", verifyOTPOnEmail);
authRouter.post("/signup", signupUser);
authRouter.post("/signin", signinUser);
authRouter.post("/forgot-password-otp", forgotPasswordOtp);
authRouter.post("/set-new-password", setNewPasword);
