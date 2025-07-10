import React from "react";
import HabitCard from "./HabitCard";

const dummyHabits = [
  { name: "Drink Water", frequency: "daily", progress: 80, isDone: false },
  { name: "Read a Book", frequency: "weekly", progress: 60, isDone: true },
  { name: "Exercise", frequency: "daily", progress: 40, isDone: false },
  { name: "Call Family", frequency: "monthly", progress: 20, isDone: false },
  { name: "Meditate", frequency: "daily", progress: 90, isDone: true },
  { name: "Journal", frequency: "weekly", progress: 50, isDone: false },
];

const HabitList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
    {dummyHabits.map((habit, idx) => (
      <HabitCard key={idx} {...habit} />
    ))}
  </div>
);

export default HabitList; 