// Controller for fetching all the Users :-

import { NextFunction, Request, Response } from "express";
import { prisma } from "../DB";
import { ErrorHandler } from "../middlewares/error.middleware";
import { responseHandler } from "../handlers/response.handler";

async function updateUserDetails(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

export { updateUserDetails };
