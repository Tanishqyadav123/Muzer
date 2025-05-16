import React from "react";
import Input from "../Components/Input";
import { InputFieldEnum } from "../entity/inputField.enum";
import Button from "../Components/Button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const page = () => {
  return (
    <div className="bg-[#121212] min-h-[80vh] w-full flex items-center justify-center">
      <div className="signin-form bg-[#1f1f1f] w-[24vw] h-[70vh] flex   p-6 rounded-sm flex-col">
        <div className="heading flex flex-col items-center gap-2">
          <h2 className="text-xl">Welcome To Muzer</h2>
          <p className="text-xs text-gray-400">Sign in to continue</p>
        </div>

        {/* Creating the form for sign In  */}

        <form className="px-4 mt-8  min-h-[55%] flex justify-start flex-col gap-5">
          <Input label="Email" type={InputFieldEnum.email} />
          <Input label="Password" type={InputFieldEnum.password} />

         {/* Creating the Checkbox  */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">
             <input type="checkbox" name="rememberMe" id="rememberMe"  />
             <label className="text-sm" htmlFor="rememberMe">Remember me</label>
            </div>

             <p className="text-xs hover:cursor-pointer hover:text-gray-200 text-gray-300">Forgot Password ?</p>
          </div>

          {/* Button for signIn  */}
          <Button btnText="Sign In" color="bg-gray-500"/>

        </form>

       
          
         <p className="w-full flex items-center justify-center ">OR</p>

         <Button btnText="Continue with Google" btnIcon={FaGoogle} color="transparent" />
         <Button btnText="Continue with Github" btnIcon={FaGithub} color="transparent"/>
      
      </div>
    </div>
  );
};

export default page;
