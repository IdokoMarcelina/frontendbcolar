import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import { FiSettings, FiMessageSquare, FiBook } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

const UserSidebar = () => {
    const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in.");
        return;
      }
      const response = await fetch("https://backend-bcolar.onrender.com/api/auth/logout", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
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
                
      <SidebarItems>
        <SidebarItem to="/userdashboard"> <MdDashboard /> Dashboard </SidebarItem>
        <SidebarItem to="/booking-history"> <FiBook /> Booking History </SidebarItem>
        <SidebarItem to="/chat"> <FiMessageSquare /> Chat </SidebarItem>
        <SidebarItem to="/editProfile"> <FiSettings /> Edit Profile </SidebarItem>
        <SidebarItem to="/changePassword"> <FiSettings /> Change Password </SidebarItem>
      </SidebarItems>
      <LogoutButton onClick={handleLogout}> <FaSignOutAlt /> Logout </LogoutButton>
    </SidebarContainer>
  );
};

export default UserSidebar;

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #E1E7F3 ;
  color: #0000ff;
  padding: 20px;
  height: calc(100vh - 50px);
  margin-top:45px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
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
  color: #0000ff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #2f2fcd;
    color: white;
  }
  &.active {
    background-color: #0000ff;
    color: white;
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

