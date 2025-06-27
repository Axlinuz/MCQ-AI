"use client";

import { useAuth } from "@/authContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const pathName = usePathname();
  const { user } = useAuth();

  return (
    <>
      <nav
        className={`bg-white/40 backdrop-blur-sm flex items-center justify-between  fixed bottom-3 left-1/2 -translate-x-1/2  mx-auto z-50 rounded-3xl p-2 ${varela.className} h-16 transition-all ease-in-out duration-300 navbar`}
      >
        <Link
          href={"/"}
          className="flex items-center justify-center w-14 hover:scale-125 hover:w-20 transition-all ease-in-out duration-300 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${
              pathName === "/" ? "border-b-2 border-purple-600" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>

        <Link
          href={""}
          className="flex items-center justify-center w-14 hover:scale-125 hover:w-20 transition-all ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${
              pathName === "" ? "border-b-2 border-purple-600" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </Link>

        <Link
          href={user ? "/dashboard" : "/auth"}
          className="flex items-center justify-center w-14 hover:scale-125 hover:w-20 transition-all ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="purple"
            className={` size-13 bg-white p-1 rounded-2xl ${
              pathName === "/dashboard" ? "border-b-2 border-purple-600" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </Link>

        <Link
          href={"/about"}
          className="flex items-center justify-center w-14 hover:scale-125 hover:w-20 transition-all ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${
              pathName === "/about" ? "border-b-2 border-purple-600" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </Link>

        <Link
          href={user ? "/user" : "/auth"}
          className="flex items-center justify-center w-14 hover:scale-125 hover:w-20 transition-all ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${
              pathName === "/user" ? "border-b-2 border-purple-600" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>

        {/* <div
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
          { user ? <span className="md:hidden h-full bg-white/60 backdrop-blur-lg rounded-2xl p-2 mr-2 text-lg flex flex-row items-center justify-center">
            {pathName === "/" ? (
              <Image
                src={"/homeIcon.png"}
                width={30}
                height={30}
                alt="Home icon"
              />
            ) : pathName === "/dashboard" ? (
              <Image
                src={"/dashboardIcon.png"}
                width={20}
                height={20}
                alt="Home icon"
              />
            ) : pathName === "/about" ? (
              <Image
                src={"/aboutIcon.png"}
                width={20}
                height={20}
                alt="Home icon"
              />
            ) : null}
            <select>
              <option onClick={() => router.push("/")}>Home</option>
              <option onClick={() => router.push("/dashboard")}>Dash</option>
              <option onClick={() => router.push("/about")}>About</option>
            </select>
            <div className="pointer-events-none flex items-center ">
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </div>
          </span> : null}

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
        </div> */}
      </nav>
    </>
  );
}
