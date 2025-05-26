"use client";

import React, { useEffect, useRef, useState } from "react";
import MuzerLogo from "@/public/Muze_logo.jpeg";
import Image from "next/image";
import Seekbar from "./Seekbar";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const playerRef = useRef<any>(null);
  const handlePlayPause = () => {
    if (!isPlaying) {
      playerRef.current?.play();
      setIsPlaying(true);
    } else {
      playerRef.current?.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      setDuration(playerRef.current?.duration);
    }
  }, [playerRef]);

  console.log("current state of isPlaying ", isPlaying);
  return (
    <div className="w-[100%] h-[10vh] bg-[#1f2a38] my-5 p-2">
      <div className="flex items-center justify-around gap-5">
        <Image src={MuzerLogo} alt="music" className="h-10 w-10 mb-4" />

        <div className="song-desc flex items-start flex-col">
          <h2 className="text-sm">Currently Playing</h2>
          <h5 className="text-xs">Shape of You - Ed Sheeran</h5>
          <Seekbar
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            duration={duration}
            setDuration={setDuration}
            progress={progress}
            setProgress={setProgress}
            playerRef={playerRef}
          />
          <audio
            autoPlay
            ref={playerRef}
            src="https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3"
          ></audio>
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
