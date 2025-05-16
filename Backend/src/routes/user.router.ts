import express from "express";
import { getMeProfile, updateUserProfile } from "../controllers/user.controller";
import { upload } from "../config/multer.config";
import { AuthenticationMiddleware } from "../middlewares/authentication.middleware";

export const userRouter = express.Router();

// Route for fetching my Profile Details :-

userRouter.get('/me' ,  AuthenticationMiddleware , getMeProfile)

// Route for fetching all the Users :-
userRouter.patch(
  "/update-profile",
  upload.single("userAvatar"),
  updateUserProfile
);
