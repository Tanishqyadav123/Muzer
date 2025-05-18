import NextSong from '@/app/Components/NextSong'
import Player from '@/app/Components/Player'
import React from 'react'

function page({params} : {params : {id : string}}) {
  return (
    <div className="min-h-[70vh] bg-[#111826] p-6">
       
        <div className='stream-heading flex items-start flex-col gap-2'>
            <h1 className='text-xl'>Current Stream: Friday Night Vibes</h1>
            <h6 className='text-xs'>Created by John Doe • 24 listeners</h6>
        </div>

        <Player/>

{/* Creating the Queue for songs listing */}
        <div className='song-queue bg-[#1f2a38] min-h-[50vh] w-full p-8 '>
              <div className='flex items-center justify-between '>
                <h1 className='text-lg'>Next In The Queue</h1>
                <button className='p-2 text-xs bg-white text-black rounded-full cursor-pointer'>
                    Add Song
                </button>
              </div>

              <NextSong/>
              <NextSong/>
              <NextSong/>

        </div>

    </div>
  )
}

export default page
