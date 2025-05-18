import React from 'react'
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
function NextSong() {
  return (
    <div className='w-full min-h-[10vh] my-4 bg-[#374152] rounded-md p-3'>
       <div className='flex items-center justify-between'>
          <div className='song-details flex items-center gap-3'>
             <p className='numbering text-gray-500'>#1</p>
           <div className='song-title flex items-start flex-col gap-2'>
               <h2 className='text-sm'>Blinding Lights</h2>
               <h5 className='text-xs'>The Weeknd</h5>
           </div>
          </div>


           <div className='voting flex items-center gap-4'>
               <RiThumbUpLine/>
               151
              <RiThumbDownLine/>
           </div>
       </div>
    </div>
  )
}

export default NextSong
