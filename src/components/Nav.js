"use client";

import { useAuth } from "@/authContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const { user, loader } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  async function handleSignout() {
    try {
      await signOut(auth);
      router.push("/");
      setIsOpen(false);
    } catch (e) {
      console.log("Sign out error,", e);
    }
  }

  return (
    <nav
      className={`dark:bg-blue-950 flex items-center justify-between size-full h-16 fixed z-50 top-0 right-0 left-0 bg-blue-950 p-2 ${varela.className}`}
    >
      <div
        className="bg-white h-full w-auto flex items-center justify-center rounded-full p-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src={"/logo.svg"} width={70} height={40} alt="Logo image" />
      </div>

      <ul className="hidden md:flex justify-center items-center size-full ">
        <Link
          href={"/"}
          className="hover:-translate-y-1 ease-in transition-all border-b-2 border-b-white text-white"
        >
          Home
        </Link>
        <Link
          href={"/dashboard"}
          className="hover:-translate-y-1 ease-in transition-all border-b-2 border-b-white ml-4.5 text-white"
        >
          Dashboard
        </Link>
        <Link
          href={"/about"}
          className="hover:-translate-y-1 ease-in transition-all border-b-2 border-b-white ml-4.5 text-white"
        >
          About
        </Link>
      </ul>
      <div className="flex flex-row justify-between items-center p-1.5 h-full w-auto">
        {user && (
          <button
            className="text-2xl mr-2.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX color="white" /> : <FiMenu color="white" />}
          </button>
        )}

        {/* background blur */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20"
            onClick={() => setIsOpen(false)} // Close the menu when clicking the background
          ></div>
        )}
        {/* background blur */}

        {/* expandable menu */}
        <div
          className={`fixed z-30 top-0 w-3/4 max-w-72 bg-blue-950 dark:bg-blue-950 h-dvh transition-all ease-in p-2.5 flex flex-col text-white ${
            isOpen ? "right-0" : "-right-100"
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
        {!loader ? (
          user ? (
            <Image
              src={user?.photoURL || "/pfp.png"}
              alt="User profile"
              className="cursor-pointer rounded-full h-full w-auto"
              width={20}
              height={20}
            />
          ) : (
            <button
              onClick={() => router.push("/auth")}
              className="rounded-lg border-white dark:border-white border-2 p-1 text-white dark:text-white cursor-pointer text-nowrap"
            >
              Sign in / Sign up
            </button>
          )
        ) : (
          <div className="h-auto bg-white rounded-full">
            <Image
              src={"/loading.svg"}
              width={40}
              height={40}
              alt="loading image"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
