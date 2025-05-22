import { z } from "zod";

export const AddSongSchema = z.object({
     title : z.string().min(3 , {message : "Title must be atleast 3 character"}),
     url : z.string().nonempty() 
})