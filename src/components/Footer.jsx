import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold font-bollywood">Bollywood Wedding</h2>
          <p className="text-sm mt-1">Made with 💕 and filmy vibes</p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/first-meeting" className="hover:text-yellow-300">
            First Meeting
          </Link>
          <Link to="/proposal" className="hover:text-yellow-300">
            Proposal
          </Link>
          <Link to="/rsvp" className="hover:text-yellow-300">
            RSVP
          </Link>
          <Link to="/playlist" className="hover:text-yellow-300">
            Playlist
          </Link>
          <Link to="/messages" className="hover:text-yellow-300">
            Messages
          </Link>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6 text-sm">
        © 2025 Bollywood Wedding | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
