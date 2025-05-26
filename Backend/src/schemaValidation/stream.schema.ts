import { Socket } from "socket.io";
import { z } from "zod";

export const createStreamSchema = z.object({
      streamName : z.string().min(3 , {message : "stream Name must of atleast 3 characters long"}),
      socketId  : z.string().nonempty()
})

export const addSongToStreamSchema = z.object({
       streamId : z.string().nonempty(),
       title : z.string().nonempty(),
       url : z.string()
})

export const voteSongSchema = z.object({
      songId : z.string().nonempty(),
      voteType : z.enum(["UPVOTE" , "DOWNVOTE"]),
      streamId : z.string().nonempty()
})