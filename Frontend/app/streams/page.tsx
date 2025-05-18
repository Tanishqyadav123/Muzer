import React from 'react'
import StreamCard from '../Components/StreamCard'

function page() {
  return (
    <div className='  min-h-[70vh] w-full p-1'>
        <div className='mt-5'>
            <h1 className='text-center text-2xl'> Active Streams</h1>
             <StreamCard streamId='1' />
             <StreamCard streamId='2'/>
             <StreamCard streamId='3'/>
             <StreamCard streamId='4'/>
        
        </div>
    </div>
  )
}

export default page
