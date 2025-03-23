"use client";
import { useAuth } from "@/authContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardComponent() {
  const { user } = useAuth();
  const router = useRouter();
  async function handleSignout(){
    try{
        signOut(auth);
        router.push("/")
    }catch(e){
        console.error(e)
    }
  }

  useEffect(() => {
    if (user) {
      console.log("User is logged in, displaying main content");
    } else {
      router.push("/");
    }
  }, []);
  return (
    <>
      <p>Welcome to the dashboard</p>
      <button onClick={()=> handleSignout()}>signout</button>
    </>
  );
}
