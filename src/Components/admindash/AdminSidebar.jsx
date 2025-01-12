import React, { useState } from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt, FaUserSecret, FaEnvelope } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";
import chef from "../../assets/images/chef.jpg";

function AdminSidebar() {
  const [user, setUser] = useState(null); // State to hold user details
  const [error, setError] = useState(null); // State to hold error messages

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        "https://backend-bcolar.onrender.com/api/profile/getuser",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Send token for authentication
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const data = await response.json();
      setUser(data); // Update user details
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Update error state
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
        <li>
          <MdDashboard className="icons" /> Dashboard
        </li>
        <li>
          <FaUserAlt className="icons" /> User
        </li>
        <li>
          <FaUserSecret className="icons" /> Artisan
        </li>
        <li>
          <MdOutlineShoppingBasket className="icons" /> Ratings and Review
        </li>
        <li>
          <IoIosNotificationsOutline className="icons" /> Notifications
        </li>
        <li>
          <FaEnvelope className="icons" /> Messages
        </li>
      </div>

      <div className="partone">
        <li onClick={fetchUserDetails}>
          <CgProfile className="icons" /> Profile
        </li>
        <li>
          <GrLogout className="icons" /> Logout
        </li>
      </div>

      {/* Display user details or error message */}
      <div>
        {user && (
          <div>
            <h4>User Details:</h4>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
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
  background-color: #f3f6f9;
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
