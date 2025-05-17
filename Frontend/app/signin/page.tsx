'use client';

import React, { useState } from "react";
import Button from "../Components/Button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { signInSchema } from "../validations/signIn.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../Context/AuthContext";

const page = () => {
  type SignInFormData = z.infer<typeof signInSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });
  const [isloading , setIsLoading] = useState<boolean>(false);
  const {login} = useAuth();

  const submitForm = async (data: SignInFormData) => {
    setIsLoading(true);
    await login(data)

    

     setIsLoading(false);
  

  };

  return (
    <div className="bg-[#121212] min-h-[80vh] w-full flex items-center justify-center">
      <div className="signin-form  bg-[#1f1f1f] w-[24vw] min-h-[70vh] flex   p-6 rounded-sm flex-col">
        <div className="heading flex flex-col items-center gap-2">
          <h2 className="text-xl">Welcome To Muzer</h2>
          <p className="text-xs text-gray-400">Sign in to continue</p>
        </div>

        {/* Creating the form for sign In  */}

        <form
          onSubmit={handleSubmit(submitForm)}
          className="px-4 mt-8  min-h-[42%] flex justify-start flex-col gap-5"
        >
          <div className="flex flex-col items-start gap-2">
            <label className="text-sm">Email</label>
            <input
              {...register("email")}
              className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
            />

            {errors.email?.message && (
              <p className= "text-red-500 text-sm">{errors.email?.message}</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-2">
            <label className="text-sm">Password</label>
            <input
              type="password"
              {...register("password")}
              className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
            />
            {errors.password?.message && (
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            )}
          </div>

          {/* Creating the Checkbox  */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" {...register("rememberMe")} />
              <label className="text-sm" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <p className="text-xs hover:cursor-pointer hover:text-gray-200 text-gray-300">
              Forgot Password ?
            </p>
          </div>

          {/* Button for signIn  */}
         {
          isloading ?  <Button btnText="Signing..." color="bg-gray-600" isDisabled = {true}   /> :  <Button btnText="Sign In" color="bg-gray-500" isDisabled = {false}/>
         }
        </form>

        <p className=" flex items-center justify-center text-gray-600 my-8 mx-3 text-xs  w-full ">
          Don't have an account?
          <Link href={"/signup"} className="text-gray-400 font-bold ">
            Sign up
          </Link>
        </p>

        <p className="w-full flex items-center justify-center ">OR</p>

        <Button
          btnText="Continue with Google"
          btnIcon={FaGoogle}
          color="transparent"
          isDisabled = {false}
        />
        <Button
          btnText="Continue with Github"
          btnIcon={FaGithub}
          color="transparent"
          isDisabled = {false}
        />
      </div>
    </div>
  );
};

export default page;
