import { VerificationCodeType } from "../entity/auth.entity";

export interface newUserInterface {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}
export interface upsertVerificationInterface {
  email: string;
  otp: string;
  isVerified: boolean;
  type: VerificationCodeType;
  expiry: string;
}

export interface verifyEmailOtpInterface {
  email: string;
  otp: string;
  type: "FORGOT" | "VERIFY";
}
