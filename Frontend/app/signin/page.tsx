"use client";

import React, { useState } from "react";
import Button from "../Components/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { signInSchema } from "../validations/signIn.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";
import { useRouter } from "next/navigation";

const Page = () => {
  type SignInFormData = z.infer<typeof signInSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const submitForm = async (data: SignInFormData) => {
    setIsLoading(true);
    await login(data);
    setIsLoading(false);
  };

  const handleSocialLogin = async () => {
    router.push(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`);
  };

  return (
    <div className="bg-[#121212] min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md md:max-w-lg p-6 sm:p-8 rounded-md flex flex-col shadow-lg">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Welcome To Muzer
          </h2>
          <p className="text-sm text-gray-400">Sign in to continue</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(submitForm)}
          className="mt-8 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white">Email</label>
            <input
              {...register("email")}
              className="w-full h-10 rounded px-3 bg-[#121212] text-sm text-white border border-gray-600 focus:outline-none focus:border-gray-300"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-white">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full h-10 rounded px-3 bg-[#121212] text-sm text-white border border-gray-600 focus:outline-none focus:border-gray-300"
            />
            {errors.password?.message && (
              <p className="text-red-500 text-xs">{errors.password?.message}</p>
            )}
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" {...register("rememberMe")} />
              Remember me
            </label>
            <p className="hover:underline hover:text-gray-100 cursor-pointer">
              Forgot Password?
            </p>
          </div>

          {/* Submit Button */}
          {isLoading ? (
            <Button
              btnText="Signing..."
              color="bg-gray-600"
              isDisabled={true}
            />
          ) : (
            <Button btnText="Sign In" color="bg-gray-500" isDisabled={false} />
          )}
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Don't have an account?
          <Link
            href="/signup"
            className="text-gray-300 font-bold ml-1 hover:underline"
          >
            Sign up
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6 text-gray-500 text-sm">
          <div className="h-px flex-1 bg-gray-600" />
          <span>OR</span>
          <div className="h-px flex-1 bg-gray-600" />
        </div>

        {/* Social Buttons */}
        <Button
          btnText="Continue with Google"
          btnIcon={FaGoogle}
          color="transparent"
          isDisabled={false}
          onClickHandler={handleSocialLogin}
        />
        <Button
          btnText="Continue with Github"
          btnIcon={FaGithub}
          color="transparent"
          isDisabled={false}
        />
      </div>
    </div>
  );
};

export default Page;
