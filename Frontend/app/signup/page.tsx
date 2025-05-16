"use client";

import React from "react";
import Button from "../Components/Button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../validations/signUp.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

const page = () => {
  type SignUpFormData = z.infer<typeof signUpSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const submitForm = (data: SignUpFormData) => {
    console.log("Data ", data);
  };

  return (
    <div className="bg-[#121212] min-h-[85vh] w-full flex items-center justify-center">
      <div className="signin-form  bg-[#1f1f1f] w-[24vw] min-h-[60vh] flex   p-6 rounded-sm flex-col">
        <div className="heading flex flex-col items-center gap-2">
          <h2 className="text-xl">Welcome To Muzer</h2>
          <p className="text-xs text-gray-400">Sign up to join</p>
        </div>

        {/* Creating the form for sign In  */}

        <form
          onSubmit={handleSubmit(submitForm)}
          className="px-4 mt-8  min-h-[45%] flex justify-start flex-col gap-5"
        >
          {/* First Name  */}

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm">First Name</label>
            <input
              {...register("firstName")}
              className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
            />

            {errors.firstName?.message && (
              <p className="text-red-500">{errors.firstName?.message}</p>
            )}
          </div>

          {/*  Last Name */}

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm">Last Name</label>
            <input
              {...register("lastName")}
              className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
            />

            {errors.lastName?.message && (
              <p className="text-red-500">{errors.lastName?.message}</p>
            )}
          </div>

          {/* Email Address */}

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm">Email</label>
            <input
              {...register("email")}
              className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
            />

            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>

          {/* Password  */}
          <div className="flex flex-col items-start gap-2">
            <label className="text-sm">Password</label>
            <input
              type="password"
              {...register("password")}
              className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>

          {/* Button for Sign Up  */}
          <Button btnText="Sign Up" color="bg-gray-500" />
        </form>

        <p className=" flex items-center justify-center text-gray-600 my-5 mx-3 text-xs  w-full ">
          Already have an account?
          <Link href={"/signin"} className="text-gray-400 font-bold ">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
