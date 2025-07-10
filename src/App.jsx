import React, { useState } from "react";
import Header from "./components/Header";
import MotivationQuote from "./components/MotivationQuote";
import AddHabitModal from "./components/AddHabitModal";
import StreakChart from "./components/StreakChart";
import HabitList from "./components/HabitList";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-5xl flex flex-col items-center mx-auto gap-6">
          <MotivationQuote />
          <StreakChart />
          <div className="w-full flex items-center justify-between mt-8 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Habits</h2>
            <button
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition text-lg"
              onClick={() => setShowModal(true)}
            >
              + Add Habit
            </button>
          </div>
          <HabitList />
        </div>
      </main>
      {/* Show modal only when showModal is true */}
      {showModal && <AddHabitModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
