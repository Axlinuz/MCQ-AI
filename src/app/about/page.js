import { Varela_Round } from "next/font/google";
import Image from "next/image";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <main className={`md:max-w-1/4  m-auto ${varela.className}`}>
      <div className="pt-2.5 flex flex-col p-2.5 border-b-2 border-black dark:border-white">
        <h2 className="text-lg font-bold text-center">About This Website</h2>
        <p className=" text-center">
          Thanks for visiting MCQ-AI. I built this page with the purpose to help
          my fellow students prepare for their exams and studies. Just paste in
          the text, and the site will automatically generate a multiple choice
          question for you.
        </p>
      </div>

      <div className="pt-2.5 flex flex-col p-2.5 border-b-2 border-black dark:border-white">
        <h2 className="text-lg font-bold text-center">Known issues.</h2>
        <p className=" text-center">
          At the moment you may experience several flaws with the site. The
          REGENERATE button sometimes does not regenrate new questions but
          instead displays the old ones. This is a flaw with the usage of the
          engine Gemini and I deeply apologize in advance. Please do not
          hesitate to email me or contact me for feedbacks.
        </p>
      </div>

      <div className="pt-2.5 flex flex-col p-2.5 border-b-2 border-black dark:border-white">
        <h2 className="text-lg font-bold text-center">
          There&apos;s more coming!
        </h2>
        <p className=" text-center">
          This is only the first release of the site! I am still actively
          working on this. In the future, you can expect more features such as
          multiple questions!
        </p>
      </div>

      <div className="pt-2.5 flex flex-col p-2.5 border-b-2 border-black dark:border-white">
        <h2 className="text-lg font-bold text-center">Citations</h2>
        <p className=" text-center">
          The quiz making engine is powered by Google&apos;s Gemini-2.5-pro. The
          api key and service are all from a third party site,{" "}
          <a href="https://openrouter.ai/" className="text-blue-600">
            OpenRouter.
          </a>
        </p>
      </div>

      <div className="pt-2.5 flex flex-col p-2.5 border-b-2 border-black dark:border-white">
        <h1 className="text-lg font-bold text-center">Reach me out on..</h1>
        <div className="m-auto flex items-center justify-between w-1/2">
          <a href="https://t.me/lianpui">
            <Image
              src={"/telegram.svg"}
              alt="telegram icon"
              width={40}
              height={40}
            />
          </a>
          <a href="https://github.com/Axlinuz">
            <Image
              src={"/github.svg"}
              alt="Github icon"
              width={60}
              height={60}
              className="rounded-full"
            />
          </a>

          <a href="mailto:xalian2020@gmail.com">
            <Image
              src={"/email.webp"}
              alt="email icon"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
