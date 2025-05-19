// "use client";

// import React, { useState } from "react";
// import Button from "../Components/Button";
// import { FaGoogle } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import { signUpSchema } from "../validations/signUp.validation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import Link from "next/link";
// import { signUpUserService } from "../service/auth.service";
// import { useRouter } from "next/navigation";

// export type SignUpFormData = z.infer<typeof signUpSchema>;
// const page = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignUpFormData>({
//     resolver: zodResolver(signUpSchema),
//     mode: "onChange",
//   });

//   const router = useRouter();
//   const [isLoading , setIsLoading] = useState<boolean>(false);
//   const submitForm = async (data: SignUpFormData) => {

//        setIsLoading(true);
//       const isRegistered =  await signUpUserService(data);

//       if (isRegistered.success) {
//          router.push('/signin')
//       }
//       else if (!isRegistered.success && isRegistered?.errMessage === "Email is not verified") {
//            router.push('/verify-email')
//       }
//         setIsLoading(false)
//   };

//   return (
//     <div className="bg-[#121212] min-h-[85vh] w-full flex items-center justify-center">
//       <div className="signin-form  bg-[#1f1f1f] w-[24vw] min-h-[60vh] flex   p-6 rounded-sm flex-col">
//         <div className="heading flex flex-col items-center gap-2">
//           <h2 className="text-xl">Welcome To Muzer</h2>
//           <p className="text-xs text-gray-400">Sign up to join</p>
//         </div>

//         {/* Creating the form for sign In  */}

//         <form
//           onSubmit={handleSubmit(submitForm)}
//           className="px-4 mt-8  min-h-[45%] flex justify-start flex-col gap-5"
//         >
//           {/* First Name  */}

//           <div className="flex flex-col items-start gap-2">
//             <label className="text-sm">First Name</label>
//             <input
//               {...register("firstName")}
//               className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
//             />

//             {errors.firstName?.message && (
//               <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
//             )}
//           </div>

//           {/*  Last Name */}

//           <div className="flex flex-col items-start gap-2">
//             <label className="text-sm">Last Name</label>
//             <input
//               {...register("lastName")}
//               className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
//             />

//             {errors.lastName?.message && (
//               <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
//             )}
//           </div>

//           {/* Email Address */}

//           <div className="flex flex-col items-start gap-2">
//             <label className="text-sm">Email</label>
//             <input
//               {...register("email")}
//               className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
//             />

//             {errors.email?.message && (
//               <p className="text-red-500 text-sm">{errors.email?.message}</p>
//             )}
//           </div>

//           {/* Password  */}
//           <div className="flex flex-col items-start gap-2">
//             <label className="text-sm">Password</label>
//             <input
//               type="password"
//               {...register("password")}
//               className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
//             />
//             {errors.password?.message && (
//               <p className="text-red-500 text-sm">{errors.password?.message}</p>
//             )}
//           </div>

//           {/* Button for Sign Up  */}
//           {
//             isLoading ? <Button btnText="Signing up..." color="bg-gray-600" isDisabled = {true} /> : <Button btnText="Sign Up" color="bg-gray-500" isDisabled = {false} />
//           }

//         </form>

//         <p className=" flex items-center justify-center text-gray-600 my-5 mx-3 text-xs  w-full ">
//           Already have an account?
//           <Link href={"/signin"} className="text-gray-400 font-bold ">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default page;
"use client";

import React, { useState } from "react";
import Button from "../Components/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../validations/signUp.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { signUpUserService } from "../service/auth.service";
import { useRouter } from "next/navigation";

export type SignUpFormData = z.infer<typeof signUpSchema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitForm = async (data: SignUpFormData) => {
    setIsLoading(true);
    const isRegistered = await signUpUserService(data);

    if (isRegistered.success) {
      router.push("/signin");
    } else if (
      !isRegistered.success &&
      isRegistered?.errMessage === "Email is not verified"
    ) {
      router.push("/verify-email");
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-[#121212] min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md md:max-w-lg rounded-md p-6 sm:p-8 flex flex-col shadow-md">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-semibold text-white">
            Welcome To Muzer
          </h2>
          <p className="text-sm text-gray-400">Sign up to join</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(submitForm)}
          className="mt-8 flex flex-col gap-5"
        >
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white">First Name</label>
            <input
              {...register("firstName")}
              className="w-full h-10 bg-[#121212] text-sm px-3 text-white border border-gray-600 focus:outline-none focus:border-gray-300 rounded"
            />
            {errors.firstName?.message && (
              <p className="text-red-500 text-xs">
                {errors.firstName?.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white">Last Name</label>
            <input
              {...register("lastName")}
              className="w-full h-10 bg-[#121212] text-sm px-3 text-white border border-gray-600 focus:outline-none focus:border-gray-300 rounded"
            />
            {errors.lastName?.message && (
              <p className="text-red-500 text-xs">{errors.lastName?.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white">Email</label>
            <input
              {...register("email")}
              className="w-full h-10 bg-[#121212] text-sm px-3 text-white border border-gray-600 focus:outline-none focus:border-gray-300 rounded"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full h-10 bg-[#121212] text-sm px-3 text-white border border-gray-600 focus:outline-none focus:border-gray-300 rounded"
            />
            {errors.password?.message && (
              <p className="text-red-500 text-xs">{errors.password?.message}</p>
            )}
          </div>

          {/* Submit Button */}
          {isLoading ? (
            <Button
              btnText="Signing up..."
              color="bg-gray-600"
              isDisabled={true}
            />
          ) : (
            <Button btnText="Sign Up" color="bg-gray-500" isDisabled={false} />
          )}
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Already have an account?
          <Link
            href="/signin"
            className="text-gray-300 font-bold ml-1 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
