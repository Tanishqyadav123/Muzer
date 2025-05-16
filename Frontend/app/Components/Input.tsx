import React from "react";
import { InputFieldEnum } from "../entity/inputField.enum";

function Input({ type, label }: { type: InputFieldEnum; label: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <label className="text-sm">{label}</label>
      <input
        type={type}
        className="border-gray-400 border-1 w-full h-8 bg-[#121212] text-sm px-2"
      />
    </div>
  );
}

export default Input;
