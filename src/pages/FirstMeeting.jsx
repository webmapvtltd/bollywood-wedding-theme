import React from "react";

const FirstMeeting = () => {
  return (
    <div className="bg-gradient-to-b from-pink-200 to-yellow-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-2xl text-center relative">
        {/* Bollywood Sparkle Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-white to-yellow-200 opacity-20 rounded-lg"></div>
        
        {/* Title */}
        <h2 className="text-5xl font-bold text-pink-600 font-bollywood mb-6">
          Our First Meeting
        </h2>
        
        {/* Story */}
        <p className="text-lg text-gray-800 leading-relaxed">
          It was a moment straight out of a Bollywood movie. 🌟 Simran was running
          to catch a train, and Rahul held out his hand to help her onboard.
          Their eyes met, violins started playing in the background, and the
          rest is history.
        </p>

        {/* Image Section */}
        <div className="mt-8">
          <img
            src="https://source.unsplash.com/800x600/?train,romantic"
            alt="Bollywood Train Scene"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Additional Story */}
        <p className="text-lg text-gray-800 mt-6 leading-relaxed">
          Their first meeting wasn’t just a chance encounter. It was destiny, a
          script written by the stars. 💫
        </p>

        {/* Bollywood Quote */}
        <blockquote className="text-2xl italic font-semibold mt-8 text-pink-500 animate-pulse">
          "Bade Bade Deshon Mein Aisi Chhoti Chhoti Baatein Hoti Rehti Hain..."
        </blockquote>

        {/* Decorative Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3899/3899377.png"
            alt="Heart Icon"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Bollywood Icon"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2835/2835096.png"
            alt="Clapperboard Icon"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstMeeting;
