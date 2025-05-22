import { NextFunction, Request, response, Response } from "express";
import { createStreamSchema } from "../schemaValidation/stream.schema";
import { formatError } from "../utils/formaterror";
import { ErrorHandler } from "../middlewares/error.middleware";
import { createNewStream, getAllStreams, getSingleStreamById } from "../Repo/stream.repo";
import { io } from "../config/socket";
import { responseHandler } from "../handlers/response.handler";
import { getUserByIdAndRole } from "../Repo/user.repo";


async function createStream(req: Request, res: Response, next: NextFunction) : Promise<any> {
  try {
    const parseResponse = createStreamSchema.safeParse(req.body);

    const { userId , userRole } = req.user!;

    // Get the user Details :-
    const userDetails = await getUserByIdAndRole({userId , userRole})

    if (!parseResponse.success) {
      const errors = formatError(parseResponse.error.errors);

      return next(new ErrorHandler(errors.join(" , "), 400));
    }

    const { streamName , socketId } = parseResponse.data;

    const newStream = await createNewStream({ streamName, userId });

   

    // Attach the User ID to this stream RoomId :-

    const socket = io.sockets.sockets.get(socketId);

    if (socket) {

       socket.join(newStream.id);
 
        socket.emit("join-stream" , `User ${userDetails?.firstName} join ${newStream.streamName}`)

    }

    return  responseHandler(res , 201 , "new Stream Created successfully" , {newStream})

  } catch (error : any) {
     return next(new ErrorHandler(error.message, 500));
  }
}

async function allStreams (req : Request , res : Response , next : NextFunction) : Promise<any> {

    try {
     console.log("Inside allStreams Backend")
      const Streams = await getAllStreams();
      console.log("Streams " , Streams)
      
      return responseHandler(res , 200 , "All Streams Data" , Streams)
      
    }
    catch (error : any) {
       throw new ErrorHandler(error.message , 500)
    }
  
}


async function getStreamById(req : Request , res : Response , next : NextFunction) : Promise<any> {
   try {
    
        const streamId : string = req.params.streamId;

       

        const streamDetails = await getSingleStreamById(streamId)

        return responseHandler(res , 200 , "Request Stream" , streamDetails)

   }
  catch (error : any) {
       throw new ErrorHandler(error.message , 500)
    }
 }

export { createStream , allStreams , getStreamById };
