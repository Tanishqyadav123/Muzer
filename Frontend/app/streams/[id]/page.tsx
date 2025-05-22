"use client";

import AddSongModel from "@/app/Components/AddSongModel";
import NextSong from "@/app/Components/NextSong";
import Player from "@/app/Components/Player";
import { getStreamById } from "@/app/service/stream.service";
import React, { use, useEffect, useState } from "react";

function page({ params }: { params: Promise<{ id: string }> }) {
  const [streamData, setStreamData] = useState<any>({});
  const { id } = use(params);

  const [showAddSong, setShowAddSong] = useState<boolean>(false);

  async function fetchStreamDetails(streamId: string) {
    const stream = await getStreamById(streamId);

    if (stream) {
      setStreamData(stream);
    }
  }
  useEffect(() => {
    fetchStreamDetails(id);
  }, []);

  console.log("line 22", streamData);
  return showAddSong ? (
    <div className="flex items-center justify-center h-[80vh]">
      <AddSongModel setShowAddSong={setShowAddSong} />
    </div>
  ) : (
    <div className="min-h-[70vh] bg-[#111826] p-4 sm:p-6 md:p-8">
      <div className="stream-heading flex flex-col items-start gap-1 sm:gap-2 mb-4">
        <h1 className="text-lg sm:text-xl font-semibold">
          Current Stream: {streamData?.streamName!}
        </h1>
        <h6 className="text-xs sm:text-sm text-gray-400">
          Created by {streamData?.host?.firstName} {streamData?.host?.lastName}{" "}
          • 24 listeners
        </h6>
      </div>

      <div className="mb-6">
        <Player />
      </div>

      <div className="song-queue bg-[#1f2a38] min-h-[50vh] w-full p-4 sm:p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
          <h1 className="text-lg font-semibold">Next In The Queue</h1>
          <button
            onClick={() => setShowAddSong(true)}
            className="px-4 py-2 text-xs sm:text-sm bg-white text-black rounded-full cursor-pointer hover:bg-gray-200 transition"
          >
            Add Song
          </button>
        </div>

        {streamData?.songs?.length ? (
          <div className="flex flex-col gap-4">
            {streamData?.songs?.map((songsDetails: any) => {
              return <NextSong />;
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4">No Songs added yet</div>
        )}
      </div>
    </div>
  );
}

export default page;
