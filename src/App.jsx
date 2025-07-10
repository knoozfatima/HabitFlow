import React from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const people = [
    {
      name: "Sophia Patel",
      role: "UI/UX Designer",
      quote: "Design is intelligence made visible.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      buttonText: "Follow",
    },
    {
      name: "James Turner",
      role: "Web Developer",
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      buttonText: "Message",
    },
    {
      name: "Ava Smith",
      role: "Project Manager",
      quote: "Plan well, execute better.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      buttonText: "Connect",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-200 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Team
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {people.map((person, index) => (
          <ProfileCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

export default App;
