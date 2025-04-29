import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      <Image src="/loading.svg" width={100} height={100} alt="loading icon" />
    </div>
  );
}
