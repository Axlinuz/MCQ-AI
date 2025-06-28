

import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <header className="w-full py-4 px-8 flex justify-between items-center border-b shadow-sm">
        <h1 className="text-2xl font-bold text-purple-600">MCQ-AI</h1>
        <nav>
          <Link href="/dashboard" className="text-purple-600 hover:underline">
            Try It Now
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-4 py-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Instantly Turn Any Text into a Quiz
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-8">
          Paste your notes, paragraphs, or topics and watch MCQ-AI generate
          accurate, smart multiple-choice questions.
        </p>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
        >
          Create a Quiz Now
        </Link>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h3 className="text-3xl font-semibold text-center mb-12">
          How It Works
        </h3>
        <section className="flex items-center justify-center">
          <div className="space-y-10 max-w-4xl mx-auto">
          <div className="flex gap-6 items-center">
            <Image
              src="/typing.png"
              width={120}
              height={120}
              alt="Typing"
              className="rounded-xl shrink-0"
            />
            <p className="text-gray-700">
              <strong>Step 1:</strong> Type in a paragraph, topic, or subject you're interested in.
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <Image
              src="/pressingButton.png"
              width={120}
              height={120}
              alt="Create Button"
              className="rounded-xl shrink-0"
            />
            <p className="text-gray-700">
              <strong>Step 2:</strong> Press the "Create Quiz" button and give it a second.
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <Image
              src="/guessing.png"
              width={120}
              height={120}
              alt="Guessing"
              className="rounded-xl shrink-0"
            />
            <p className="text-gray-700">
              <strong>Step 3:</strong> Your quiz is ready! Try answering the questions.
            </p>
          </div>
        </div>
        </section>
      </section>

      
    </div>
  );
}
