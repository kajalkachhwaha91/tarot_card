"use client";

import Image from "next/image";

export default function FlipCard({ card, isFlipped, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-28 h-44 md:w-32 md:h-48 cursor-pointer perspective"
    >
      {/* Card Inner */}
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
        ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* ✅ BACK SIDE */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border shadow-xl">
          <Image
            src="/cards/cardback.jpg"
            alt="Tarot Back"
            fill
            className="object-cover"
          />
        </div>

        {/* ✅ FRONT SIDE */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl bg-white text-black flex flex-col items-center justify-center p-3 text-center">
          <h2 className="font-bold text-sm mb-2">{card.name}</h2>
          <p className="text-xs text-gray-700">{card.meaning}</p>
        </div>
      </div>
    </div>
  );
}
