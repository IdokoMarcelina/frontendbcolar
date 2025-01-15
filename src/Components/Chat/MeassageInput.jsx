import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaPaperPlane, FaImage } from 'react-icons/fa';

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
    background: ${(props) => (props.bgColor ? props.bgColor : "#4caf50")};
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const MessageInput = ({ chatId, onNewMessage }) => {
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);

    const handleSend = async () => {
        if (message.trim() || image) {
            const formData = new FormData();
            formData.append('text', message);
            formData.append('chatId', chatId);
            if (image) {
                formData.append('image', image);
            }

            try {
                const response = await axios.post('https://backend-bcolar.onrender.com/createMessage', formData);
                onNewMessage(response.data);
                setMessage('');
                setImage(null);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <MessageInputContainer>
            <TextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />

            <HiddenFileInput
                type="file"
                accept="image/*"
                id="imageUpload"
                onChange={handleImageUpload}
            />
            <label htmlFor="imageUpload">
                <IconButton bgColor="#3b82f6">
                    <FaImage />
                </IconButton>
            </label>

            <IconButton onClick={handleSend}>
                <FaPaperPlane />
            </IconButton>
        </MessageInputContainer>
    );
};

export default MessageInput;
