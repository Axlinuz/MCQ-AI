"use client";

import React from "react";
import { useAuth } from "@/authContext";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Expandable({ state: isOpen, setIsOpen }) {
  const { user } = useAuth();
  const pathName = usePathname();
  return (
    <>
    <div className={`inset-0 z-50 backdrop-blur-lg transition-all ease-in-out ${
      isOpen ? "fixed" : "hidden"
    }`} onClick={()=> setIsOpen(false)}>

    </div>
    <div
      className={`fixed left-0 right-0 z-50 bg-white/40 h-3/4 rounded-t-4xl backdrop-blur-lg  transition-all ease-in duration-300 p-2.5 flex flex-col text-white ${
        isOpen ? "bottom-0" : "-bottom-full"
      }`}
    >
      <div className="flex items-center justify-end fixed right-2 hover:rotate-180 transition-all ease-in-out duration-300">
        <button
          className="text-4xl cursor-pointer flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX color="white" /> : <FiMenu />}
        </button>
      </div>
      <ul
        className="flex justify-center items-center size-full h-auto "
        onClick={() => setIsOpen(false)}
      >
        <Link
          href={"/"}
          className={`hover:-translate-y-1 ease-in transition-all border-b-2 border-b-white ${
            pathName === "/"
              ? "bg-white/40 rounded-lg p-2 text-black"
              : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href={"/dashboard"}
          className={`hover:-translate-y-1 ease-in transition-all border-b-2 ml-3 border-b-white ${
            pathName === "/dashboard"
              ? "bg-white/40 rounded-lg p-2 text-black"
              : "text-white"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href={"/about"}
          className={`hover:-translate-y-1 ease-in transition-all border-b-2 ml-3 border-b-white ${
            pathName === "/about"
              ? "bg-white/40 rounded-lg p-2 text-black"
              : "text-white"
          }`}
        >
          About
        </Link>
      </ul>
      <div className="flex flex-col w-auto h-auto p-1.5 border-b-2 mb-2.5">
        <Image
          src={user?.photoURL || "/pfp.png"} // Fallback to "/pfp.png" if photoURL is null/undefined
          alt="User profile"
          className="cursor-pointer rounded-full h-11 w-11"
          width={40}
          height={20}
        />
        <div className="flex flex-col justify-center ml-2.5 w-full">
          <h1 className="text-white">Hi, {user?.displayName} 👋</h1>
          <p className="text-xs text-white">{user?.email}</p>
        </div>
      </div>
      <div className="h-full flex justify-between flex-col">
        <button
          onClick={() => handleSignout()}
          className="border-1 border-red-600 p-1.5 rounded-lg text-red-500 cursor-pointer mb-8 w-1/4 hover:bg-red-600 hover:text-white transition-all ease-in- "
        >
          Sign Out
        </button>
      </div>
    </div>
    </>
  );
}
