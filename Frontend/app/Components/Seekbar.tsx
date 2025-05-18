"use client";
import React, { ChangeEvent, useEffect, useState } from 'react'

function Seekbar({isPlaying} : {isPlaying : boolean}) {

    const [seekState , setSeekState] = useState(60);
    const handleSeekChange = (e : ChangeEvent<HTMLInputElement>) =>{
       
           console.log("Object " , e.target.value )
            setSeekState(parseInt(e.target.value))  
       
    }


    useEffect(() =>{
        let intervalId : any;
         if (isPlaying) {
             

             intervalId = setInterval(() =>{

                setSeekState((prev) => prev + 1);
                 
                
             } , 1000)

         }

         return () =>{
             intervalId && clearInterval(intervalId)
         }
    } , [seekState , isPlaying])

  return (
    <div>
          <div className="w-[75vw] mx-auto ">
      <input
        type="range"
        min="0"
        max="100"
        value={seekState}
        onChange={handleSeekChange}
        className="w-full h-1 appearance-none bg-gray-300 rounded-full outline-none transition-all duration-300
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-blue-500
                   [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-moz-range-thumb]:appearance-none
                   [&::-moz-range-thumb]:h-4
                   [&::-moz-range-thumb]:w-4
                   [&::-moz-range-thumb]:rounded-full
                   [&::-moz-range-thumb]:bg-blue-500
                   [&::-moz-range-thumb]:cursor-pointer"
      />
      <div className="text-sm text-center mt-2 text-gray-600">
        Progress: {seekState}%
      </div>
    </div>
    </div>
  )
}

export default Seekbar
