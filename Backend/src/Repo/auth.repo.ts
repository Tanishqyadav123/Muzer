// Function for checking email is verified or not :-

import { prisma } from "../DB";
import { VerificationCodeType } from "../generated/prisma";
import {
  newUserInterface,
  upsertVerificationInterface,
  verifyEmailOtpInterface,
} from "../interfaces/auth.interfaces";

export async function checkEmailVerified(
  email: string,
  type: VerificationCodeType = "VERIFY"
) {
  const isEmailVerified = await prisma.verificationCodes.findUnique({
    where: {
      email,
      type,
      isVerified: true,
    },
  });
  return isEmailVerified;
}

export async function checkUserExistByEmail(email: string) {
  console.log("In Rerpo " , email)
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
}

export async function CreateNewUser(userData: newUserInterface) {
  return await prisma.user.create({
    data: {
      ...userData,
      isSubscribed: false,
      role: "USER",
    },
  });
}

export async function UpsertTheVerificationEntry(
  upsertData: upsertVerificationInterface
) {
  return await prisma.verificationCodes.upsert({
    where: {
      email: upsertData.email,
    },
    update: {
      otp: upsertData.otp,
      isVerified: upsertData.isVerified,
      type: upsertData.type,
      expiry: upsertData.expiry,
    },
    create: {
      otp: upsertData.otp,
      isVerified: upsertData.isVerified,
      email: upsertData.email,
      type: upsertData.type,
      expiry: upsertData.expiry,
    },
  });
}

export async function verifyEmailOtp(
  verifyOtpDetails: verifyEmailOtpInterface
) {
  const isEntryExist = await prisma.verificationCodes.findFirst({
    where: {
      email: verifyOtpDetails.email,
      otp: verifyOtpDetails.otp,
      isVerified: false,
      type: verifyOtpDetails.type,
    },
  });

  if (!isEntryExist) {
    return false;
  }

  const currentDate = new Date().toISOString();

  if (currentDate > isEntryExist.expiry) {
    return false;
  }

  return true;
}

export async function updateVerificationEntry({
  email,
  otp,
  type,
}: {
  email: string;
  otp: string;
  type: "FORGOT" | "VERIFY";
}) {
  return await prisma.verificationCodes.update({
    where: {
      email: email,
      otp: otp,
      type,
    },
    data: {
      otp: type == "FORGOT" ? otp : null,
      isVerified: true,
    },
  });
}

export async function verifyOTPForSetNewPassword({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) {
  const entry = await prisma.verificationCodes.findFirst({
    where: {
      email,
      otp,
      type: "FORGOT",
      isVerified: true,
    },
  });

  if (!entry) {
    return false;
  }

  await prisma.verificationCodes.update({
    where: {
      email,
    },
    data: {
      otp: null,
    },
  });

  return true;
}

// update User Details :-
export async function updateUserDetails(userId: string, userData: any) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: { ...userData },
  });
}
