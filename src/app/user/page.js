"use client";
import React from "react";
import { useAuth } from "@/authContext";
import SignOutButton from "@/components/SignOutButton";
import Image from "next/image";

export default function UserPage() {
  const { user } = useAuth();
  console.log(user);
  return (
    <main className="flex items-center m-auto justify-between flex-col">
      <section className="flex items-center justify-center flex-col">
        <Image
          src={user?.photoURL || "/pfp.png"}
          alt="user profile picture"
          height={100}
          width={100}
          className="rounded-full"
        />
        <span>
          <h1 className="text-2xl">Hey there, {user?.displayName}!</h1>
        </span>
      </section>

      <SignOutButton />
    </main>
  );
}
