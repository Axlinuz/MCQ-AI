import Image from "next/image";

export default function ErrorMessage({ msg }) {
  if (!msg) return null; // don't show anything if no message

  return (
    <div className="text-red-500 font-bold border-2 border-red-500 flex items-center fixed top-24 left-0 right-0 mx-auto w-[90%] max-w-4xl z-50 rounded-2xl p-4shadow-lg">
      <Image
        src="https://cdn-icons-png.flaticon.com/128/14090/14090276.png"
        alt="error icon"
        height={30}
        width={30}
        className="mr-4"
      />
      <h1 className="text-lg">{msg}</h1>
    </div>
  );
}
