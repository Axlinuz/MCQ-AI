export default function About() {
  return (
    <main className="md:max-w-2/4 m-auto">
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
        <h2 className="text-lg font-bold text-center">There's more coming!</h2>
        <p className=" text-center">
          This is only the first release of the site! I am still actively
          working on this. In the future, you can expect more features such as
          multiple questions!
        </p>
      </div>

      <div className="pt-2.5 flex flex-col p-2.5 border-b-2 border-black dark:border-white">
        <h2 className="text-lg font-bold text-center">Citations</h2>
        <p className=" text-center">
          The quiz making engine is powered by Google's Gemini-2.5-pro. The api
          key and service are all from a third party site called{" "}
          <a href="https://openrouter.ai/" className="text-blue-600">
            OpenRouter.
          </a>
        </p>
      </div>
    </main>
  );
}
