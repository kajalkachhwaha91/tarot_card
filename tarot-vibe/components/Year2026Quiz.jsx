"use client";

import { useState } from "react";

export default function Year2026Quiz({ close }) {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    focus: "",
    vibe: "",
    desire: "",
  });

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  // Final Message Logic
  const getResultMessage = () => {
    if (answers.focus === "career") {
      return "🚀 2026 will bring career growth, new opportunities, and success energy!";
    }
    if (answers.focus === "love") {
      return "💖 2026 will open your heart to deeper love, healing, and meaningful connection.";
    }
    if (answers.focus === "health") {
      return "🌿 2026 will be your year of peace, balance, and self-care transformation.";
    }
    return "✨ 2026 will surprise you with beautiful new beginnings.";
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white text-black p-8 rounded-2xl w-[90%] max-w-lg text-center">

        {/* Step Questions */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              What is your main focus for 2026?
            </h2>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleAnswer("focus", "love")}
                className="py-2 rounded-lg bg-pink-200 hover:bg-pink-300"
              >
                Love 💖
              </button>

              <button
                onClick={() => handleAnswer("focus", "career")}
                className="py-2 rounded-lg bg-purple-200 hover:bg-purple-300"
              >
                Career 🚀
              </button>

              <button
                onClick={() => handleAnswer("focus", "health")}
                className="py-2 rounded-lg bg-green-200 hover:bg-green-300"
              >
                Health 🌿
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              How is your current vibe?
            </h2>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleAnswer("vibe", "struggling")}
                className="py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Feeling Stuck 😕
              </button>

              <button
                onClick={() => handleAnswer("vibe", "growing")}
                className="py-2 rounded-lg bg-blue-200 hover:bg-blue-300"
              >
                Growing Slowly 🌱
              </button>

              <button
                onClick={() => handleAnswer("vibe", "excited")}
                className="py-2 rounded-lg bg-yellow-200 hover:bg-yellow-300"
              >
                Excited & Ready ✨
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              What do you want most in 2026?
            </h2>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleAnswer("desire", "peace")}
                className="py-2 rounded-lg bg-teal-200 hover:bg-teal-300"
              >
                Peace 🕊️
              </button>

              <button
                onClick={() => handleAnswer("desire", "success")}
                className="py-2 rounded-lg bg-orange-200 hover:bg-orange-300"
              >
                Success 🏆
              </button>

              <button
                onClick={() => handleAnswer("desire", "love")}
                className="py-2 rounded-lg bg-red-200 hover:bg-red-300"
              >
                Love 💖
              </button>
            </div>
          </>
        )}

        {/* Step 4 Result */}
        {step === 4 && (
          <>
            <h2 className="text-3xl font-bold mb-4">🔮 Your 2026 Message</h2>
            <p className="text-lg text-gray-700 mb-6">
              {getResultMessage()}
            </p>

            <button
              onClick={close}
              className="px-6 py-2 bg-black text-white rounded-lg"
            >
              Close ✨
            </button>
          </>
        )}
      </div>
    </div>
  );
}
