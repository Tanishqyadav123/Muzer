function Button ({btnText , btnIcon , color} : {btnText : string , btnIcon ?: any , color : string}) {
    
    return <>
    
     <button className={`${color}  p-2 border-1 rounded-full text-sm mt-4 transition-all  hover:bg-gray-600 cursor-pointer flex items-center justify-center gap-3 `}> {btnIcon && btnIcon()} {btnText}</button>
      
    </>

}

export default Button;
