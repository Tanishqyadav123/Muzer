import { tranporter } from "../config/nodemailer.config";

export async function sendEmail(to: string, subject: string, text: string) {
  try {
    const emailResponse = await tranporter.sendMail({
      to,
      subject,
      text,
      sender: process.env.NODEMAILER_EMAIL,
    });

    if (emailResponse) {
      return true;
    }
    return false;
  } catch (error: any) {
    console.log("error Occured ", error.message);
  }
}
