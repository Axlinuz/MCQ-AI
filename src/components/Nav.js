"use client";

import { useAuth } from "@/authContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  async function handleSignout(){
    try{
      await signOut(auth);
      router.push("/")
      setIsOpen(false);
    }catch(e){
      console.log("Sign out error,", e)
    }
  }

  return (
    <nav className="dark:bg-blue-950 flex items-center justify-between size-full h-16 fixed z-50 top-0 right-0 left-0 bg-blue-950 p-2">
      <h1
        className="text-white dark:text-white cursor-pointer"
        onClick={() => router.push("/")}
      >
        MCQ-AI
      </h1>
      <div className="md:hidden">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      </div>
      <div className="flex flex-row justify-between items-center p-1.5 h-full w-auto">
        { user && <button
          className="text-2xl mr-2.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>}
        <div
          className={`fixed z-30 top-16 right-0 w-2/4 max-w-72 bg-blue-950 border-t-2  h-dvh ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="w-full border-red border-2 h-auto">
            <img src={user?.photoURL || "/pfp.png"} className="h-auto w-auto" />
          </div>
          <ul className="flex flex-col">
            <Link href={"/auth"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
          </ul>
          <button onClick={()=> handleSignout()} className="border-1 border-red-600 p-1.5 rounded-lg text-red-500 w-auto cursor-pointer">Sign Out</button>
        </div>
        {user ? (
          <Image
            src={user?.photoURL || "/pfp.png"} // Fallback to "/pfp.png" if photoURL is null/undefined
            alt="User profile"
            className="cursor-pointer rounded-full h-full w-auto"
            width={20}
            height={20}
          />
        ) : (
          <button
            onClick={() => router.push("/auth")}
            className="rounded-lg border-white dark:border-white border-2 p-1 text-white dark:text-white cursor-pointer "
          >
            Sign in / Sign up
          </button>
        )}
      </div>
    </nav>
  );
}
