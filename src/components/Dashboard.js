"use client";

import { useAuth } from "@/authContext";

import Loader from "./Loader";
import { useEffect, useState } from "react";
import { Varela_Round, Plus_Jakarta_Sans } from "next/font/google";
import HowItWorks from "./HowItWorks";
import { useRouter } from "next/navigation";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

const Plus_Jakarta_Sans_font = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Dashboard() {
  const [MCQData, setMCQData] = useState(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(true);
  const { user, load } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (load) {
      setLoading(true);
      return; // Exit the effect early
    }
    if (user) {
      setLoading(false);
    } else {
      router.push("/auth");
    }
  }, [user, load, router]);
  function shuffleOptions(options) {
    return options.sort(() => Math.random() - 0.5);
  }

  async function fetchData(e = null) {
    if (e) e.preventDefault();
    if (userPrompt === "") {
      alert("Prompt is empty");
      setLoading(false);
      return;
    }

    try {
      setMCQData(null);
      setError(null);
      setLoading(true);
      setShowAnswer(false);

      const response = await fetch("/api/generate-mcq", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userPrompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError("Unexpected Error☹️");
      } else {
        const shuffledOptions = shuffleOptions(data.options);
        setMCQData({ ...data, options: shuffledOptions });
        setEdit(false);
        setError(null);
      }
    } catch (e) {
      console.log("something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* The Input Form */}
      <main
        className={` pt-2 mt-6 w-[90%] shadow-lg p-3 rounded-2xl bg-white/60 backdrop-blur-lg flex items-center justify-between ${
          edit ? "" : "absolute -left-1000"
        } ease-in transition-all m-auto duration-300`}
      >
        <form
          onSubmit={fetchData}
          className="flex flex-col items-center justify-center md:max-w-3/4 m-auto"
        >
          <div className="border-2 border-black/40 rounded-lg w-full  max-h-52 p-2.5 placeholder:text-lg flex flex-row items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="purple"
              className={` size-8 bg-white p-1 rounded-2xl `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <input
              type="text"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="Type your question here..."
              className="focus:outline-none w-full  max-h-52 p-2.5 placeholder:text-lg truncate"
            />
          </div>

          <button
            type="submit"
            className="h-11 bg-purple-600 w-auto p-2.5 mt-2.5 rounded-lg font-bold text-white cursor-pointer hover:-translate-y-1 ease-in transition-all disabled:bg-purple-600"
            disabled={userPrompt === "" ? true : false}
          >
            Create a quiz
          </button>
        </form>
      </main>

      <section
        className={`flex flex-col items-center justify-between p-2 shadow-lg bg-white/60  backdrop-blur-lg rounded-lg ${
          MCQData && !edit ? "" : "hidden"
        }`}
      >
        <section className="mt-16">
          <h1 className={`${varela.className} text-2xl`}>
            {MCQData?.question}
          </h1>
        </section>

        <section className="grid md:grid-cols-2 gap-2 p-2 w-full md:w-2/3 rounded-lg">
          {MCQData?.options.map((choice, index) => (
            <div
              key={index}
              className={`p-2 border-2 mt-2 rounded-lg shadown-lg w-full  
                ${Plus_Jakarta_Sans_font.className}
                ${
                  showAnswer && choice.correctAnswer ? " border-green-400" : ""
                } ${
                !choice.correctAnswer && showAnswer ? "border-red-600" : ""
              }`}
              onClick={() => setShowAnswer(true)}
            >
              <label
                className={`${
                  choice.correctAnswer && showAnswer
                    ? "text-green-400 font-bold"
                    : ""
                }`}
              >
                {index + 1}.{" "}
              </label>
              <span
                className={`${
                  choice.correctAnswer && showAnswer
                    ? "text-green-400 font-bold"
                    : ""
                }`}
              >
                {choice.option}
              </span>
            </div>
          ))}
        </section>
        <section className="flex flex-row justify-between items-center w-full md:w-2/3 p-2 rounded-lg">
          <div className="flex flex-row items-center justify-between gap-4 rounded-lg">
            <button onClick={() => fetchData()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>

            <button onClick={() => setEdit(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={() => setShowAnswer(true)}
            className="w-auto bg-white text-purple-600 border-2 border-purple-600 p-2 rounded-lg"
          >
            Show Answer
          </button>
        </section>
      </section>
      {/* {MCQData && (
        <main
          className={`border-2 border-black dark:border-white rounded-lg p-2 pt-6 md:max-w-3/4 m-auto mt-6 ${
            edit ? " hidden" : " block"
          }`}
        >
          <div className="mb-10 p-2.5">
            {MCQData && (
              <h1 className="font-bold text-xl">{MCQData.question}</h1>
            )}
          </div>

          <div className={`${edit ? "hidden" : "block"}`}>
            {MCQData &&
              MCQData.options.map((choice, index) => (
                <li
                  key={index}
                  className={`${
                    showAnswer && choice.correctAnswer
                      ? "bg-green-300"
                      : "bg-gray-200 dark:bg-gray-500"
                  } rounded-lg p-2 mt-2.5 mb-2.5 list-none text-black dark:text-black  flex flex-row`}
                >
                  <label>
                    {index + 1}.{" "}
                    <span className="text-lg">{choice.option}</span>
                  </label>
                  <span
                    className={`${
                      showAnswer && choice.correctAnswer ? "block" : "hidden"
                    }`}
                  >
                    ✔️
                  </span>
                </li>
              ))}
          </div>

          <div className="border-t-2 dark:border-white mt-2.5 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center justify-center h-full">
              <button
                className="h-11 bg-blue-700 p-2.5 mt-2.5 rounded-lg font-bold text-white cursor-pointer hover:-translate-y-1 ease-in transition-all"
                onClick={() => fetchData()}
              >
                Regenerate
              </button>
              <button
                className="flex items-center p-2.5 h-11 mt-2.5 ml-0.5 hover:bg-gray-200 hover:-translate-y-1 ease-in transition-all rounded-lg"
                onClick={() => setEdit(!edit)}
              >
                <FaEdit className="text-black dark:text-white text-3xl" />
              </button>
            </div>

            <button
              className={`h-11 bg-green-400 text-black p-2.5 mt-2.5 rounded-lg font-bold cursor-pointer hover:-translate-y-1 ease-in transition-all`}
              onClick={() => {
                setShowAnswer(true);
              }}
            >
              Show Answer
            </button>
          </div>
        </main>
      )} */}
      {error ? (error === null ? null : alert(error)) : null}
      {loading && <Loader />}
      <HowItWorks />
    </>
  );
}
