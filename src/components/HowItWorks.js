
import Image from "next/image";


export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <h3 className="text-3xl font-semibold text-center mb-12">How It Works</h3>
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
              <strong>Step 1:</strong> Type in a paragraph, topic, or subject
              you&apos;re interested in.
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
              <strong>Step 2:</strong> Press the &quot;Create Quiz&quot; button
              and give it a second.
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
              <strong>Step 3:</strong> Your quiz is ready! Try answering the
              questions.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
