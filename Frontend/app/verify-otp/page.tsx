"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { verifyOtpSchema } from '../validations/verify-otp.validation';
import { z } from 'zod';
import { VerifyOTPPayload } from '../interfaces/auth.interface';
import { verifyOtpService } from '../service/auth.service';
import { useRouter } from 'next/navigation';

export type VerifyOtpSchemaType = z.infer<typeof verifyOtpSchema>;
function page() {
       const {register , handleSubmit , formState : {errors }} = useForm<VerifyOtpSchemaType>({
             resolver : zodResolver(verifyOtpSchema),
             mode : "onChange"
        })

        const [isLoading , setIsLoading] = useState(false);
        const router = useRouter()

   const verifyOtpOnEmail = async(data :VerifyOtpSchemaType) =>{
    
          setIsLoading(true);

            let payload : VerifyOTPPayload = {...data , email : localStorage.getItem("emailForVerify")! , type : "VERIFY"};

            const isVerified = await verifyOtpService(payload);
            if (isVerified) {
                 router.push('/signup')
            }

            setIsLoading(false)
   }     
  return (
   <div className='min-h-[70vh] flex items-center justify-center'>
     
       <div className='email-verify p-8 bg-[#1f2a38] min-h-[55vh] min-w-[35vw] rounded-lg'>
           <h1 className='w-full text-2xl font-semibold text-center'>Verify OTP</h1>
           <p className='text-md text-[#4c5767] text-center mt-2'>Please enter the OTP sent to your email</p>
       <form className='mt-6' onSubmit={handleSubmit(verifyOtpOnEmail)}>

        <input {...register("otp")} className="border-gray-400 border-1 w-full h-8 text-sm px-2 " placeholder='Enter your otp' />
        {
            errors.otp && <p className='text-red-500 text-sm mt-3 '>{errors.otp.message}</p>
        }

        <div className='w-full flex justify-center mt-12 '>
            <button className='bg-black p-3 rounded-md cursor-pointer' disabled = {isLoading} >{isLoading ? "Verifying..." : "Verify"}</button>
        </div>
       </form>
       </div>


    </div>
  )
}

export default page
