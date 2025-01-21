import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GotoButton from '../GotoButton';

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
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token'); 

        const user = JSON.parse(localStorage.getItem('user'));

        if (!token) {
          console.error('No token found. Please log in.');
        }

        const fetchChats = async () => {
            try {
                const response = await axios.get(`https://backend-bcolar.onrender.com/findUserChats/${user._id}`,
                    {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setChats(response.data);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        };
        fetchChats()
    }, []);

    return (
        <ChatListWrapper>
            <GotoButton/>
            {chats.map((chat) => (
                <ChatItem key={chat.id} onClick={() => onChatClick(chat)}>
                    <ProfilePicture src={chat.otherMember.profilePic ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s'} alt={`${chat.otherMember.name}'s profile`} />
                    {chat.otherMember.name}
                </ChatItem>
            ))}
        </ChatListWrapper>
    );
};

export default ChatList;
