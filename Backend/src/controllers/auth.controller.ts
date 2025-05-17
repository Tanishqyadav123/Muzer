import { Request, NextFunction, Response, response } from "express";
import { ErrorHandler } from "../middlewares/error.middleware";
import {
  sendOtpOnEmailSchema,
  setNewPasswordSchema,
  signinUserSchema,
  signupUserSchema,
  verifyEmailOtpSchema,
} from "../schemaValidation/auth.schema";
import { formatError } from "../utils/formaterror";
import {
  checkEmailVerified,
  checkUserExistByEmail,
  CreateNewUser,
  updateUserDetails,
  updateVerificationEntry,
  UpsertTheVerificationEntry,
  verifyEmailOtp,
  verifyOTPForSetNewPassword,
} from "../Repo/auth.repo";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { responseHandler } from "../handlers/response.handler";
import { sendEmail } from "../services/emailService";
import { VerificationCodeType } from "../entity/auth.entity";
import { generateOTP } from "../utils/generateOtp";

// Function for send Otp on email :-

async function sendOtpOnEmail(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const parsedResponse = sendOtpOnEmailSchema.safeParse(req.body);

    if (!parsedResponse.success) {
      const errors = formatError(parsedResponse.error?.errors);
      return next(
        new ErrorHandler(`Validation failed ,  ${errors.join(",")}`, 400)
      );
    }

    const email = parsedResponse.data?.email;

    if (!email) {
      return next(new ErrorHandler("Email is not provided ", 400));
    }

    const isUserExist = await checkUserExistByEmail(email!);

    if (isUserExist) {
      return next(new ErrorHandler("User already exist with email ", 409));
    }

    // Send Email for verification Code :-

    const otp = generateOTP();

    const expiry = new Date();

    expiry.setMinutes(expiry.getMinutes() + 5);

    const emailResponse = await sendEmail(
      email,
      "Email for Verification",
      `The OTP is ${otp}`
    );

    if (!emailResponse) {
      return next(new ErrorHandler("Email could not be sent", 500));
    }

    // Upsert the entry in the verification Code Table :-
    await UpsertTheVerificationEntry({
      email,
      isVerified: false,
      otp,
      type: VerificationCodeType.VERIFY,
      expiry: expiry.toISOString(),
    });

    return responseHandler(res, 200, "OTP sent successFully");
  } catch (error: any) {
    next(new ErrorHandler(error.message, 500));
  }
}

// Function for verify OTP :-

async function verifyOTPOnEmail(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const parsedResponse = verifyEmailOtpSchema.safeParse(req.body);

    if (!parsedResponse.success) {
      return next(new ErrorHandler("Validation Error", 400));
    }

    const { email, otp, type } = parsedResponse.data;

    const isValidOtp = await verifyEmailOtp({ email, otp, type });

    if (!isValidOtp) {
      return next(new ErrorHandler("Invalid OTP or may be expired", 400));
    }

    // update the entry :-
    await updateVerificationEntry({ email, otp, type });

    return responseHandler(res, 200, "Email Verified SuccessFully");
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

// Function for signup :-
async function signupUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    // Parsing the schema :-
    const parsedSchema = signupUserSchema.safeParse(req.body);
    if (!parsedSchema.success) {
      let errors = formatError(parsedSchema.error.errors);
      return next(
        new ErrorHandler(`Validation Failed: ${errors.join(", ")}`, 400)
      );
    }

    const { email, firstName, lastName, password } = parsedSchema.data;

    // check for the email verified or not :-
    const isEmailVerified = await checkEmailVerified(email, "VERIFY");
    if (!isEmailVerified) {
      return next(new ErrorHandler("Email is not verified", 400));
    }

    // Check if user with Email already exist :-
    const isUserExist = await checkUserExistByEmail(email);

    if (isUserExist) {
      return next(new ErrorHandler("User already exist with email ", 409));
    }

    // hash the Password using bcrypt :-
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await CreateNewUser({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    return responseHandler(res, 201, "User Registered SuccessFully", {
      id: newUser.id,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

// Function for signIn :-
async function signinUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const parseResponse = signinUserSchema.safeParse(req.body);

    if (!parseResponse.success) {
      return next(new ErrorHandler(`Validation error `, 400));
    }

    const { email, password , rememberMe } = parseResponse.data;

    const isUserExist = await checkUserExistByEmail(email);

    if (!isUserExist) {
      return next(new ErrorHandler("Invalid Credentails", 400));
    }

    // Matching the Password :-
    const isMatch = await bcrypt.compare(password, isUserExist.password);

    if (!isMatch) {
      return next(new ErrorHandler("Invalid Credentails", 400));
    }

    // Generate the JWT Token :-

    const token = jwt.sign(
      { userId: isUserExist.id, userRole: isUserExist.role },
      process.env.JWT_SECRET!,
      {
        expiresIn:  rememberMe ? "15d" : "7d",
      }
    );

    return responseHandler(res, 200, "Login Successsfully", { token });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

// Function for send OTP for forgot PAssword :-
async function forgotPasswordOtp(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const parsedResponse = sendOtpOnEmailSchema.safeParse(req.body);

    if (!parsedResponse.success) {
      const errors = formatError(parsedResponse.error?.errors);

      return next(
        new ErrorHandler(`Validation Faild , ${errors.join(",")}`, 400)
      );
    }

    const { email } = parsedResponse.data;

    const otp = generateOTP();

    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 5); // 5 min Expiry :-

    // Send Email for forgot Password :-
    const emailResponse = await sendEmail(
      email,
      "OTP for Forgot-Password",
      `The OTP is ${otp}`
    );

    if (!emailResponse) {
      return next(new ErrorHandler("Email could not be sent", 500));
    }

    // Upsert the entry of the verification Table :-
    await UpsertTheVerificationEntry({
      email,
      expiry: expiry.toISOString(),
      isVerified: false,
      otp,
      type: VerificationCodeType.FORGOT,
    });

    return responseHandler(
      res,
      200,
      "Email for forgot Password sent Successfully"
    );
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

// Function for set New Password after forgot :-
async function setNewPasword(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const parseResponse = setNewPasswordSchema.safeParse(req.body);

    if (!parseResponse.success) {
      const errors = formatError(parseResponse.error?.errors);

      return next(
        new ErrorHandler(`Validation Failed , ${errors.join(",")}`, 400)
      );
    }

    const { email, newPassword, otp } = parseResponse.data;

    // Verify User exist :-

    const isUserExist = await checkUserExistByEmail(email);

    if (!isUserExist) {
      return next(new ErrorHandler("User with email not found", 400));
    }
    // verify OTP &&  Update the verification Code Details :- :-

    const isValidOtp = await verifyOTPForSetNewPassword({ email, otp });

    if (!isValidOtp) {
      return next(
        new ErrorHandler("you are not allowed to change password", 400)
      );
    }

    // hash the Password :-

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user Password :-

    await updateUserDetails(isUserExist.id, { password: hashedPassword });

    return responseHandler(res, 200, "User's Password updated successfully");
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

export {
  signupUser,
  sendOtpOnEmail,
  verifyOTPOnEmail,
  signinUser,
  forgotPasswordOtp,
  setNewPasword,
};
