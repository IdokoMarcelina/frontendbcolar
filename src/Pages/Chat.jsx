import React, { useState } from 'react';
import styled from 'styled-components';
import ChatList from '../Components/Chat/ChatList';
import ChatArea from '../Components/Chat/ChatArea';

const AppContainer = styled.div`
    display: flex;
    height: 100vh;

    @media (max-width: 768px) {
        display: block; /* Stack the layout for mobile view */
    }
`;

const ChatListContainer = styled.div`
    width: 30%;
    background-color: #121212;
    border-right: 1px solid #333;

    @media (max-width: 768px) {
        width: 100%;
        display: ${(props) => (props.show ? 'block' : 'none')};
    }
`;

const ChatAreaContainer = styled.div`
    width: 70%;
    background-color: #1e1e1e;

    @media (max-width: 768px) {
        width: 100%;
        display: ${(props) => (props.show ? 'block' : 'none')};
    }
`;

const Chat = () => {
    const [selectedChat, setSelectedChat] = useState(null); // Store the selected chat
    const [showChatArea, setShowChatArea] = useState(false); // Control visibility of chat area on mobile

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
        setShowChatArea(true); // Show chat area on mobile
    };

    return (
        <AppContainer>
            {/* Chat List */}
            <ChatListContainer show={!showChatArea}>
                <ChatList onChatClick={handleChatClick} />
            </ChatListContainer>

            {/* Chat Area */}
            <ChatAreaContainer show={showChatArea || selectedChat}>
                <ChatArea
                    selectedChat={selectedChat}
                    setShowChatArea={setShowChatArea} // To allow toggling back to chat list
                />
            </ChatAreaContainer>
        </AppContainer>
    );
};

export default Chat;
