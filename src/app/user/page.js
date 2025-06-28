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
      <section className="flex flex-col items-center justify-between shadow-lg bg-white/60 backdrop-blur-lg w-3/4 rounded-2xl p-3">
        <section className="flex flex-col items-center justify-center">
          <Image
            src={user?.photoURL || "/pfp.jpg"}
            alt="user profile picture"
            height={100}
            width={100}
            className="rounded-full"
          />
          <span>
            <h1 className="text-2xl">
              Hey there,{" "}
              {user?.displayName === null && user.isAnonymous
                ? "Visitor"
                : user?.displayName}
              !
            </h1>
          </span>
        </section>

        <section className="w-full mt-4">
          <div className="flex justify-between border-b py-2">
            <span className="font-semibold">User Name:</span>
            <span>{user?.displayName === null && user.isAnonymous
                ? "Anonymous"
                : user?.displayName}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span className="font-semibold">Uid:</span>
            <span className="truncate ml-4">{user?.uid || "Not set"}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span className="font-semibold mr-2">Email:</span>
            <span className="truncate">{user?.email || "Not set"}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span className="font-semibold">Phone Number:</span>
            <span>{user?.phoneNumber || "Not set"}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span className="font-semibold">Authentication :</span>
            <span>{user?.providerId || "Not set"}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-semibold">Quiz generated: </span>
            <span>{user?.phoneNumber || "Not set"}</span>
          </div>
        </section>
      </section>
      <SignOutButton />
    </main>
  );
}
