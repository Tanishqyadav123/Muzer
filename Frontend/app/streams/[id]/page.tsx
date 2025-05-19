import NextSong from "@/app/Components/NextSong";
import Player from "@/app/Components/Player";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-[70vh] bg-[#111826] p-4 sm:p-6 md:p-8">
      {/* Stream Heading */}
      <div className="stream-heading flex flex-col items-start gap-1 sm:gap-2 mb-4">
        <h1 className="text-lg sm:text-xl font-semibold">
          Current Stream: Friday Night Vibes
        </h1>
        <h6 className="text-xs sm:text-sm text-gray-400">
          Created by John Doe • 24 listeners
        </h6>
      </div>

      {/* Player */}
      <div className="mb-6">
        <Player />
      </div>

      {/* Queue Section */}
      <div className="song-queue bg-[#1f2a38] min-h-[50vh] w-full p-4 sm:p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
          <h1 className="text-lg font-semibold">Next In The Queue</h1>
          <button className="px-4 py-2 text-xs sm:text-sm bg-white text-black rounded-full cursor-pointer hover:bg-gray-200 transition">
            Add Song
          </button>
        </div>

        {/* Songs List */}
        <div className="flex flex-col gap-4">
          <NextSong />
          <NextSong />
          <NextSong />
        </div>
      </div>
    </div>
  );
}

export default page;
