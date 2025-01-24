import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold font-bollywood">
          Bollywood Wedding
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-pink-500 to-red-500 md:bg-transparent z-50 p-4 md:p-0`}
        >
          <Link to="/" className="block text-lg hover:text-yellow-300">
            Home
          </Link>
          <Link to="/first-meeting" className="block text-lg hover:text-yellow-300">
            First Meeting
          </Link>
          <Link to="/proposal" className="block text-lg hover:text-yellow-300">
            Proposal
          </Link>
          <Link to="/rsvp" className="block text-lg hover:text-yellow-300">
            RSVP
          </Link>
          <Link to="/playlist" className="block text-lg hover:text-yellow-300">
            Playlist
          </Link>
          <Link to="/messages" className="block text-lg hover:text-yellow-300">
            Messages
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
