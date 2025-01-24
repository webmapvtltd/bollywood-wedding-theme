import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

const Messages = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [error, setError] = useState(""); // Handle errors
  const [messages, setMessages] = useState([]); // Store fetched messages

  const validateVideoLink = (link) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com)\/.+$/;
    return regex.test(link);
  };

  // Fetch messages from Firestore
  const fetchMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    } catch (err) {
      console.error("Error fetching messages: ", err);
    }
  };

  useEffect(() => {
    fetchMessages(); // Fetch messages on component mount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setIsSubmitting(true);

    // Validate video link
    if (!validateVideoLink(videoLink)) {
      setError("Please provide a valid YouTube or Vimeo link.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Add message to Firestore
      await addDoc(collection(db, "messages"), {
        name,
        message,
        videoLink,
        createdAt: serverTimestamp(), // Add timestamp
      });

      alert("Message Uploaded Successfully!");
      // Reset form fields
      setName("");
      setMessage("");
      setVideoLink("");
      fetchMessages(); // Refresh messages after submission
    } catch (err) {
      console.error("Error uploading message: ", err);
      setError("An error occurred while uploading the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-pink-300 to-yellow-200 min-h-screen">
      <h2 className="text-center text-4xl font-bold font-bollywood mb-6">
        Share Your Fun Messages!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6"
        noValidate
      >
        {error && (
          <div className="bg-red-100 text-red-800 p-3 mb-4 rounded">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-pink-400"
          required
          aria-label="Your Name"
        />

        <textarea
          placeholder="Write a fun message for the couple"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-pink-400"
          rows="4"
          required
          aria-label="Fun Message"
        ></textarea>

        <input
          type="url"
          placeholder="Video Link (YouTube or Vimeo)"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-pink-400"
          required
          aria-label="Video Link"
        />

        <button
          type="submit"
          className={`bg-pink-500 text-white p-3 rounded w-full hover:bg-pink-600 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Display Messages Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-center mb-6">Messages from Guests</h3>
        <div className="space-y-6">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="p-4 bg-white shadow rounded-lg max-w-3xl mx-auto"
              >
                <h4 className="text-lg font-semibold text-pink-600">{msg.name}</h4>
                <p className="text-gray-800">{msg.message}</p>
                {msg.videoLink && (
                  <a
                    href={msg.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 block"
                  >
                    Watch Video 🎥
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">No messages yet. Be the first to add one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
