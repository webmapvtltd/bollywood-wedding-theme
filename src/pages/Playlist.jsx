import React from "react";

const Playlist = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h2 className="text-center text-4xl font-bollywood text-pink-500 mb-6">Bollywood Wedding Playlist</h2>
      <p className="text-center text-lg mb-8">
        Get your dancing shoes on! 🎶 Here’s a playlist to set the vibe.
      </p>
      <div className="flex justify-center">
        {/* Embed a Spotify Playlist */}
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3zMN3a4wJfE"
          width="80%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          className="shadow-lg rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Playlist;
