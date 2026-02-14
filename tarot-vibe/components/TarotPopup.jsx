export default function TarotPopup({ card, close }) {
  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="bg-white text-black p-8 rounded-2xl w-[90%] max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">{card.name}</h2>

        <p className="text-gray-700 text-lg mb-6">
          {card.meaning}
        </p>

        <button
          onClick={close}
          className="px-6 py-2 bg-black text-white rounded-lg hover:opacity-80"
        >
          Close ✨
        </button>
      </div>
    </div>
  );
}
