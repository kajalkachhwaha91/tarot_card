export default function TopicSelector({ topic, setTopic, start }) {
  const topics = ["love", "career", "future"];

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-6 font-semibold">
        Choose Your Topic ✨
      </h2>

      <div className="flex gap-4 justify-center mb-8">
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={`px-6 py-2 rounded-full border transition
              ${
                topic === t
                  ? "bg-white text-black"
                  : "border-gray-600 text-gray-300 hover:border-white"
              }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <button
        onClick={start}
        className="px-8 py-3 rounded-xl bg-purple-600 hover:scale-105 transition"
      >
        Start Reading 🔮
      </button>
    </div>
  );
}
