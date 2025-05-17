import { z } from "zod";

export const verifyOtpSchema = z.object({
     otp : z.string().length(4 , {message : "Invalid OTP"})
})