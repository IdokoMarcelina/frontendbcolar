// ChatList.jsx
import React from 'react';
import styled from 'styled-components';

const ChatListWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    color: white;
`;

const ChatItem = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #333;
    cursor: pointer;

    &:hover {
        background-color: #252525;
    }
`;

const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`;

const ChatList = ({ onChatClick }) => {
    const chats = [
        { id: 1, name: 'John Doe', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 2, name: 'Jane Smith', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: 3, name: 'Alice Brown', profilePic: 'https://randomuser.me/api/portraits/women/3.jpg' },
    ];

    return (
        <ChatListWrapper>
            {chats.map((chat) => (
                <ChatItem key={chat.id} onClick={() => onChatClick(chat)}>
                    <ProfilePicture src={chat.profilePic} alt={`${chat.name}'s profile`} />
                    {chat.name}
                </ChatItem>
            ))}
        </ChatListWrapper>
    );
};

export default ChatList;
