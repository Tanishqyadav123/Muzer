import { z } from "zod";

export const createStreamSchema = z.object({
      streamName : z.string().min(3 , {message : "stream Name must of atleast 3 characters long"})
})