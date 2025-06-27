"use client";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authContext";

export default function GithubSignin() {
  const router = useRouter();
  const provider = new GithubAuthProvider();
  const signInWithGithub = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (e) {
      console.error("Sign in error", e);
    }
  };
  const {user} = useAuth();
  console.log(user)

  return (
    <button
      onClick={signInWithGithub}
      className="border-black border-2 rounded-lg mb-1.5 p-1 w-full text-black flex flex-row items-center cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700"
    >
      <Image
        src="/github.png"
        width={30}
        height={30}
        className="w-auto h-auto"
        alt="Google Icon"
      />
      Sign in with Github
    </button>
  );
}
