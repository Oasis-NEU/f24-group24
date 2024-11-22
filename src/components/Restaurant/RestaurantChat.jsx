import React, { useState, useEffect } from "react";
import { firestore } from "../../services/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

function RestaurantChat({ restaurantId }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!restaurantId) {
      console.error("Restaurant ID is missing!");
      return;
    }

    const chatRef = collection(firestore, "restaurants", restaurantId, "chat");
    const chatQuery = query(chatRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(chatQuery, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [restaurantId]);

  const handleSendMessage = async () => {
    if (message.trim() !== "" && rating > 0 && restaurantId) {
      const chatRef = collection(
        firestore,
        "restaurants",
        restaurantId,
        "chat"
      );
      await addDoc(chatRef, {
        name: name || "Anonymous", // Default to "Anonymous" if no name is provided
        message,
        rating,
        timestamp: serverTimestamp(),
      });
      setName("");
      setMessage("");
      setRating(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Review Submission Box */}
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h3 className="text-xl font-semibold mb-4">Share Your Thoughts</h3>
        <p className="text-sm text-gray-500 mb-3">Name is optional.</p>

        <div className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full p-2 border rounded"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your comment"
            className="w-full p-2 border rounded"
          />
          <div className="flex items-center space-x-2">
            <label className="text-gray-700">Rate:</label>
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setRating(i + 1)}
                  className={`text-2xl ${
                    i < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {messages.length > 0 ? (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="p-3 border rounded bg-gray-50 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {msg.name || "Anonymous"}
                  </h4>
                  <div className="flex items-center">
                    {Array.from({ length: msg.rating }, (_, i) => (
                      <span key={i} className="text-yellow-500">
                        &#9733;
                      </span>
                    ))}
                    {Array.from({ length: 5 - msg.rating }, (_, i) => (
                      <span key={i} className="text-gray-300">
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{msg.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </div>
  );
}

export default RestaurantChat;
