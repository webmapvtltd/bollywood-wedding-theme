import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?wedding,bollywood')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-3xl px-4">
        <h1 className="text-6xl font-bold font-bollywood mb-4 animate-pulse">
          Rahul & Simran
        </h1>
        <p className="text-2xl mb-6 italic font-semibold">
          "The Greatest Love Story of the Year!"
        </p>
        <p className="text-lg mb-8">
          <span className="font-bold">Coming Soon:</span> March 15, 2025
        </p>

        {/* Call-to-Action */}
        <Link
          to="/rsvp"
          className="bg-pink-500 px-6 py-3 text-lg rounded-md shadow-lg hover:bg-pink-600 transition duration-300"
        >
          RSVP Now
        </Link>

        {/* Decorative Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Bollywood icon"
            className="w-12 h-12 animate-bounce"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/4261/4261628.png"
            alt="Camera icon"
            className="w-12 h-12 animate-spin"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2835/2835096.png"
            alt="Clapper icon"
            className="w-12 h-12 animate-pulse"
          />
        </div>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-4 text-sm text-gray-300">
        © 2025 Rahul & Simran Productions. All Rights Reserved.
      </div>
    </div>
  );
};

export default Home;
