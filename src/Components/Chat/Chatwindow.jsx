import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Chatwindow.css';

const Chatwindow = () => {
  const { id } = useParams(); // Extract chat ID from route
  const navigate = useNavigate();

  const [messages, setMessages] = useState([ ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isSent: true }]);
      setInput("");
    }
  };

  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header">
        <button onClick={() => navigate("/")} className="back-button">
          &#8592; Back
        </button>
        <div className="avatar"></div>
        <div>
          <p className="contact-name">Chat ID: {id}</p>
          <p className="contact-status">Offline</p>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.isSent ? "sent" : "received"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatwindow;
