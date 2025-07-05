// src/components/Messages.jsx
import React, { useEffect, useState } from 'react';
import './Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/messages') // Adjust this route to match your backend
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setMessages(data.messages);
        }
      })
      .catch(err => console.error('Error fetching messages:', err));
  }, []);

  return (
    <div className="messages-container">
      <h2>Support Messages</h2>
      <div className="messages-list">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="message-card">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Subject:</strong> {msg.subject}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="msg-time">{new Date(msg.created_at).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Messages;
