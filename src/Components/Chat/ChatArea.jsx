// ChatArea.jsx
import React from 'react';
import styled from 'styled-components';
import MessageInput from './MeassageInput';

const ChatAreaWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
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

const MessagesContainer = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 15px;
`;

const BackButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: inline-block;
    }
`;

const ChatArea = ({ selectedChat, setShowChatArea }) => {
    if (!selectedChat) {
        return <ChatAreaWrapper>Select a chat to start messaging</ChatAreaWrapper>;
    }

    return (
        <ChatAreaWrapper>
            {/* Header with Profile Picture and Back Button */}
            <ChatHeader>
                <BackButton onClick={() => setShowChatArea(false)}>&larr; Back</BackButton>
                <ProfilePicture src={selectedChat.profilePic} alt={selectedChat.name} />
                <h2>{selectedChat.name}</h2>
            </ChatHeader>

            {/* Messages */}
            <MessagesContainer>
                <p>Messages with {selectedChat.name} go here...</p>
            </MessagesContainer>

            {/* Message Input */}
            <MessageInput />
        </ChatAreaWrapper>
    );
};

export default ChatArea;
