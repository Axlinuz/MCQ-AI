"use client";

import { useState } from "react";

export default function Page() {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [sendStatus, setSendStatus] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSendStatus(true);
    const res = await fetch("/api/send-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender, message }),
    });
    const data = await res.json();
    setStatus(data.success ? "Feedback Sent" : "Error while sending feedback");
    setSendStatus(false);
  }

  return (
    <main className="m-auto w-full">
      <form
        className="flex flex-col items-center justify-center gap-2 w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-left w-4/5 font-bold text-2xl mb-3">
          Send us a report
        </h1>
        <input
          type="text"
          className="border-2 border-black/40 focus:border-black rounded-lg h-12 outline-none p-2 w-4/5"
          placeholder="Your name or email (required)"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <textarea
          className="h-32 border-2 border-black/40 focus:border-black outline-none rounded-lg p-2 w-4/5"
          placeholder="Write your report here.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className=" bg-purple-600 text-white p-2 rounded-lg w-2/3 flex flex-row items-center justify-center gap-1">
          {sendStatus ? "Sending.." : "Send"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 -rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
        <span className="w-2/3 text-center text-lg">
          {status === "Feedback Sent"
            ? `${status} Thank you for your report. We will review it as soon as possible.`
            : status === "Error while sending feedback."
            ? `${status} Error while sending. Please try again}`
            : null}
        </span>
      </form>
    </main>
  );
}
