import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const ChatList = ({ userId, onChatClick }) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await axios.get(`https://backend-bcolar.onrender.com/findUserChats/${userId}`);
                console.log(response)
                setChats(response.data);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        };

        if (userId) {
            fetchChats();
        }
    }, [userId]);

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
