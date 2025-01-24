import React from "react";

const BollywoodButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 
                  text-white font-bold py-2 px-6 rounded-full shadow-lg 
                  hover:scale-110 transition-transform duration-300 
                  hover:from-red-500 hover:via-yellow-500 hover:to-pink-400
                  ${className}`}
    >
      {text}
    </button>
  );
};

export default BollywoodButton;
