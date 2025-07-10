import React from "react";

const ProfileCard = ({ name, role, quote, image, buttonText }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-300 shadow-md"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-indigo-600 font-medium">{role}</p>
        <p className="text-sm text-gray-600 mt-2">"{quote}"</p>
        <button
          className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition transform"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
