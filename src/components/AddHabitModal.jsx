import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";

const AddHabitModal = ({ onClose }) => {
  const { addHabit } = useContext(HabitContext);
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("daily");

  const handleSave = () => {
    if (habitName.trim()) {
      addHabit({ name: habitName, frequency, progress: 0, isDone: false });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl p-8 w-full max-w-md animate-fadeInModal relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Add New Habit</h3>
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Habit Name"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            className="border border-gray-400 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white placeholder-gray-400"
          />
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="border border-gray-400 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-400 text-white font-semibold hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabitModal;

// Tailwind custom animations (add to index.css):
// .animate-fadeIn { animation: fadeInBg 0.3s ease; }
// .animate-fadeInModal { animation: fadeInModal 0.4s cubic-bezier(0.4,0,0.2,1); }
// @keyframes fadeInBg { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeInModal { from { transform: translateY(40px) scale(0.95); opacity: 0; } to { transform: none; opacity: 1; } }