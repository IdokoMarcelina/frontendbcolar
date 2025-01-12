import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaBars } from 'react-icons/fa';
import { FaUserSecret } from "react-icons/fa";
import { MdDashboard } from 'react-icons/md'; 
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";
import { TbLogs } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import chef from '../../assets/images/chef.jpg'

const NavBarAdmin = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <NavBar>
      <Logo>
        <Link to="/">
          Bcolar
        </Link>
      </Logo>
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
              {/* <div className="title">
                    
                  <AvatarContainer>
                  <div className="avatar">
                    <img src={chef} alt="Admin Avatar" />
                    <div className="status"></div>
                  </div>
                  <div className="info">
                    <h6>Mimi Idoko</h6>
                    <span>Admin</span>
                  </div>
                </AvatarContainer>
                </div>
            
                  <hr />


                  
                          <li><MdDashboard className="icons" /> myyyDashboard</li>
                      
                  
                        
                          <li><FaUserAlt className="icons" /> User</li>
                          <li><FaUserSecret className="icons" /> Artisan</li>
                          <li><MdOutlineShoppingBasket className="icons" /> Ratings and Review</li>
                        
                  
                          <li><IoIosNotificationsOutline className="icons" /> Notifications</li>
                          <li><FaEnvelope className="icons" /> Messages</li>
                          <li><TbLogs className="icons" /> Reports</li>
                    
                  
                    
                          <li><IoSettings className="icons" /> Settings</li>
                      
                  
                      
                        <div className="partone">
                          <li><CgProfile className="icons" /> Profile</li>
                          <li><GrLogout className="icons" /> Logout</li>
                        </div> */}
        </Sidebar>
      )}
    </>
  );
};


const NavBar = styled.nav`
  position: fixed; /* Fix navbar */
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #F3F6F9;
  color: black;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #007BFF;

  a {
    color: #007BFF;
    text-decoration: none; /* Remove underline */
  }

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
  display: none;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: block;
    gap: 10px;
  }
`;

const Sidebar = styled.div`
  background-color: #F3F6F9;
  color: black;
  padding: 20px;
  display: none;
  height: 100vh;
  flex-direction: column;
  position: fixed; /* Fixed position */
  top: 50px;
  left: 0;
  z-index: 5;
  width: 100%;
  

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  li {
    list-style: none;
    padding: 10px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s, border-radius 0.3s;

    &:hover {
      background-color: gray;
      border-radius: 50px;
    }

    &.active {
      background-color: gray;
      border-radius: 50px;
    }

    .icons {
      margin-right: 10px;
    }
  }

  hr {
    margin: 10px 0;
  }

  .avatar {
    width: 50px;

    img {
      width: 50px;
    }
  }

  .partone {
    margin-top: auto;

    
  }

  @media (max-width: 1300px) {
    display: block; 
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const searchIconStyles = {
  marginRight: '8px',
  color: '#888',
};


const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-bottom: 1rem;

  .avatar {
    position: relative;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .status {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 10px;
      height: 10px;
      background: var(--success, green);
      border: 2px solid white;
      border-radius: 50%;
    }
  }

  .info {
    margin-left: 1rem;

    h6 {
      margin: 0;
    }

    span {
      color: gray;
      font-size: 0.9rem;
    }
  }
`;

export default NavBarAdmin;
