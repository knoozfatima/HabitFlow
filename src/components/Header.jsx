import React from "react";

const Header = () => {
  return (
  <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md rounded-b-2xl">
    <div className="flex items-center gap-3">
      <span className="text-3xl">🌱</span>
      <h1 className="font-bold text-white tracking-wide">HabitFlow</h1>
    </div>
    <span className="text-white font-semibold text-lg">Your Habit Tracker</span>
  </header>
);
}
export default Header; 