import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('https://backend-bcolar.onrender.com');

const MessageInputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #333;
    background: #1e1e1e;
`;

const TextArea = styled.textarea`
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #252525;
    color: white;
    resize: none;
    margin-right: 10px;
`;

const IconButton = styled.button`
    background: #4caf50;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    margin-left: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }
`;

const MessageInput = ({ chatId, userId, receiverId, onNewMessage }) => {
    const [message, setMessage] = useState('');

    console.log("Received chatId:", chatId);
    console.log("Received userId:", userId);
    console.log("Received receiverId:", receiverId);

    const handleSend = async () => {
        if (!message.trim()) {
            console.error("Error: Message text is empty");
            return;
        }
    
        if (!chatId || !userId || !receiverId) {
            console.error("Error: Missing chatId, userId, or receiverId");
            return;
        }
    
        console.log("Sending message with payload:", {
            text: message,
            chatId: chatId,
            senderId: userId,
            receiverId: receiverId
        });
    
        try {
            const response = await axios.post(
                'https://backend-bcolar.onrender.com/createMessage',
                { text: message, chatId, senderId: userId, receiverId }, 
                { headers: { 'Content-Type': 'application/json' } }
            );
    
            socket.emit('new_message', response.data);
    
            console.log('Message sent successfully:', response.data);
            onNewMessage(response.data);
    
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error.response?.data || error.message);
        }
    };

    return (
        <MessageInputContainer>
            <TextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />

            <IconButton onClick={handleSend}>
                <FaPaperPlane />
            </IconButton>
        </MessageInputContainer>
    );
};

export default MessageInput;


