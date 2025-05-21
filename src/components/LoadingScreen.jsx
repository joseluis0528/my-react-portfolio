
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold"></div>
      Hello World <span className="animate-blink"> | </span>
    </div>
  );
}
export default LoadingScreen;