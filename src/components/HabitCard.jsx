
const frequencyColors = {
  daily: "bg-blue-100 text-blue-700",
  weekly: "bg-green-100 text-green-700",
  monthly: "bg-purple-100 text-purple-700",
};

const HabitCard = ({ name, frequency, isDone, onToggle }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow transition-transform duration-200 hover:scale-105 hover:shadow-2xl flex flex-col gap-3 w-full  h-full">
    <div className="flex items-center justify-between p-5 pb-0">
      <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${frequencyColors[frequency]}`}>{frequency}</span>
    </div>
    <div className="flex-1 flex items-start px-5 pb-3">
      <button
        onClick={onToggle}
        className={`mt-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 w-full text-white ${isDone ? "bg-green-400 hover:bg-green-500" : "bg-gray-800 hover:bg-gray-900"}`}
      >
        {isDone ? "Done" : "Mark as Done"}
      </button>
    </div>
  </div>
);

export default HabitCard;