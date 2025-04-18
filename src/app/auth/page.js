"use client";

import { useAuth } from "@/authContext";
import LoginEmailAndPassword from "@/components/LoginEmailAndPassword";
import SignInButton from "@/components/SignInButton";
import SignUpEmailAndPassword from "@/components/SignUpEmailAndPassword";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthPage() {
  const route = useRouter();
  const { user } = useAuth();

  const [newUser, setNewUser] = useState(false);
  useEffect(() => {
    if (user) {
      route.push("/dashboard");
    } else {
      console.log("user not found, redicrecting to auth page.");
    }
  }, []);
  return (
    <main className="border-2 border-black text-white bg-blue-950 p-4 rounded-lg w-3/4 m-auto max-w-md mt-4 min-w-72 relative top-1/7">
      {newUser ? <SignUpEmailAndPassword /> : <LoginEmailAndPassword />}
      {newUser ? (
        <p
          className="text-center text-blue-600 cursor-pointer mt-4"
          onClick={() => setNewUser(false)}
        >
          Already have an account? Log in!
        </p>
      ) : (
        <p
          className="text-center text-blue-600 cursor-pointer mt-4 mb-7 border-b-2 border-white"
          onClick={() => setNewUser(true)}
        >
          New here? Create a new account!
        </p>
      )}
      <SignInButton />
    </main>
  );
}
