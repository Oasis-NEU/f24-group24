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
    <div>
      <h3>Chat Room</h3>
      <div style={{ maxHeight: '200px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg) => (
          <div key={msg.id}>{msg.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default RestaurantChat;
