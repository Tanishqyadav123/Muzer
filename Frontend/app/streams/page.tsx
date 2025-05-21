"use client";

import React, { useEffect, useState } from "react";
import StreamCard from "../Components/StreamCard";
import { io } from "socket.io-client";
import CreateStreamModel from "../Components/CreateStreamModel";
import { socket } from "../socket";

function page() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  // const socket = io("http://localhost:8080");
  useEffect(() => {
    console.log(socket);
    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("join-stream", (data) => {
      console.log("data is ", data);
    });
  }, []);

  return (
    <div className="  min-h-[70vh] w-full p-1">
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

          <StreamCard streamId="1" />
          <StreamCard streamId="2" />
          <StreamCard streamId="3" />
          <StreamCard streamId="4" />
        </div>
      )}
    </div>
  );
}

export default page;
