import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MessageInput from './MeassageInput';
import axios from 'axios';

const ChatAreaWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #1e1e1e;
`;

const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #333;
    background-color: #252525;
`;

const ProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`;

const PlaceholderProfilePicture = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #555;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #ddd;
`;

const MessagesContainer = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 15px;
    background-color: #202020;
`;

const ChatArea = ({ selectedChat }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!selectedChat) return;

        const fetchMessages = async () => {
            try {
                const response = await axios.get(`https://backend-bcolar.onrender.com/getMessages/${selectedChat.id}`);
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();

        const socket = new WebSocket('wss://backend-bcolar.onrender.com');
        socket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            if (newMessage.chatId === selectedChat.id) {
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            }
        };

        return () => {
            socket.close();
        };
    }, [selectedChat]);

    const handleNewMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    if (!selectedChat) {
        return (
            <ChatAreaWrapper>
                <p style={{ textAlign: 'center', marginTop: '50px', color: '#bbb' }}>
                    Select a chat to start messaging.
                </p>
            </ChatAreaWrapper>
        );
    }

    return (
        <ChatAreaWrapper>
            <ChatHeader>
                {selectedChat.profilePic ? (
                    <ProfilePicture src={selectedChat.profilePic} alt={selectedChat.name || 'User'} />
                ) : (
                    <PlaceholderProfilePicture>No Image</PlaceholderProfilePicture>
                )}
                <h2>{selectedChat.name || 'Unknown User'}</h2>
            </ChatHeader>

            <MessagesContainer>
                {messages.length > 0 ? (
                    messages.map((msg, index) => <p key={index} style={{ color: '#ddd' }}>{msg.text}</p>)
                ) : (
                    <p style={{ textAlign: 'center', color: '#777' }}>No messages yet.</p>
                )}
            </MessagesContainer>

            <MessageInput chatId={selectedChat.id} onNewMessage={handleNewMessage} />
        </ChatAreaWrapper>
    );
};

export default ChatArea;
