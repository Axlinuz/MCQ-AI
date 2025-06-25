"use client";

import { useAuth } from "@/authContext";
import LoginEmailAndPassword from "@/components/LoginEmailAndPassword";
import SignInButton from "@/components/SignInButton";
import SignUpEmailAndPassword from "@/components/SignUpEmailAndPassword";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

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
  }, [user, route]);
  return (
    <main
      className={`bg-white/30 backdrop-blur-lg p-4 rounded-3xl w-3/4 m-auto max-w-md mt-4 min-w-72 relative top-1/7 ${varela.className} drop-shadow-2xl`}
    >
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
