"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("signed out")
      router.push("/")
    } catch (e) {
      console.error("Sign out error:", e);
    }
  };
  
  return (
    <button
      onClick={handleSignOut}
      className="border-black border-2 rounded-3xl p-1 cursor-pointer"
    >
      Sign Out
    </button>
  );
}
