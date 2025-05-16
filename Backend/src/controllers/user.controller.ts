// Controller for fetching all the Users :-
import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../middlewares/error.middleware";
import { responseHandler } from "../handlers/response.handler";
import { prisma } from "../DB";
import { getUserByIdAndRole, updateUserDetails } from "../Repo/user.repo";
import { updateUserInterface } from "../interfaces/user.interface";
import { uploadToCloudinary } from "../utils/cloudinary";

async function getMeProfile(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const { userId, userRole } = req.user!;

    const userDetails = await getUserByIdAndRole({ userId, userRole });

    return responseHandler(res, 200, "Your Profile Details", userDetails);
  } catch (error: any) {
    next(new ErrorHandler(error.message, 500));
  }
}
async function updateUserProfile(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const file = req.file;

    const userId = req.user?.userId!;
    const updateUserData: updateUserInterface = req.body;

    if (file && file?.path) {
      // upload the file on Cloudinary :-
      const uploadedAssesst = await uploadToCloudinary(file.path, next);
      if (!uploadedAssesst) {
        return next(new ErrorHandler("Assesst could not get uploaded", 500));
      }
      const { assestUrl, publicId } = uploadedAssesst;
      updateUserData.avatarUrl = assestUrl;
      updateUserData.publicId = publicId;



      // Need to unlink the file from our server after uploading on Cloudinary :-
      

    }

    // We need to update the user Data as per userId :-
    const updatedUserDetails = await updateUserDetails(userId, updateUserData);

    if (!updatedUserDetails) {
      next(new ErrorHandler("You Details could not get updated", 417));
    }

    return responseHandler(res, 200, "Profile Updated SuccessFully");
  } catch (error: any) {
    next(new ErrorHandler(error.message, 500));
  }
}

export { getMeProfile, updateUserProfile };
