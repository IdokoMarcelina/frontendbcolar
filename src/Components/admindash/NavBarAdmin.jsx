import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaBars } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md'; // Add other icons as needed

const NavBarAdmin = () => {
  // State to toggle sidebar visibility
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Function to handle the click on the hamburger icon
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <NavBar>
        <Logo>Bcolar</Logo>
        <SearchBar>
          <FaSearch style={searchIconStyles} />
          <input type="text" placeholder="Search..." />
        </SearchBar>
        <Icons>
          <FaBars onClick={toggleSidebar} />
        </Icons>
      </NavBar>

      {sidebarVisible && (
        <Sidebar>
          <div className="adminsidebar">
            <div className="title">
              <h4>Admin</h4>
            </div>
            <hr />
            <p className="sideTitles">MAIN</p>
            <span className="iconAndText">
              <MdDashboard className="iconsitself" />
              <li>Dashboard</li>
            </span>
            <p className="sideTitles">LISTS</p>
            <div className="partone">
              <li>User</li>
              <li>Artisan</li>
              <li>Ratings and Review</li>
            </div>
            <p className="sideTitles">USEFUL</p>
            <div className="partone">
              <li>Stats</li>
              <li>Notifications</li>
              <li>Messages</li>
              <li>Reports</li>
            </div>
            <p className="sideTitles">SERVICE</p>
            <div className="partone">
              <li>System Health</li>
              <li>Settings</li>
            </div>
            <p className="sideTitles">USER</p>
            <div className="partone">
              <li>Profile</li>
              <li>Logout</li>
            </div>
          </div>
        </Sidebar>
      )}
    </>
  );
};

// Styled Components

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #1818c9;
  color: white;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px 10px;
  flex-grow: 1;
  max-width: 400px;

  input {
    border: none;
    outline: none;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: block;
    gap: 10px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #1818c9;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const searchIconStyles = {
  marginRight: '8px',
  color: '#888',
};

export default NavBarAdmin;
