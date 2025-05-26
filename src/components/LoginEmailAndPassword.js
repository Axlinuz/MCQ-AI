"use client";

import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function LoginEmailAndPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setprocessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      if (email !== "" && password !== "") {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/dashboard");
      } else {
        console.error("Please enter a valid email and password");
      }
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        alert("❌ Invalid email format");
      } else if (error.code === "auth/user-not-found") {
        alert("❌ No user found with that email");
      } else if (error.code === "auth/wrong-password") {
        alert("❌ Wrong password");
      } else if (error.code === "auth/invalid-credential") {
        setErrorMessage("Oops, you dont exist")
      } else {
        alert("⚠️ Error: " + error.message);
      }
    }
  }
  return (
    <>
      <form className="flex flex-col items-center" onSubmit={handleLogin}>
        <h1 className="text-2xl">LOGIN</h1>
        <input
          className="border-white border-1 rounded-lg p-1 w-full dark:border-white mt-1.5"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-white border-1 rounded-lg p-1 w-full dark:border-white mt-1.5"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="border-1 bg-blue-500 rounded-lg p-1 mt-1.5 w-1/4 text-white"
          onClick={() => setprocessing(true)}
        >
          Login
        </button>
      </form>
      {errorMessage && <ErrorMessage msg={errorMessage}/>}
    </>
  );
}
