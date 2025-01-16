import React, { useState } from "react";
import './ChatButton.css'
import ChatButton from './ChatButton';

const ClickButton = () => {

    // State for unread messages
  const [unreadMessages, setUnreadMessages] = useState(5);

  // Simulate receiving a message
  const receiveMessage = () => {
    setUnreadMessages((prev) => prev + 1);
  };

  // Clear unread messages
  const clearMessages = () => {
    setUnreadMessages(0);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
    <ChatButton unreadMessages={unreadMessages} onClick={clearMessages} />
  </div>
  )
}

export default ClickButton