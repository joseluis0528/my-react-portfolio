import { useEffect, useState } from "react"; //4.2k (gzipped: 1.8k)

function LoadingScreen() {

  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
    setText(fullText.substring(0, index));
    index++;

    if (index > fullText.length) {
      clearInterval(interval);
    }
  }, 100);

  return () => clearInterval(interval);
})

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold"></div>
      { text } <span className="animate-blink"> | </span>
    </div>
  );
}
export default LoadingScreen;