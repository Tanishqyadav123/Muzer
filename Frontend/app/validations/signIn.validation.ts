import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid Email Format" }),
  password: z.string().min(8, { message: "Password is weak" }),
  rememberMe: z.boolean({ message: "Remember Me must be a boolean value" }),
});
