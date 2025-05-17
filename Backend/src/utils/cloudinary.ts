// Functions for uploading the file on cloudinary and return the Url and public_id of assest :-

import { cloudinary } from "../config/cloudinary.config";
import fs from "fs";
import { ErrorHandler } from "../middlewares/error.middleware";
import { NextFunction } from "express";

async function uploadToCloudinary(
  filePath: string,
  next: NextFunction
): Promise<{ assestUrl: string; publicId: string } | undefined | void> {
  try {
    const cloudinaryResponse = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    if (cloudinaryResponse?.public_id) {
      // UnLink the file from the uploads folder :-
      fs.unlink(filePath, (error) => {
        if (error) {
          throw new Error(error.message);
        }
      });

      return {
        assestUrl: cloudinaryResponse.secure_url,
        publicId: cloudinaryResponse.public_id,
      };
    }
  } catch (error: any) {
    console.log("Error from Cloudinary ", error);
    return next(new ErrorHandler(error.message, 500));
  }
}

async function deleteFromCloudinary(
  publicId: string,
  resourceType: "image" | "video" | "raw",
  next: NextFunction
) : Promise<boolean | void>{
  try {
    const deletedAssesst = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });

    if (deletedAssesst.result == "ok") {
      return true;
    }
    return false;
  } catch (error: any) {
    return next(new ErrorHandler(error?.message, 500));
  }
}

export { uploadToCloudinary, deleteFromCloudinary };
