import { Router } from "express";
import { userRouter } from "./user.router";
import {authRouter} from "./auth.router";
import { streamRouter } from "./stream.router";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use('/stream' , streamRouter);

export default router;
