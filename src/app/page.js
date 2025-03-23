"use client";

import { useAuth } from "@/authContext";
import { useRouter } from "next/navigation";


export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  function handleRoute() {
    if (user) {
      router.push("/dashboard");
    }else
    {
      router.push("/auth");
    }
  }
  return (
    <div>
      <h1>Welcome to MCQ-AI, a tool to help you build quiz powered by AI.</h1>
      <button className="cursor-pointer" onClick={() => handleRoute()}>
        Try it out!
      </button>
    </div>
  );
}
