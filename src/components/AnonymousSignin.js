"use client";
import { signInAnonymously } from "firebase/auth";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AnonymousSignin() {
  const router = useRouter();
  const signIn = async () => {
    try {
      await signInAnonymously(auth);
      router.push("/dashboard");
    } catch (e) {
      console.error("Sign in error", e);
    }
  };

  return (
    <button
      onClick={() => signIn()}
      className="border-black border-2 rounded-lg mb-1.5 p-1 w-full text-black flex flex-row items-center cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700"
    >
      <Image
        src="/pfp.jpg"
        width={30}
        height={30}
        className="w-auto h-auto rounded-full"
        alt="Google Icon"
      />
      Sign in Anonymously
    </button>
  );
}
