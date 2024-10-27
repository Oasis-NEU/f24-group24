import React, { useState, useEffect } from 'react';
import { firestore } from '../../services/firebase';

function RestaurantChat({ restaurantId }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('restaurants')
      .doc(restaurantId)
      .collection('chat')
      .orderBy('timestamp')
      .onSnapshot(snapshot => {
        const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMessages(messagesData);
      });

    return () => unsubscribe();
  }, [restaurantId]);

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      await firestore.collection('restaurants').doc(restaurantId).collection('chat').add({
        message,
        userId: 'Anonymous', // Replace with real user ID if using Firebase Auth
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
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
