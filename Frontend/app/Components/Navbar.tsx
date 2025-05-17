"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MuzerLogo from "@/public/Muze_logo.jpeg";
import Link from "next/link";
import { useAuth } from "../Context/AuthContext";
import Button from "./Button";
import toast from "react-hot-toast";

function Navbar() {

  const {isAuthenticated , logout} = useAuth();
  const [isLoggedIn , setIsLoggedIn ] = useState(false);
  useEffect(() =>{
     const token = localStorage.getItem("isAuthenticated")
     token && setIsLoggedIn(true)
  } , [])

  const handleLogout = () =>{
       logout();
       toast.success("Logout SuccessFully")
  }

  
  return (
    <div className="w-full h-12  flex items-center justify-between p-2 ">
      <div className="logo flex items-center justify-start h-full gap-1 ">
        <Image src={MuzerLogo} alt="Logo" className="h-10 w-10" />
        <h2>Muzer</h2>
      </div>

     { 
     (isLoggedIn || isAuthenticated) ? <ul className="flex  items-center justify-around gap-3.5 px-3">
        <Link className="text-gray-300 text-sm hover:text-gray-200" href={"/"}>
          Home
        </Link>
        <Link className="text-gray-300 text-sm hover:text-gray-200" href={"/Explore"}>
          Explore
        </Link>
        <Link className="text-gray-300 text-sm hover:text-gray-200" href={"/Library"}>
          Library
        </Link>
        <Link className="text-gray-300 text-sm hover:text-gray-200" href={"/pricing"}>
          pricing
        </Link>
        <button className="text-gray-300 text-sm hover:text-gray-200 cursor-pointer" onClick={handleLogout}>
          Logout
        </button>
      </ul>  : 
      <ul className="flex  items-center justify-around gap-3.5 px-3">
        <Link className="text-gray-300 text-sm hover:text-gray-200" href={"/Premium"}>
          Premium
        </Link>
        <Link className="text-gray-300 text-sm hover:text-gray-200" href={"/Support"}>
          Support
        </Link>
        <Link className="text-gray-300 text-sm hover:text-gray-200" href={"/Download"}>
          Download
        </Link>
      </ul> 
      }
    </div>
  );
}

export default Navbar;
