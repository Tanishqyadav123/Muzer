"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
function StreamCard({ streamId , streamName , createdBy }: { streamId: string , streamName : string , createdBy : string }) {
  let user = true;
  const [active, setActive] = useState<boolean>(true);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(active);
    setActive((prev) => !prev);
  };

  return (
    <div className="h-[15vh] w-[80%] bg-gray-900 mx-auto my-5 p-6 flex items-center justify-between cursor-pointer">
      <Link href={`/streams/${streamId}`}>
        <div className="flex items-start gap-5 flex-col">
          <h1 className="stream-Name text-3xl">{streamName}</h1>

          <h6 className="text-sm text-gray-600">Created By : {createdBy}</h6>
        </div>
      </Link>

      {user && (
        <div className="stream-management flex items-center justify-center gap-3">
          <MdDriveFileRenameOutline />
          <RiDeleteBin7Line />
          <div className="inline-block relative">
            <input
              id={streamId}
              type="checkbox"
              onChange={handleToggle}
              className="peer hidden"
              checked={active}
            />
            <label
              className="block w-[50px] h-[20px] p-[3px] rounded-full border-2 border-white cursor-pointer transition-all duration-300 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed relative"
              htmlFor={streamId}
            ></label>
            <span
              className={` ${
                active ? "bg-blue-500" : "bg-transparent"
              } block w-[15px] h-[15px] rounded-full bg-white transition-all duration-300 absolute top-[3px] left-[3px] peer-checked:translate-x-[30px]`}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default StreamCard;
