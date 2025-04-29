"use client";

import React from "react";
import { useAuth } from "@/authContext";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Expandable({ state: isOpen, setIsOpen }) {
  const { user } = useAuth();
  return (
    <div
      className={`fixed left-0 right-0 bg-white/40 h-3/4 rounded-t-4xl backdrop-blur-lg z-30 transition-all ease-in-out duration-300 p-2.5 flex flex-col text-white ${
        isOpen ? "bottom-0" : "-bottom-full"
      }`}
    >
      {user && (
        <div className="flex items-center justify-end mb-6">
          <button
            className="text-4xl cursor-pointer flex"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX color="white" /> : <FiMenu />}
          </button>
        </div>
      )}
      <div className="flex w-auto h-auto p-1.5 border-b-2 mb-2.5">
        <Image
          src={user?.photoURL || "/pfp.png"} // Fallback to "/pfp.png" if photoURL is null/undefined
          alt="User profile"
          className="cursor-pointer rounded-full h-11 w-11"
          width={20}
          height={20}
        />
        <div className="flex flex-col justify-center ml-2.5 w-full">
          <h1 className="text-white">Hi, {user?.displayName} 👋</h1>
          <p className="text-xs text-white">{user?.email}</p>
        </div>
      </div>
      <div className="h-full flex justify-between flex-col">
        <ul className="flex flex-col" onClick={() => setIsOpen(false)}>
          <Link
            className="hover:text-gray-400 ease-in transition-all mt-2.5 text-white"
            href={"/auth"}
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-400 ease-in transition-all mt-2.5  text-white"
            href={"/dashboard"}
          >
            Dashboard
          </Link>
          <Link
            className="hover:text-gray-400 ease-in transition-all mt-2.5 text-white"
            href={"/about"}
          >
            About
          </Link>
        </ul>
        <button
          onClick={() => handleSignout()}
          className="border-1 border-red-600 p-1.5 rounded-lg text-red-500 w-full cursor-pointer mb-8"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
