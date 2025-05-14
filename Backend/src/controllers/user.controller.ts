// Controller for fetching all the Users :-

import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../middlewares/error.middleware";
import { responseHandler } from "../handlers/response.handler";

async function updateUserProfile(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const files = req.file;

    console.log("Uploaded User File Image ", files);

    return responseHandler(res, 200, "Profile Updated SuccessFully");
  } catch (error: any) {
    next(new ErrorHandler(error.message, 500));
  }
}

export { updateUserProfile };
