export interface VerifyOTPPayload {
    otp : string ,
     email : string ,
      type : "VERIFY" | "FORGOT"
}