import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
    
        const decoded = jwtDecode(token);
        const userId = decoded._id; // ✅ Sigurno koristi `_id`, a ne `userId`
    
        if (!userId) {
          console.error('No userId found in token');
          return;
        }
    
        const response = await axios.get(`http://localhost:5000/api/messages/received/${userId}`, {
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
  }, []);

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
              <strong>{message.senderId?.fullName || message.senderId?.email || 'Unknown User'}</strong>: {message.content}
              <br />
              <small style={{ color: '#888' }}>{new Date(message.timestamp).toLocaleString()}</small>
              
              {/* Dodajemo informacije o proizvodu */}
              {message.productId && (
                <div style={{ marginTop: '1rem', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
                  <strong>Product:</strong> {message.productId.name}
                  <br />
                  <small>Price: ${message.productId.price}</small>
                  <br />
                  <a href={`/product/${message.productId._id}`} target="_blank" rel="noopener noreferrer">
                    View Product Details
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessagesPage;
