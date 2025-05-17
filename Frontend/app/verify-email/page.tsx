"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { verifyEmailSchema } from '../validations/verify-email.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendOtpOnEmailService } from '../service/auth.service';
import { useRouter } from 'next/navigation';

export type VerifyEmailSchemaType = z.infer<typeof verifyEmailSchema>
function page() {

    const {register , handleSubmit , formState : {errors }} = useForm<VerifyEmailSchemaType>({
         resolver : zodResolver(verifyEmailSchema),
         mode : "onChange"
    })
    const router = useRouter();

    const [isLoading , setIsLoading] = useState(false);

    const sendOtpOnEmail = async (data : VerifyEmailSchemaType)=>{
        setIsLoading(true);
       let isSent = await sendOtpOnEmailService(data);
       
       if (isSent) {
           localStorage.setItem("emailForVerify" , data.email)
           router.push('/verify-otp')
        }
        setIsLoading(false);
    }

  return (
    <div className='min-h-[70vh] flex items-center justify-center'>
     
       <div className='email-verify p-8 bg-[#1f2a38] min-h-[55vh] min-w-[35vw] rounded-lg'>
           <h1 className='w-full text-2xl font-semibold text-center'>Verify Email</h1>
           <p className='text-md text-[#4c5767] text-center mt-2'>Please enter the email you want to verify</p>
       <form className='mt-6' onSubmit={handleSubmit(sendOtpOnEmail)}>

        <input {...register("email")} className="border-gray-400 border-1 w-full h-8 text-sm px-2 " placeholder='Enter your email' />
        {
            errors.email && <p className='text-red-500 text-sm mt-3 '>{errors.email.message}</p>
        }

        <div className='w-full flex justify-center mt-12 '>
            <button className='bg-black p-3 rounded-md cursor-pointer' disabled = {isLoading} >{isLoading ? "Sending..." : "Send Email"}</button>
        </div>
       </form>
       </div>


    </div>
  )
}

export default page
