import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiSettings, FiMessageSquare, FiBook } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

const UserSidebar = () => {
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState(""); // To store the full name of the user
  const navigate = useNavigate();

  // Fetch user avatar and full name
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in.");
        return;
      }

      const response = await fetch("https://backend-bcolar.onrender.com/api/profile/getuser", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);  // Check if the avatar is in the expected field

        // Check if avatar URL exists and set it properly
        if (data.user.avatar) {
          setAvatar(data.user.avatar);  // Assuming avatar URL is returned
        } else {
          setAvatar(null); // Fallback if no avatar is returned
        }
        setFullName(data.user.name);  // Fetch full name of the user
      } else {
        console.error("Failed to fetch user details");
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in.");
        return;
      }
      const response = await fetch("https://backend-bcolar.onrender.com/api/auth/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        localStorage.removeItem("token");
        alert("Successfully logged out!");
        navigate("/");
      } else {
        alert("Error logging out.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <SidebarContainer>
      <ProfileContainer>
        {avatar ? (
          <Avatar src={avatar.startsWith("http") ? avatar : `https://backend-bcolar.onrender.com/${avatar}`} alt="User Avatar" />
        ) : (
          <DefaultAvatar>U</DefaultAvatar> // Default avatar
        )}
        <ProfileName>{fullName}</ProfileName> {/* Display the full name */}
      </ProfileContainer>

      <SidebarItems>
        <SidebarItem to="/userdashboard">
          <MdDashboard /> Dashboard
        </SidebarItem>
        <SidebarItem to="/category">
          <FiSettings /> Category
        </SidebarItem>
        <SidebarItem to="/booking-history">
          <FiBook /> Booking History
        </SidebarItem>

        
        <SidebarItem to="/chat">
          <FiMessageSquare /> Chat
        </SidebarItem>
        <SidebarItem to="/editProfile">
          <FiSettings /> Edit Profile
        </SidebarItem>
      </SidebarItems>
      <LogoutButton onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </LogoutButton>
    </SidebarContainer>
  );
};

export default UserSidebar;

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #e1e7f3;
  color: #0000ff;
  padding: 20px;
  height: 100vh;
  margin-top: 45px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 130px;  // Increased avatar size
  height: 130px; // Increased avatar size
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const DefaultAvatar = styled.div`
  width: 130px;  // Increased default avatar size
  height: 130px; // Increased default avatar size
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 32px;  // Increased font size for the default avatar
  margin-bottom: 5px;
`;

const ProfileName = styled.h3`
  color: #333;
  font-size: 18px;
  margin: 0;
`;

const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin-bottom: 15px;
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: gray;
    color: white;
  }
  &.active {
    background-color: gray;
    color: black;
  }
  svg {
    margin-right: 10px;
    font-size: 20px;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  &:hover {
    color: #e74c3c;
  }
  svg {
    margin-right: 10px;
    font-size: 20px;
  }
`;
