import AnonymousSignin from "@/components/AnonymousSignin";
import GithubSignin from "@/components/GithubSignin";
import GoogleSignin from "@/components/GoogleSignin";

import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export default function AuthPage() {
  return (
    <main className="boxWithShadow w-3/4 m-auto flex items-center justify-between flex-col p-2 rounded-2xl">
      <section className="mb-3">
        <h1 className={`${varela.className} text-xl text-purple-600 flex flex-row`}>
          Login{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
        </h1>
      </section>
      <div className="w-full">
        <GoogleSignin />
        <GithubSignin />
        <AnonymousSignin />
      </div>
      <div>
        <p className="text-sm text-gray-600 mt-4">Please choose one of the above methods to continue..</p>
      </div>
    </main>
  );
}
