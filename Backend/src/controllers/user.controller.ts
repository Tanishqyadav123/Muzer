// Controller for fetching all the Users :-
import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../middlewares/error.middleware";
import { responseHandler } from "../handlers/response.handler";
import { prisma } from "../DB";

async function getMeProfile (  req: Request,
  res: Response,
  next: NextFunction) : Promise<any>{
  
    try { 
 
      
       const {userId , userRole} = req.user!;

      const userDetails = await prisma.user.findUnique({
         where : {
           id : userId,
           role : userRole
         }
      })

      return responseHandler(res , 200 , "Your Profile Details" , userDetails) ;

    }
    catch (error : any) {
       next (new ErrorHandler(error.message , 500))
    }
 }
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

export { getMeProfile , updateUserProfile };
