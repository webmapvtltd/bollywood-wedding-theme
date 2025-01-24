import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

const RSVP = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [responsesList, setResponsesList] = useState([]); // To store submitted responses
  const [loading, setLoading] = useState(true); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "rsvp"), { name, response });
      alert("RSVP Submitted!");
      setName("");
      setResponse("");
      fetchResponses(); // Refresh the responses list after submission
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  };

  const fetchResponses = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "rsvp"), orderBy("name", "asc"));
      const querySnapshot = await getDocs(q);
      const responses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResponsesList(responses);
    } catch (error) {
      console.error("Error fetching responses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResponses(); // Fetch responses when the component mounts
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-center text-4xl font-bold text-pink-600 font-bollywood mb-6">
        RSVP
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 max-w-lg mx-auto mb-10"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded mb-4"
          required
        />
        <select
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-full p-3 border rounded mb-4"
          required
        >
          <option value="">Select Your Response</option>
          <option value="Mogambo Khush Hua">Mogambo Khush Hua (Yes)</option>
          <option value="Main aa raha hoon">Main aa raha hoon (Tentative)</option>
          <option value="Nahiiiiiiii">Nahiiiiiiii (No)</option>
        </select>
        <button className="bg-pink-500 text-white p-3 rounded w-full hover:bg-pink-600">
          Submit
        </button>
      </form>

      <div className="bg-white shadow-md rounded p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Responses</h3>
        {loading ? (
          <p className="text-center text-gray-600">Loading responses...</p>
        ) : responsesList.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {responsesList.map((rsvp) => (
              <li key={rsvp.id} className="py-4">
                <p className="text-lg font-semibold text-gray-700">
                  {rsvp.name}
                </p>
                <p className="text-gray-600">{rsvp.response}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No responses yet.</p>
        )}
      </div>
    </div>
  );
};

export default RSVP;
