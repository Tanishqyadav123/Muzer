import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "./error.middleware";
import * as jwt from "jsonwebtoken"
import type { JwtPayload } from "jsonwebtoken"
import { prisma } from "../DB";
import { DecodedUserType } from "../entity/decodedUser";

export async function AuthenticationMiddleware (req : Request , res : Response , next : NextFunction) :Promise<any>  {
     
   try {
     
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
         return next (new ErrorHandler("UnAuthorised Access denied" , 401))
    }

    // Decoded the jwt user :-
    const decodedUser : any   = jwt.verify(token , process.env.JWT_SECRET!)

    if (!decodedUser) {
         return next (new ErrorHandler("Invalid Token or may be expired" , 401))
    }

    if (decodedUser && typeof decodedUser == 'object' && "userId" in decodedUser && "userRole" in decodedUser) {
         req.user = {
             userId : decodedUser.userId,
             userRole : decodedUser.userRole
         }
    }

    if (req.user?.userId && req.user?.userRole) {
          const userDetails = await prisma.user.findUnique({
             where : {
                 id : req.user.userId,
                 role : req.user.userRole  
             }
          })

          if (!userDetails) {
             next (new ErrorHandler("User not found" , 401))
          }
    }

    console.log(req.user , "My Request User Details")

    next();
   }
   catch (error : any) {
      next (new ErrorHandler(error.message , 500)) 
   }


}