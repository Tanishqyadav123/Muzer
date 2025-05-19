import express from "express";
import {
  signupUser,
  sendOtpOnEmail,
  verifyOTPOnEmail,
  signinUser,
  forgotPasswordOtp,
  setNewPasword,
  OAuthCallback,
} from "../controllers/auth.controller";
import passport from "passport";

export const authRouter = express.Router();
authRouter.post("/send-otp", sendOtpOnEmail);
authRouter.post("/verify-otp", verifyOTPOnEmail);
authRouter.post("/signup", signupUser);
authRouter.post("/signin", signinUser);
authRouter.post("/forgot-password-otp", forgotPasswordOtp);
authRouter.post("/set-new-password", setNewPasword);
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "consent",
  })
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    // failureRedirect: "/signin",
    // successRedirect: "/profile",
  }),
  OAuthCallback
);
