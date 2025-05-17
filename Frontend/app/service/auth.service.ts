"use client";
import axios from "axios";
import { SignUpFormData } from "../signup/page";
import toast from "react-hot-toast";
import { VerifyEmailSchemaType } from "../verify-email/page";
import { VerifyOTPPayload } from "../interfaces/auth.interface";


export const signUpUserService = async (userData : SignUpFormData) : Promise<{success : boolean , errMessage ?:string }> =>{
    
   try {
       const res : any= await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup` , userData);

     if (res.data ) {
        toast.success(res.data.message)         
     }

    
     return {success : true};
   }
   catch (error : any) {
       toast.error(error?.response?.data?.message) 
       return {success : false , errMessage : error.response.data.message};
       
   }

}

export const sendOtpOnEmailService = async (sendEmail : VerifyEmailSchemaType): Promise<boolean> =>{
    try {
         const res : any = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/send-otp` , sendEmail);
         if (res.data ) {
           toast.success(res.data.message)      
            
        }
        return true;
    } catch (error : any) {
        toast.error(error?.response?.data?.message) 
        return false;
       
   }

}



export const verifyOtpService = async (payload : VerifyOTPPayload) => {
         try {
         const res : any = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-otp` , payload);
         if (res.data ) {
           toast.success(res.data.message)      
            
        }
        return true;
    } catch (error : any) {
        toast.error(error?.response?.data?.message) 
        return false;
       
   }
}