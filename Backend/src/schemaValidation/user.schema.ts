import { z } from "zod";

export const updateUserDetailsSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be of atleast 3 char" })
    .optional(),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be of atleast 3 char" })
    .optional(),
  avatarUrl: z.string().optional(),
  publicId: z.string().optional(),
});
