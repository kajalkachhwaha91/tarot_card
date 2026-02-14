"use client";

import { useState } from "react";
import tarotCards from "@/data/tarotCards";

import TopicSelector from "@/components/TopicSelector";
import CardGrid from "@/components/CardGrid";
import TarotPopup from "@/components/TarotPopup";
import Year2026Quiz from "@/components/Year2026Quiz";


export default function Home() {
  const [topic, setTopic] = useState("love");
  const [started, setStarted] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);


  

  return (
    <main className="relative min-h-screen text-white">

      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{
          backgroundImage: "url('/cards/bg2.jpg')",
        }}
      ></div>

      {/* ✅ Dark Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>
      {showQuiz && (
  <Year2026Quiz close={() => setShowQuiz(false)} />
)}


      {/* ✅ Main Content Wrapper */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-10 text-center">
          🔮 Tarot Vibe Experience
        </h1>

        <button
  onClick={() => setShowQuiz(true)}
  className="mb-6 px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition"
>
  ✨ What will you get in 2026?
</button>


        {/* Step 1: Topic Select */}
        {!started && (
          <TopicSelector
            topic={topic}
            setTopic={setTopic}
            start={() => setStarted(true)}
          />
        )}

        {/* Step 2: Cards Show */}
        {started && (
          <>
            <h2 className="text-xl text-gray-300 mb-6 text-center">
              Pick a card for:{" "}
              <span className="font-semibold">
                {topic.toUpperCase()}
              </span>
            </h2>

            <CardGrid
              cards={tarotCards[topic]}
              onSelect={(card) => setSelectedCard(card)}
            />
          </>
        )}

      </div>

      {/* Step 3: Popup Meaning */}
      <TarotPopup
        card={selectedCard}
        close={() => setSelectedCard(null)}
      />
    </main>
  );
}
