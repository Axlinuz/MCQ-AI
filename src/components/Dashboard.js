"use client";

import OpenAI from "openai";
import { useAuth } from "@/authContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

export default function Dashboard() {
  const { user, loader } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loader && !user) {
      router.push("/auth");
    }
  }, [user, loader, router]);

  const [MCQData, setMCQData] = useState(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(true);

  function shuffleOptions(options) {
    return options.sort(() => Math.random() - 0.5);
  }

  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.NEXT_PUBLIC_AI_API_KEY,
    dangerouslyAllowBrowser: true,
    defaultHeaders: {},
  });

  async function fetchData(e = null) {
    if (e) e.preventDefault();

    setMCQData(null);
    setError(null);
    setLoading(true);
    setShowAnswer(false);

    try {
      console.log("Loading...");

      const completion = await openai.chat.completions.create({
        model: "google/gemini-2.0-flash-001",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Create a MCQ with 4 options and 1 correct answer. 
                do not add instruction, return only in json object
                no variable declaration or extra text
                options should be given the value "option". not "text" or anything else.
                each answer should have a boolean of correctAnswer of true or false
                only one correct answer
                remove the text "json" at the beginning of your response
                : ${userPrompt}`,
              },
            ],
          },
        ],
      });

      if (completion.choices && completion.choices.length > 0) {
        const responseData = completion.choices[0].message.content;

        const cleanResponse = responseData.replace(/```(json)?/g, "").trim();

        try {
          let responseObject = JSON.parse(cleanResponse);
          let shuffledOptions = shuffleOptions(responseObject.options);
          setMCQData({ ...responseObject, options: shuffledOptions });
          setEdit(false);
          setError(null);
        } catch (error) {
          console.error("JSON Parsing Error:", error);
          setError(
            "Credit limits reached, please wait a few minutes before trying again!"
          );
        }
      } else {
        console.error("OpenRouter API Response:", completion);
        setError(
          "Credit limits reached, please wait a few minutes before trying again!"
        );
      }

      console.log("Done!");
    } catch (e) {
      console.error("Fetch error:", e);
      setError("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <>
      <main
        className={` pt-2 ${
          edit ? "" : "absolute -left-1000"
        } ease-in transition-all m-auto`}
      >
        <form
          onSubmit={fetchData}
          className="flex flex-col items-center justify-center md:max-w-3/4 m-auto"
        >
          <textarea
            type="text"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="Enter a topic or a body of text for your questions "
            className="resize-none border-2 border-black dark:border-white rounded-lg w-full min-h-28 max-h-52 p-2.5 placeholder:text-lg"
          />
          <button
            type="submit"
            className="h-11 bg-blue-700 w-2/5 p-2.5 mt-2.5 rounded-lg font-bold text-white cursor-pointer hover:-translate-y-1 ease-in transition-all"
          >
            Create a quiz
          </button>
        </form>

        {error && <h1>{error}</h1>}
      </main>
      {MCQData && (
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
              className="h-11 bg-green-400 text-black p-2.5 mt-2.5 rounded-lg font-bold cursor-pointer hover:-translate-y-1 ease-in transition-all"
              onClick={() => {
                setShowAnswer(true);
              }}
            >
              Show Answer
            </button>
          </div>
        </main>
      )}
      {error ? (error === null ? null : alert(error)) : null}
    </>
  );
}
