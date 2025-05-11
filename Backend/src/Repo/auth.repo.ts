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
}: {
  email: string;
  otp: string;
}) {
  return await prisma.verificationCodes.update({
    where: {
      email: email,
      otp: otp,
    },
    data: {
      otp: null,
      isVerified: true,
    },
  });
}
