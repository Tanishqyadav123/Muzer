// Controller for fetching all the Users :-

import { NextFunction, Request, Response } from "express";
import { prisma } from "../DB";
import { ErrorHandler } from "../middlewares/error.middleware";
import { responseHandler } from "../handlers/response.handler";

async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  const isUserExist = true;

  if (!isUserExist) {
    return next(new ErrorHandler("User Can not fetched", 400));
  }

  return responseHandler(res, 200, "User Found SuccessFully!!!!", {
    id: "123",
  });
}

export { getAllUsers };
