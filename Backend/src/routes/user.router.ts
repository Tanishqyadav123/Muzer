import express from "express";
import { updateUserProfile } from "../controllers/user.controller";
import { upload } from "../config/multer.config";

export const userRouter = express.Router();

// Router for fetching all the Users :-
userRouter.patch(
  "/update-profile",
  upload.single("userAvatar"),
  updateUserProfile
);
