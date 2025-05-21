import { z } from "zod";

export const createStreamSchema = z.object({
  streamName: z
    .string()
    .min(3, { message: "Stream Name must of atleast 3 Characters" }),
});
