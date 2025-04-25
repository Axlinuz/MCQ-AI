"use client";

import { useAuth } from "@/authContext";
import { useRouter } from "next/navigation";
import { Lilita_One } from "next/font/google";
import Image from "next/image";


const lilita = Lilita_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  function handleRoute() {
    router.push(user ? "/dashboard" : "/auth");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center md:max-w-3/4 m-auto">
      <h1 className={`${lilita.className} text-4xl md:text-5xl font-bold`}>
        <span className="text-red-500">MCQ-AI</span>: Instantly Transform Any
        Text into Engaging{" "}
        <span className="text-yellow-300">Multiple-Choice Quizzes </span>with
        the Power of <span className="text-blue-600">Gemini</span> for
        Learning, Teaching, and Test Preparation!🪐🚀
      </h1>
      <button
        className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        onClick={handleRoute}
      >
        Try it out!
      </button>
      <a href="/about" className="flex flex-row justify-between items-center text-blue-500 underline mt-4 text-lg">About <img src="/right-up.svg" alt="arrow to go to about page" className="dark:bg-white"/></a>
      
    </div>
  );
}
