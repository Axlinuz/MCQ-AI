"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("signed out");
      router.push("/");
    } catch (e) {
      console.error("Sign out error:", e);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="border-red-500 border-2 text-red-500 rounded-lg p-2 mt-3 w-3/4"
    >
      Sign Out
    </button>
  );
}
