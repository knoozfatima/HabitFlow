import React, { useState, useEffect } from "react";

const MotivationQuote = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/today");
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        setQuote(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) return <div className="text-black">Loading quote...</div>;
  if (error) return <div className="text-red-400">Error: {error}</div>;

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6 flex flex-col items-center max-w-xl mx-auto animate-blink-border border-4 border-transparent bg-clip-padding relative">
      <div
        className="absolute inset-0 rounded-xl pointer-events-none animate-blink-border-gradient z-0"
        style={{
          border: "4px solid transparent",
          background:
            "linear-gradient(90deg, #60a5fa, #a78bfa, #6366f1, #60a5fa)",
          backgroundSize: "400% 400%",
          animation: "blinkBorderGradient 2s linear infinite",
        }}
      ></div>
      <div className="relative z-10">
        <p className="text-lg italic text-gray-900 text-center mb-2">
          {quote && quote[0] ? quote[0].q : "Loading quote..."}
        </p>
        <span className="text-sm text-gray-800 text-center block">
          - {quote && quote[0] ? quote[0].a : "Unknown"}
        </span>
      </div>
    </div>
  );
};

export default MotivationQuote;
