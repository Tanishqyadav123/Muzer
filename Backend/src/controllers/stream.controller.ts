import { NextFunction, Request, response, Response } from "express";
import { addSongToStreamSchema, createStreamSchema, voteSongSchema } from "../schemaValidation/stream.schema";
import { formatError } from "../utils/formaterror";
import { ErrorHandler } from "../middlewares/error.middleware";
import { addSongToStream, createNewStream, fetchSongUpdatedWithVotes, getAllSongsWithVotesOfStream, getAllStreams, getSingleStreamByIdWithSongs, getValidStream, VoteSong } from "../Repo/stream.repo";
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
 
      const Streams = await getAllStreams();
 
      return responseHandler(res , 200 , "All Streams Data" , Streams)
      
    }
    catch (error : any) {
       throw new ErrorHandler(error.message , 500)
    }
  
}


async function getStreamById(req : Request , res : Response , next : NextFunction) : Promise<any> {
   try {
    
        const streamId : string = req.params.streamId;
        const {userId} = req.user!;

       

        const streamDetails = await getSingleStreamByIdWithSongs(streamId , userId)

        return responseHandler(res , 200 , "Request Stream" , streamDetails)

   }
  catch (error : any) {
       throw new ErrorHandler(error.message , 500)
    }
}


async function addSongToCurrentStream(req : Request , res : Response , next : NextFunction) : Promise<any>{
  
    try {
     
        const {userId} = req.user!;

       
        const parsedResponse = addSongToStreamSchema.safeParse(req.body);

        if (!parsedResponse.success) {
            const errrors = formatError(parsedResponse.error.errors)
            next (new ErrorHandler(`Validation Valid : ${errrors.join(",")}` , 400))
        }

        const {streamId , title , url} = parsedResponse.data!;

        // Check first Stream exist and is Active :-
        const validStream = await getValidStream(streamId);

        if (!validStream){
           next (new ErrorHandler("Stream is invalid or may be stream is deactivated" , 400))
        }

        // Add song to the Stream :-
        const newAddedSong = await addSongToStream({streamId , title , url , userId})

        if (!newAddedSong) {
            next (new ErrorHandler("Song can not be added to the stream" , 417))
        }

        // Create an entry in the vote Table :-

        // await VoteSong({userId , songId : newAddedSong.id , voteType : "UPVOTE"})
       
        // Calculte the total Song vote data :-
        const totalVotes = 0

        // Emit an event to tell all the user connected to that stream about new Song :-
       io.to(streamId).emit("new-song-added" , {...newAddedSong , totalVotes})

       return responseHandler(res , 201 , "Song added SuccessFully" , {...newAddedSong , totalVotes})
        
      
    }
    catch (error : any) {
       return next (new ErrorHandler(error?.message , 500))
    }

}


async function voteForSong (req : Request , res : Response , next : NextFunction) : Promise<any> {
   
   try {

        const {userId , userRole} = req.user!;

        const userDetails = await getUserByIdAndRole({userId , userRole})
        const parsedResponse = voteSongSchema.safeParse(req.body);


        console.log("ParsedResponseData ", parsedResponse)

        if (!parsedResponse.success){
          
             const errors = formatError(parsedResponse.error.errors);
            next (new ErrorHandler(`Validation Failed : ${errors.join(",")}` ,  400))
        }

        const {songId , voteType , streamId} = parsedResponse.data!;

        // voting for a songs :-
        await VoteSong({songId , voteType , userId})

        // Emit and Event for the updated songs details :-
        // const allSongs = await getAllSongsWithVotesOfStream(streamId)

        // Fetching the updated count of total votes for that song :-

        const votedSongDetails = await fetchSongUpdatedWithVotes(songId);

        io.to(streamId).emit("voted-for-song" , votedSongDetails)

        return responseHandler(res , 200 , `${voteType} the song by ${userDetails?.firstName} ${userDetails?.lastName}` , votedSongDetails)
       
   }
   catch (error) {
       throw error;
   }

}

export { createStream , allStreams , getStreamById , addSongToCurrentStream , voteForSong };
