import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Avatar } from "antd";
import { Link } from "react-router-dom"; 

const SubNav = ({ toggleSidebar }) => {
  const [messages, setMessages] = useState(["Message 1", "Message 2"]);
  const [notifications, setNotifications] = useState(["Notification 1"]);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [userInitials, setUserInitials] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      const initials = parsedUser.name ? parsedUser.name.charAt(0).toUpperCase() : "U";
      setUserInitials(initials);
    }
  }, []);

  const markAllAsRead = (type) => {
    if (type === "messages") setMessages([]);
    if (type === "notifications") setNotifications([]);
  };

  const toggleDropdown = (type) => {
    if (type === "messages") setShowMessages(!showMessages);
    if (type === "notifications") setShowNotifications(!showNotifications);
  };

  return (
    <SubNavContainer>
      <HeaderLeft>
        <MenuIcon onClick={toggleSidebar} />
      </HeaderLeft>

      <HeaderCenter>
        <StyledLink to="/"> <h3>Home</h3> </StyledLink>
        <StyledLink to="/category"> <h3>Category</h3> </StyledLink>
        <StyledLink to="/contact"> <h3>Contact</h3> </StyledLink>
      </HeaderCenter>

      <HeaderRight>
        <DropdownContainer onClick={() => toggleDropdown("messages")}>
          Messages <MdArrowDropDown />
          {showMessages && (
            <DropdownContent>
              {messages.map((msg, index) => (
                <DropdownItem key={index}>{msg}</DropdownItem>
              ))}
              <MarkAllButton
                onClick={() => markAllAsRead("messages")}
                disabled={!messages.length}
              >
                Mark All as Read
              </MarkAllButton>
            </DropdownContent>
          )}
        </DropdownContainer>
        <DropdownContainer onClick={() => toggleDropdown("notifications")}>
          Notifications <MdArrowDropDown />
          {showNotifications && (
            <DropdownContent>
              {notifications.map((notif, index) => (
                <DropdownItem key={index}>{notif}</DropdownItem>
              ))}
              <MarkAllButton
                onClick={() => markAllAsRead("notifications")}
                disabled={!notifications.length}
              >
                Mark All as Read
              </MarkAllButton>
            </DropdownContent>
          )}
        </DropdownContainer>
        <Avatar style={{ backgroundColor: "#87d068" }}>
          {userInitials || "U"}
        </Avatar>
      </HeaderRight>
    </SubNavContainer>
  );
};

SubNav.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default SubNav;

import styled from "styled-components";

const SubNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  width: 100vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #f0f0f0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000; 
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderCenter = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  @media (max-width: 768px) {
    /* flex-direction: column; */
    width: 250px;
    align-items: center;

  }
  @media (max-width: 640px) {
    display: none;
    width: 250px;
    align-items: center;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
 
`;

const MenuIcon = styled(FaBars)`
  cursor: pointer;
  margin-right: 10px;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  @media (max-width: 640px) {
    display: none;
   
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 200px;
  border-radius: 4px;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

const MarkAllButton = styled.button`
  background: #1890ff;
  color: white;
  border: none;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  &:disabled {
    background: #d9d9d9;
    cursor: not-allowed;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0000ff;
  font-weight: bold; 
  &:hover {
    color: #0000ff;
    text-decoration: underline; 
  }
  @media (max-width: 768px) {
    /* margin-bottom: 10px; */
  }
`;
