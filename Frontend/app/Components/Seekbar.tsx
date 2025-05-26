"use client";
import React, {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { convertSecondToMinute } from "../utils/convertSecondToMinute";

function Seekbar({
  isPlaying,
  setIsPlaying,
  duration,
  setDuration,
  progress,
  setProgress,
  playerRef,
}: {
  isPlaying: boolean;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
  playerRef: RefObject<HTMLAudioElement>;
}) {
  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Object ", e.target.value);
    setProgress(parseInt(e.target.value));
    playerRef.current.currentTime = parseInt(e.target.value);
  };

  let mins = Math.floor(convertSecondToMinute(duration).mins);
  let secs = Math.floor(convertSecondToMinute(duration).secs);
  let progMins = Math.floor(convertSecondToMinute(progress).mins);
  let progSecs = Math.floor(convertSecondToMinute(progress).secs);


  useEffect(() => {
    let intervalId: any;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setProgress((prev) => prev + 1);

        if (progress >= duration) {
            clearInterval(intervalId);
            setIsPlaying(false)
        }
      }, 1000);
    }

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [progress, isPlaying]);

  return (
    <div>
      <div className="w-[75vw] mx-auto ">
        <input
          type="range"
          min="0"
          max={duration}
          value={progress}
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
          Progress: {progMins <= 9 ? `0${progMins}` : progMins}:
          {progSecs <= 9 ? `0${progSecs}` : progSecs}/
          {mins <= 9 ? `0${mins}` : mins}:{secs <= 9 ? `0${secs}` : secs}
        </div>
      </div>
    </div>
  );
}

export default Seekbar;
