import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MessageInput from './MeassageInput';
import axios from 'axios';
import { io } from 'socket.io-client';

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

    const user = JSON.parse(localStorage.getItem('user'));

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

        const socket = io('https://backend-bcolar.onrender.com');
        const eventName = `chat_message_${user._id}`; 

        socket.on(eventName, (data) => {
            if (data.chatId === selectedChat.id) {
                setMessages((messages) => [...messages, data]);
            }
        });
        return () => {
            socket.off(eventName); 
            socket.disconnect();
        };
    }, [selectedChat]);

    const handleNewMessage = (newMessage) => {
        setMessages((messages) => [...messages, newMessage]);
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
                {selectedChat.otherMember.profilePic ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s' ? (
                    <ProfilePicture src={selectedChat.otherMember.profilePic ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s'} alt={selectedChat.otherMember.name} />
                ) : (
                    <PlaceholderProfilePicture>No Image</PlaceholderProfilePicture>
                )}
                <h2>{selectedChat.otherMember.name || 'Unknown User'}</h2>
            </ChatHeader>

            <MessagesContainer>
    {messages.length > 0 ? (
        messages.map((msg, index) => (
            <div
                key={index}
                style={{
                    marginBottom: '10px',  
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: '#2c2f34',
                    maxWidth: '60%',
                    float: msg.senderId === user._id ? 'right' : 'left',
                    clear: 'both',
                }}
            >
                <p style={{ color: '#ddd', margin: 0 }}>{msg.text}</p>
            </div>
        ))
    ) : (
        <p style={{ textAlign: 'center', color: '#777' }}>No messages yet.</p>
    )}
</MessagesContainer>




            <MessageInput 
                chatId={selectedChat.id} 
                userId={user._id} 
                receiverId={selectedChat.otherMember.id }  
                onNewMessage={handleNewMessage} 
            />

        </ChatAreaWrapper>
    );
};

export default ChatArea;
