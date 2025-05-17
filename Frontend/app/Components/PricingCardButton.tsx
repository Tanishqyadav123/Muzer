import React from 'react'

function PricingCardButton ({btnText , btnIcon , color  } : {btnText : string , btnIcon ?: any , color : string }) {

    return <>
    
     <button  className={`${color}  p-2 border-1 rounded-md text-xs mt-4 transition-all  hover:bg-gray-600 cursor-pointer flex items-center justify-center gap-3 w-[15vw] `}> {btnIcon && btnIcon()} {btnText}</button>
      
    </>

}

export default PricingCardButton;

