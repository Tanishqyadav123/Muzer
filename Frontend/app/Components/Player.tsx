"use client";

import React, { useEffect, useState } from "react";
import MuzerLogo from "@/public/Muze_logo.jpeg";
import Image from "next/image";
import Seekbar from "./Seekbar";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
  }, [isPlaying]);
  return (
    <div className="w-[100%] h-[10vh] bg-[#1f2a38] my-5 p-2">
      <div className="flex items-center justify-around gap-5">
        <Image src={MuzerLogo} alt="music" className="h-10 w-10 mb-4" />

        <div className="song-desc flex items-start flex-col">
          <h2 className="text-sm">Currently Playing</h2>
          <h5 className="text-xs">Shape of You - Ed Sheeran</h5>
          <Seekbar isPlaying={isPlaying} />
        </div>

        <div className="play-icons flex items-center gap-4 m-2 cursor-pointer">
          <FaBackward />
          {isPlaying ? (
            <FaPause onClick={handlePlayPause} />
          ) : (
            <FaPlay onClick={handlePlayPause} />
          )}
          <FaForward />
        </div>
      </div>
    </div>
  );
}

export default Player;
