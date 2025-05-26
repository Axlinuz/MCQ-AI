"use client";

import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginEmailAndPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      if (email !== "" && password !== "") {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push("/dashboard");
      } else {
        console.error("error logging in with email");
      }
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <form className="flex flex-col items-center" onSubmit={handleLogin}>
      <h1 className="text-2xl">SIGN UP</h1>
      <input
        className="border-black border-1 rounded-lg p-1 w-full dark:border-white mt-1.5"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border-black border-1 rounded-lg p-1 w-full dark:border-white mt-1.5"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="border-1 bg-blue-500 rounded-lg p-1 mt-1.5 w-1/4 text-white"
      >
        Sign up
      </button>
    </form>
  );
}
