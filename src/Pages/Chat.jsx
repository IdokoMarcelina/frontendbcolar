import React, { useState } from 'react';
import styled from 'styled-components';
import ChatList from '../Components/Chat/Chatlist'
import ChatArea from '../Components/Chat/ChatArea';

const AppContainer = styled.div`
    display: flex;
    height: 100vh;

    @media (max-width: 768px) {
        display: block;
    }
`;

const ChatListContainer = styled.div`
    width: 30%;
    background-color: #121212;
    border-right: 1px solid #333;

    @media (max-width: 768px) {
        width: 100%;
        display: ${({ $show }) => ($show ? 'block' : 'none')};
    }
`;

const ChatAreaContainer = styled.div`
    width: 70%;
    background-color: #1e1e1e;

    @media (max-width: 768px) {
        width: 100%;
        display: ${({ $show }) => ($show ? 'block' : 'none')};
    }
`;

const Chat = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [showChatArea, setShowChatArea] = useState(false);

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
        setShowChatArea(true);
    };

    return (
        <AppContainer>
            <ChatListContainer $show={!showChatArea}>
                <ChatList onChatClick={handleChatClick} />
            </ChatListContainer>

            <ChatAreaContainer $show={showChatArea || selectedChat}>
                <ChatArea
                    selectedChat={selectedChat}
                    setShowChatArea={setShowChatArea}
                />
            </ChatAreaContainer>
        </AppContainer>
    );
};

export default Chat;
