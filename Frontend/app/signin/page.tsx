import React from "react";
import Input from "../Components/Input";
import { InputFieldEnum } from "../entity/inputField.enum";

const page = () => {
  return (
    <div className="bg-[#121212] min-h-[80vh] w-full flex items-center justify-center">
      <div className="signin-form bg-[#1f1f1f] w-[24vw] h-[70vh] flex   p-6 rounded-sm flex-col">
        <div className="heading flex flex-col items-center gap-2">
          <h2 className="text-xl">Welcome To Muzer</h2>
          <p className="text-xs text-gray-400">Sign in to continue</p>
        </div>

        {/* Creating the form for sign In  */}

        <form className="px-4 mt-8 bg-red-500 min-h-[55%] flex justify-start flex-col gap-5">
          <Input label="Email" type={InputFieldEnum.email} />
          <Input label="Password" type={InputFieldEnum.password} />
        </form>
      </div>
    </div>
  );
};

export default page;
