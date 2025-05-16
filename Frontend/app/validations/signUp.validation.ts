import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be of atleast 3 character" }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be of atleast 3 character" }),
  email: z.string().email({ message: "Invalid Email Format" }),
  password: z.string().min(8, { message: "Password is weak" }),
});
