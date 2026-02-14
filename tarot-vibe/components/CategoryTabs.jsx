export default function CategoryTabs({ category, setCategory }) {
  const categories = ["love", "career", "future"];

  return (
    <div className="flex gap-4 mb-8">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-full border transition
            ${
              category === item
                ? "bg-white text-black"
                : "border-gray-600 text-gray-300 hover:border-white"
            }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
