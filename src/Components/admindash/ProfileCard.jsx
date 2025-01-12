import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ProfileCard = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    avatar: null,
    phoneNo: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("authToken");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      avatar: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.phoneNo) {
      setError("Please fill in all required fields.");
      return;
    }

    const form = new FormData();
    form.append("fullname", formData.fullname);
    form.append("avatar", formData.avatar);
    form.append("phoneNo", formData.phoneNo);

    try {
      setLoading(true);
      setError(""); 

      
      const response = await axios.patch(
        "https://backend-bcolar.onrender.com/api/profile/updateuser", 
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      console.log("Profile updated:", response.data);
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Error updating profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileContainer>
      <ProfileForm onSubmit={handleSubmit}>
        <h3>Edit Profile</h3>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <label>Full Name</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          placeholder="Enter your full name"
        />
        <label>Avatar</label>
        <input type="file" name="avatar" onChange={handleFileChange} />
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Submit"}
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </ProfileForm>
    </ProfileContainer>
  );
};

export default ProfileCard;

const ProfileContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    margin: 0;
    text-align: center;
  }

  label {
    font-weight: bold;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:nth-child(2) {
      background-color: #f44336;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`;
