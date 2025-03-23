"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";


export default function SignInButton() {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard")
    } catch (e) {
      console.error("Sign in error", e);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="border-white border-2 rounded-lg mb-1.5 p-1 w-full text-white flex flex-row items-center justify-center cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700"
    >
      <Image
        src="/googleIcon.png"
        width={30}
        height={30}
        className="w-auto h-auto"
        alt="Google Icon"
      />
      Continue In With Google
    </button>
    
  );
}
