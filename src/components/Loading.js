export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white flex items-center justify-center rounded-lg w-1/4">
          <img src="/loading.svg" className="rounded-lg" />
        </div>
      </div>
    </>
  );
}
