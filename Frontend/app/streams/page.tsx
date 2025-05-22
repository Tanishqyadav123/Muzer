"use client";

import React, { useEffect, useState } from "react";
import StreamCard from "../Components/StreamCard";
import { io } from "socket.io-client";
import CreateStreamModel from "../Components/CreateStreamModel";
import { socket } from "../socket";
import { getAllStreams } from "../service/stream.service";

function page() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [allStreams , setAllStreams] = useState<any[]>([])

   const getStreams = async () => {
        const streamsData = await getAllStreams();
      console.log("streamsData " , streamsData)
        if (streamsData) {
           setAllStreams(streamsData)
        }
  };

  useEffect(() =>{
    
     
    getStreams();

  } , [showCreateModal])

  useEffect(() =>{
    
    socket.on("join-stream" , (data) =>{
       console.log(data)
    })

  } , [])

  
 if (!allStreams) {
    return <>Loading...</>
 }


 console.log(allStreams)

  return (
        <>
           {
            !allStreams ? "Loading..." :  <div className="  min-h-[70vh] w-full p-1">
      {showCreateModal ? (
        <div className="flex items-center justify-center h-[80vh]">
          <CreateStreamModel setShowCreateModal={setShowCreateModal} />
        </div>
      ) : (
        <div className="mt-5">
          <h1 className="text-center text-2xl"> Active Streams</h1>
          <div className="flex items-center justify-end my-6 w-[90%]">
            <button
              className=" p-2 bg-gray-900 rounded-md cursor-pointer"
              onClick={() => setShowCreateModal(!showCreateModal)}
            >
              Create Stream
            </button>
          </div>

         {
           allStreams.map((streamDetails , index) =>{
              return <StreamCard streamName= {streamDetails.streamName} createdBy={`${streamDetails?.host?.firstName} ${streamDetails?.host?.lastName} `} streamId={streamDetails.id} key={streamDetails.id} />
           })
         }
        </div>
      )}
    </div>
           }
        </>
  );
}

export default page;
