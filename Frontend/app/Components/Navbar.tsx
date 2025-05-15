import Image from "next/image";
import React from "react";
import MuzerLogo from "@/public/Muze_logo.jpeg";
import Link from "next/link";
function Navbar() {
  return (
    <div className="w-full h-12  flex items-center justify-between p-2 ">
      <div className="logo flex items-center justify-start h-full gap-1 ">
        <Image src={MuzerLogo} alt="Logo" className="h-10 w-10" />
        <h2>Muzer</h2>
      </div>

      <ul className="flex  items-center justify-around gap-3.5 px-3">
        <Link className="text-gray-300 hover:text-gray-200" href={"/Premium"}>
          Premium
        </Link>
        <Link className="text-gray-300 hover:text-gray-200" href={"/Support"}>
          Support
        </Link>
        <Link className="text-gray-300 hover:text-gray-200" href={"/Download"}>
          Download
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
