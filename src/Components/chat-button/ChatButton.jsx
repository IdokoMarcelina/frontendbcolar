import React from 'react'
import './ChatButton.css'

const ChatButton = ({ unreadMessages, onClick }) => {
  return (
    <div className="chat-button-container">
    <button className="chat-button" onClick={onClick}>
      Chat
      {unreadMessages > 0 && (
        <span className="notification-badge">{unreadMessages}</span>
      )}
    </button>
  </div>
  )
}

export default ChatButton