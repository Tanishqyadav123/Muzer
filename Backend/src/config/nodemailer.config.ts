import nodemailer from "nodemailer";

export const tranporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS_KEY,
  },
});
