import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt, FaUserSecret } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { MdOutlineJoinFull } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import chef from '../../assets/images/chef.jpg';

function AdminSidebar() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }
      const response = await fetch("https://backend-bcolar.onrender.com/api/auth/getAllUsers", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      setUsers(data.users || []);
      setModalTitle("All Users");
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchArtisans = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }
      const response = await fetch("https://backend-bcolar.onrender.com/api/auth/getAllArtisans", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      setArtisans(data.artisans || []);
      setModalTitle("All Artisans");
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching artisans:", error);
    }
  };

  const logoutUser = async () => {
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
    <>
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

        <div className="line"><hr /></div>

        <div className="part-two">
          <li><MdDashboard className="icons" /> Dashboard</li>
          <li onClick={fetchUsers}><FaUserAlt className="icons" /> Users</li>
          <li onClick={fetchArtisans}><FaUserSecret className="icons" /> Artisans</li>
          {/* <li><MdOutlineShoppingBasket className="icons" /> Ratings and Review</li> */}
          <li onClick={() => navigate("/productpage")}><FaServicestack className="icons" /> Services</li>
          <li onClick={() => navigate("/collabo")}><MdOutlineJoinFull className="icons" /> Collabo</li>
        </div>

        <div className="line"></div>

        <div className="partone">
          <li onClick={logoutUser}><GrLogout className="icons" /> Logout</li>
        </div>
      </Sidebar>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h2>{modalTitle}</h2>
            <UserList>
              {(modalTitle === "All Users" ? users : artisans).length === 0 ? (
                <p>No records found.</p>
              ) : (
                (modalTitle === "All Users" ? users : artisans).map((item, index) => (
                  <UserCard key={index}>
                    <UserName>{item.name}</UserName>
                    <UserEmail>{item.email}</UserEmail>
                  </UserCard>
                ))
              )}
            </UserList>
            <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default AdminSidebar;

// Styled Components
const Sidebar = styled.div`
  background-color: #F3F6F9;
  color: black;
  padding: 20px;
  height: 100vh;
  position: fixed;
  width: 20%;
  margin-top: 50px;
  flex-direction: column;

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  li {
    list-style: none;
    padding: 10px;
    margin: 20px 0;
    cursor: pointer;
    &:hover {
      background-color: gray;
      border-radius: 50px;
    }
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  .avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
`;

const UserList = styled.div`
  margin-top: 10px;
  max-height: 60vh;
  overflow-y: auto;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const UserEmail = styled.div`
  font-size: 14px;
  color: gray;
`;

const CloseButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 10px;
  width: 100%;
  cursor: pointer;
`;

