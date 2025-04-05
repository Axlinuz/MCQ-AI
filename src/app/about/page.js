export default function About() {
  return (
    <main>
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
        <h2 className="text-lg font-bold text-center">There's more coming!</h2>
        <p className=" text-center">
          This is only the first release of the site! I am still actively
          working on this. As for now, you may expereince some bugs and some
          difficulties usint it. In the future, yuo can expect more features
          such as multiple questions!
        </p>
      </div>

      <div className="pt-2.5 flex flex-col p-2.5 border-b-2 border-black dark:border-white">
        <h2 className="text-lg font-bold text-center">Citations</h2>
        <p className=" text-center">
        The quiz making engine is powered by Google's Gemini-2.5-pro. The api key and service are all 
        from a third party site called <a href="https://openrouter.ai/" className="text-blue-600">OpenRouter.</a>
        </p>
      </div>
    </main>
  );
}
