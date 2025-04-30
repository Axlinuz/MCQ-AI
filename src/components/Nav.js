"use client";

import { useAuth } from "@/authContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

import { Varela_Round } from "next/font/google";
import Loader from "./Loader";
import Expandable from "./Expandable";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const pathName = usePathname();
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
    <>
      <nav
        className={`bg-white/40 backdrop-blur-lg flex items-center justify-between fixed top-3 left-0 right-0 mx-auto w-[90%] max-w-4xl z-50 rounded-3xl p-2 ${varela.className} h-16`}
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
        <div className="flex flex-row justify-between items-center p-1.5 h-full w-auto">
          {user && (
            <button
              className="text-2xl mr-2.5 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX color="white" /> : <FiMenu color="white" />}
            </button>
          )}

          {!loader ? (
            user ? (
              <Image
                src={user?.photoURL || "/pfp.png"}
                alt="User profile"
                className="cursor-pointer rounded-full h-full w-auto mr-2"
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
            <Image
              src="/loading.svg"
              width={40}
              height={40}
              alt="loading icon"
            />
          )}
        </div>
      </nav>
      <Expandable state={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
