import React from 'react'
import './Message.css'
import { useState } from "react";


const Messagelist = ({ unreadMessages, onClick }) => {
  return (
    <div><div className="chat-button-container">
    <button className="chat-button" onClick={onClick}>
      Message
      {unreadMessages > 0 && (
        <span className="notification-badge">{unreadMessages}</span>
      )}
    </button>
  </div></div>
  )
}

export default Messagelist