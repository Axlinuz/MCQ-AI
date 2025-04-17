
export default function Notification({msg}) {
  const message = msg;
  
  return (
    <div className="fixed top-18 border-2 bg-red-600 h-16 w-3/4 rounded-lg mt-16 m-auto">
      {message}
    </div>
  );
}
