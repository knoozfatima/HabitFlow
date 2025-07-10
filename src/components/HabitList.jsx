import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import HabitCard from "./HabitCard";

const HabitList = () => {
  const { habits, toggleHabitStatus } = useContext(HabitContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
      {habits.map((habit, idx) => (
        <HabitCard
          key={idx}
          {...habit}
          onToggle={() => toggleHabitStatus(idx)}
        />
      ))}
    </div>
  );
};

export default HabitList;