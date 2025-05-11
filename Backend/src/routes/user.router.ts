import express from "express";
import { getAllUsers } from "../controllers/user.controller";

export const userRouter = express.Router();

// Router for fetching all the Users :-
userRouter.get("/getUsers", getAllUsers);
