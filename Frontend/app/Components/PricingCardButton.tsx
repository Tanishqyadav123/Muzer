import React from "react";

function PricingCardButton({
  btnText,
  btnIcon,
  color,
}: {
  btnText: string;
  btnIcon?: any;
  color: string;
}) {
  return (
    <button
      className={`${color} 
        px-4 py-2 
        text-xs md:text-sm 
        rounded-md 
        transition-all 
        hover:bg-gray-600 
        cursor-pointer 
        flex items-center justify-center 
        gap-2 
        w-full sm:w-[200px]
        border border-gray-500`}
    >
      {btnIcon && btnIcon()}
      {btnText}
    </button>
  );
}

export default PricingCardButton;
