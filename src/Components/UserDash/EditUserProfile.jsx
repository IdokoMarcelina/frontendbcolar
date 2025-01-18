import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserDashLayout from './UserDashLayout';

const EditUserProfile = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        state: '',
        lga: '',
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const token = localStorage.getItem("token");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const updateUser = async () => {
        try {
            const response = await axios.patch(
                'https://backend-bcolar.onrender.com/api/profile/updateuser',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    }
                }
            );
            setResponseMessage('Update successful!');
            setIsSuccess(true);
        } catch (error) {
            setResponseMessage(error.response ? error.response.data.message : error.message);
            setIsSuccess(false);
        }
    };

    return (
        <UserDashLayout>
        <Container>
            <Title>Edit Profile</Title>
            <Form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <Label>Full Name:</Label>
                    <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                    />
                </div>
                <div>
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <Label>Phone Number:</Label>
                    <Input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                    />
                </div>
                <div>
                    <Label>State:</Label>
                    <Input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                    />
                </div>
                <div>
                    <Label>LGA:</Label>
                    <Input
                        type="text"
                        name="lga"
                        value={formData.lga}
                        onChange={handleChange}
                        placeholder="Enter LGA"
                    />
                </div>
                <Button type="button" onClick={updateUser}>
                    Update
                </Button>
            </Form>
            {responseMessage && <Message success={isSuccess}>{responseMessage}</Message>}
        </Container>
        </UserDashLayout>
    );
};

export default EditUserProfile;

const Container = styled.div`
    padding: 20px;
    max-width: 400px;
    margin: 50px auto;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    div{
        display: flex;
        justify-content: space-evenly;
    }
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Label = styled.label`
    font-size: 14px;
    color: #555;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
        border-color: #0000ff;
        outline: none;
    }
`;

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #0000ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #3a3af1;
    }
`;

const Message = styled.p`
    text-align: center;
    font-size: 14px;
    color: ${(props) => (props.success ? 'green' : 'red')};
`;
