"use client";

import { useState } from "react";
import FlipCard from "./FlipCard";

export default function CardGrid({ cards }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="w-full flex justify-center mt-12 px-4">
      {/* Responsive Fan Container */}
      <div className="relative w-full max-w-[900px] h-[320px] flex justify-center items-end">

        {cards.map((card, index) => {
          const total = cards.length;

          // ✅ Smooth arc curve
          const maxAngle = 20;
          const angleStep = (maxAngle * 2) / (total - 1);
          const rotate = -maxAngle + index * angleStep;

          // ✅ Responsive spread (less spacing)
          const spread = 35;
          const offset = (index - (total - 1) / 2) * spread;

          // Selected card effect
          const isSelected = selectedIndex === index;

          return (
            <div
              key={index}
              style={{
                transform: `
                  translateX(${offset}px)
                  rotate(${rotate}deg)
                  ${isSelected ? "translateY(-90px) scale(1.15)" : ""}
                `,
              }}
              className={`
                absolute bottom-0 origin-bottom
                transition-all duration-500 ease-in-out
                ${isSelected ? "z-50" : "z-10"}
              `}
            >
              <FlipCard
                card={card}
                isFlipped={isSelected}
                onClick={() =>
                  setSelectedIndex(isSelected ? null : index)
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
