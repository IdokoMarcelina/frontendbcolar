import React from 'react'
import './Message.css'
import Messagelist from './Messagelist';
import  { useState } from "react";


const Message = () => {

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
    <div>
       <div style={{ padding: "20px", textAlign: "center" }}>
    <Messagelist unreadMessages={unreadMessages} onClick={clearMessages} />
  </div>  
    </div>
  )
}

export default Message