import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Ispravan import

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Povuci token iz localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }

        // Dekodiraj token da bi dobio userId
        const decoded = jwtDecode(token); // Ispravno korišćenje funkcije
        const userId = decoded.userId;

        if (!userId) {
          console.error('No userId found in token');
          return;
        }

        // Pozovi API da bi povukao poruke
        const response = await axios.get(`http://localhost:5000/api/messages/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []); // Prazan niz znači da se useEffect pokreće samo kada se komponenta učita

  if (loading) {
    return <div>Loading messages...</div>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h3>📨 Your Messages</h3>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {messages.map((message) => (
            <li key={message._id} style={{ marginBottom: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
              <strong>{message.sender?.fullName || message.sender?.email}</strong>: {message.content}
              <br />
              <small style={{ color: '#888' }}>{new Date(message.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessagesPage;
