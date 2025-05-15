import express from "express";
import { updateUserDetails } from "../controllers/user.controller";
import { upload } from "../middlewares/multer.middleware";

export const userRouter = express.Router();

// Router for fetching all the Users :-
userRouter.patch("/updateProfile", upload.single("avatar"), updateUserDetails);
