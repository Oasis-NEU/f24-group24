import React, { useState, useEffect } from 'react';
import { firestore } from '../../services/firebase';
import {
  collection,
  doc,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

function RestaurantChat({ restaurantId }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Ensure restaurantId is defined
    if (!restaurantId) {
      console.error("Restaurant ID is missing!");
      return;
    }

    // Check if restaurantId is a string
    if (typeof restaurantId !== 'string') {
      console.error("Invalid restaurant ID:", restaurantId);
      return;
    }

    // Set up a query to fetch messages in the "chat" subcollection of a specific restaurant
    const chatRef = collection(firestore, 'restaurants', restaurantId, 'chat');
    const chatQuery = query(chatRef, orderBy('timestamp'));

    const unsubscribe = onSnapshot(chatQuery, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [restaurantId]);

  const handleSendMessage = async () => {
    if (message.trim() !== '' && restaurantId) {
      const chatRef = collection(firestore, 'restaurants', restaurantId, 'chat');
      await addDoc(chatRef, {
        message,
        userId: 'Anonymous', // Replace with real user ID if using Firebase Auth
        timestamp: serverTimestamp(),
      });
      setMessage('');
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white mt-4">
      <h3 className="text-xl font-semibold mb-3">Chat Room</h3>
      <div className="max-h-48 overflow-y-scroll border p-2 mb-3 bg-gray-50 rounded">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-1 text-gray-800">{msg.message}</div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default RestaurantChat;
