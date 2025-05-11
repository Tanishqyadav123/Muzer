import { z } from "zod";

export const signupUserSchema = z.object({
  firstName: z
    .string()
    .nonempty()
    .min(3, { message: "First Name must be of atleast 3" }),
  lastName: z
    .string()
    .nonempty()
    .min(3, { message: "Last Name must be of atleast 3" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be of atleast 8 characters" }),
});

export const sendOtpOnEmailSchema = z.object({
  email: z.string().nonempty().email({ message: "Invalid Email Format" }),
});

export const verifyEmailOtpSchema = z.object({
  email: z.string().email({ message: "Invalid Email Format" }),
  otp: z.string().length(4),
});

export const signinUserSchema = z.object({
  email: z.string().email("Invalid Email format"),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});
