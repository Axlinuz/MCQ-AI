import HowItWorks from "@/components/HowItWorks";
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

      <HowItWorks />
    </div>
  );
}
