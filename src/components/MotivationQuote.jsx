import React from "react";

const MotivationQuote = () => (
  <div className="bg-white rounded-xl shadow p-6 mb-6 flex flex-col items-center max-w-xl mx-auto animate-blink-border border-4 border-transparent bg-clip-padding relative">
    <div className="absolute inset-0 rounded-xl pointer-events-none animate-blink-border-gradient z-0" style={{border: '4px solid transparent', background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #6366f1, #60a5fa)', backgroundSize: '400% 400%', animation: 'blinkBorderGradient 2s linear infinite'}}></div>
    <div className="relative z-10">
      <p className="text-lg italic text-gray-900 text-center mb-2">
        "The secret of getting ahead is getting started."
      </p>
      <span className="text-sm text-gray-800 text-center block">- Mark Twain</span>
    </div>
  </div>
);

export default MotivationQuote;

// Add the following to your index.css:
// @keyframes blinkBorderGradient {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
// .animate-blink-border-gradient { animation: blinkBorderGradient 2s linear infinite; } 