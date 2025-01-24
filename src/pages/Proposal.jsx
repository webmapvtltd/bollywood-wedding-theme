import React from "react";

const Proposal = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-200 to-pink-400 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-xl p-8 bg-white shadow-2xl rounded-lg border-t-8 border-pink-500">
        <h2 className="text-4xl font-bold text-pink-600 font-bollywood mb-4">
          The Proposal
        </h2>
        <p className="text-lg text-gray-700">
          “Rahul knelt down, holding Simran’s hand, with violins playing in the
          background, and said, 
          <span className="italic font-semibold text-red-500">
            ‘Simran, Jaa Jee Le Apni Zindagi!’
          </span>”
        </p>
        <img
          src="https://source.unsplash.com/800x600/?proposal,romantic"
          alt="Proposal Scene"
          className="rounded-lg mt-6 shadow-lg border"
        />
        <p className="text-lg text-gray-700 mt-6">
          Their love story wasn’t just a tale of hearts but a destiny written
          in the stars. 🌟 On March 15th, their new chapter begins.
        </p>
        <blockquote className="mt-4 text-pink-600 italic text-xl">
          "Dilwale Dulhania Le Jayenge vibes!"
        </blockquote>
        <div className="mt-6">
          <a
            href="/rsvp"
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded shadow-md transition-transform transform hover:scale-105"
          >
            RSVP for the Big Day 🎉
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
