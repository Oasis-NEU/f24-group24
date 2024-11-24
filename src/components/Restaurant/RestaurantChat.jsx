import React, { useState, useEffect } from "react";
import { firestore } from "../../services/firebase";
import { useAuth } from "../../contexts/AuthContext";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function RestaurantChat({ restaurantId }) {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [messages, setMessages] = useState([]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!restaurantId) {
      console.error("Restaurant ID is missing!");
      return;
    }

    const chatRef = collection(firestore, "restaurants", restaurantId, "chat");
    const chatQuery = query(chatRef, orderBy("timestamp", "desc")); // Descending order

    const unsubscribe = onSnapshot(chatQuery, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [restaurantId]);

  const validateInputs = () => {
    const newErrors = {};
    if (message.trim() === "") {
      newErrors.message = "Comment is required";
    }
    if (rating === 0) {
      newErrors.rating = "Rating is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendMessage = async () => {
    if (validateInputs()) {
      const chatRef = collection(
        firestore,
        "restaurants",
        restaurantId,
        "chat"
      );
      await addDoc(chatRef, {
        name: name || "Anonymous",
        message,
        rating,
        timestamp: serverTimestamp(),
      });
      setName("");
      setMessage("");
      setRating(0);
      setErrors({});
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Review Submission Box */}
      {currentUser ? (
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-4">Share Your Thoughts</h3>
          <div className="space-y-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500"
                  : "focus:ring-[#6cc6ff] border-gray-300"
              }`}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your comment"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500"
                  : "focus:ring-[#6cc6ff] border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
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
            {errors.rating && (
              <p className="text-red-500 text-sm">{errors.rating}</p>
            )}
            <button
              onClick={handleSendMessage}
              className={`w-full py-2 rounded transition-all duration-300 ${
                success
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              disabled={success}
            >
              {success ? "Message Posted!" : "Submit"}
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Log in to leave a comment.
          </h3>
          <Link
            to="/auth"
            className="block text-center py-2 px-4 bg-[#39b2ff] text-white font-semibold rounded hover:bg-[#00426c] transition duration-300"
          >
            Log In
          </Link>
        </div>
      )}

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
