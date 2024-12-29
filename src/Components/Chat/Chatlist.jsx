import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatlist.css';

const Chatlist = () => {
  const navigate = useNavigate();
  const chats = [
    { id: 1, name: "Fashion Designer", message: "Emily" },
    { id: 2, name: "Plumber", message: "Thomas" },
    { id: 3, name: "Carpenter", message: "Pranav" },
    { id: 4, name: "Electrician", message: "Anne" },
    { id: 5, name: "Cosmetologist", message: "Ali" },
    { id: 6, name: "Chef", message: "Nico" },
    { id: 7, name: "Barber", message: " Hassan" },
    
  ];

  return (
    <div className="chat-list">
      <div className="chat-header">
        <h2>Chats</h2>
        <div className="categories">
        </div>
      </div>
      <div className="chat-items">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="chat-item"
            onClick={() => navigate(`/chat/${chat.id}`)} // Navigate to Chat Window
          >
            <div className="avatar"></div>
            <div>
              <p className="chat-name">{chat.name}</p>
              <p className="chat-message">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatlist;
