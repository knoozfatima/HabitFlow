import { createContext, useEffect, useState } from "react";

const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState(() => {
    const storedHabits = localStorage.getItem("habits");
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits((prevHabits) => [...prevHabits, habit]);
  };

  const toggleHabitStatus = (index) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit, id) =>
        id === index ? { ...habit, isDone: !habit.isDone } : habit
      )
    );
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabitStatus }}>
      {children}
    </HabitContext.Provider>
  );
};

export { HabitContext, HabitProvider };
