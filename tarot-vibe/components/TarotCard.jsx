export default function TarotCard({ card }) {
  if (!card) return null;

  return (
    <div className="mt-10 p-6 rounded-2xl border border-gray-700 bg-white/5 w-full max-w-md text-center shadow-lg">
      <h2 className="text-2xl font-semibold mb-3">{card.name}</h2>

      <p className="text-gray-300 text-lg">{card.vibe}</p>
    </div>
  );
}
