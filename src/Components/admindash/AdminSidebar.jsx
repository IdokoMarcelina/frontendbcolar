import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoBarChartSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";
import { TbHealthRecognition } from "react-icons/tb";
import { TbLogs } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import chef from '../../assets/images/chef.jpg'

function AdminSidebar() {
  const logoutUser = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      
      if (!token) {
        alert("You are not logged in.");
        return;
      }
  
      const response = await fetch("https:backend-bcolar.onrender.com/api/auth/logout", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Pass the token to verify the user
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        localStorage.removeItem("token"); // Remove token
        alert("Successfully logged out!");
        window.location.href = "/login"; // Redirect to login page or homepage
      } else {
        const errorText = await response.text();
        console.error('Logout failed:', errorText);
        alert("Error logging out.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Error during logout.");
    }
  };
  
  return (
    <Sidebar>
      <div className="title">
        
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

    <div className="line">
    <hr />
      
    </div>

      <div className="part-two">

      <li><MdDashboard className="icons" /> Dashboard</li>
    

      
    <li><FaUserAlt className="icons" /> Users</li>
    <li><FaUserSecret className="icons" /> Artisans</li>
    <li><MdOutlineShoppingBasket className="icons" /> Ratings and Review</li>
  

    {/* <li><IoIosNotificationsOutline className="icons" /> Notifications</li> */}
    {/* <li><FaEnvelope className="icons" /> Messages</li> */}


      </div>
      

  
    

    
      <div className="partone">
        {/* <li><CgProfile className="icons" /> Profile</li> */}
        <li onClick={logoutUser}><GrLogout className="icons" /> Logout</li>
      </div>
    </Sidebar>
  );
}

export default AdminSidebar;




const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-top: 50px;
  margin-top: 90px;
    position: fixed; /* Fix sidebar */
    top: 0;
    left: 20;

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
const Sidebar = styled.div`
  background-color: #F3F6F9;
  color: black;
  padding: 20px;
  display: flex;
  height: 150vh;
  flex-direction: column;
  

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

  
  /* .line {
    position: fixed;
    top: 110px;
    left: 0;
    height: 20px;
    z-index: 7;
    hr {
    margin: 100px 0;
    
  }
  } */

  .avatar {
    width: 50px;

    img {
      width: 50px;
    }
  }

  .partone {
    margin-top: 90px;
    position: fixed; /* Fix sidebar */
    top: 32rem;
    left: 20;
    
  }
  .part-two {
    margin-top: 90px;
    position: fixed; /* Fix sidebar */
    top: 5rem;
    left: 20;
    
  }

  @media (max-width: 768px) {
    display: none; // Hide sidebar on small screens
  }
`;
