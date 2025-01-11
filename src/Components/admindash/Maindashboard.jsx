import React, { useState } from "react";
import styled from "styled-components";
import { FaUsers, FaHammer, FaTools, FaChartBar } from "react-icons/fa";
import axios from "axios";

const MainDashboard = () => {
  const [users, setUsers] = useState([]); // Holds the fetched users
  const [showUsers, setShowUsers] = useState(false);
  const [artisans, setArtisans] = useState([]);  // Correctly define artisans state
  const [showArtisans, setShowArtisans] = useState(false);   // Modal toggle state

  const cards = [
    { title: "Users", icon: <FaUsers />, value: 500, color: "#4CAF50" },
    { title: "Artisans", icon: <FaHammer />, value: 120, color: "#2196F3" },
    { title: "Most-Used", icon: <FaTools />, value: 200, color: "#2196F3" },
    { title: "Least-Used", icon: <FaChartBar />, value: 30, color: "#F44336" },
  ];

  // Function to handle fetching data based on card title
  const handleViewAll = async (title) => {
    if (title === "Users") {
      try {
        const token = localStorage.getItem("token"); // Retrieve token
        if (!token) {
          alert("No token found. Please log in.");
          return;
        }
  
        const response = await axios.get(
          "https://backend-bcolar.onrender.com/api/auth/getAllUsers",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in headers
            },
          }
        );
  
        // Update users state and show modal
        setUsers(response.data.users || []);
        setShowUsers(true);
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("Failed to fetch users. Please check your token or backend.");
      }
    } else if (title === "Artisans") {
      try {
        const token = localStorage.getItem("token"); // Retrieve token
        if (!token) {
          alert("No token found. Please log in.");
          return;
        }
  
        const response = await axios.get(
          "https://backend-bcolar.onrender.com/api/auth/getAllArtisans",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in headers
            },
          }
        );
  
        // Update artisans state and show modal
        setArtisans(response.data.artisans || []);
        setShowArtisans(true);
      } catch (error) {
        console.error("Error fetching artisans:", error);
        alert("Failed to fetch artisans. Please check your token or backend.");
      }
    } else {
      alert(`Viewing all for ${title}`);
    }
  };
  

  return (
    <Container>
      <Dashboard>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardContent>
              <Icon color={card.color}>{card.icon}</Icon>
              <TextContent>
                <Title>{card.title}</Title>
                <Value>{card.value}</Value>
              </TextContent>
            </CardContent>
            <ViewAll onClick={() => handleViewAll(card.title)}>View All</ViewAll>
          </Card>
        ))}
      </Dashboard>

      {/* Modal for Users */}
      {showUsers && (
        <UsersModal>
          <ModalContent>
            <h2>All Users</h2>
            <UserList>
              {users.length === 0 ? (
                <p>No users found.</p>
              ) : (
                users.map((user, index) => (
                  <UserCard key={index}>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                  </UserCard>
                ))
              )}
            </UserList>
            <CloseButton onClick={() => setShowUsers(false)}>Close</CloseButton>
          </ModalContent>
        </UsersModal>
      )}

{showArtisans && (
        <UsersModal>
          <ModalContent>
            <h2>All Artisans</h2>
            <UserList>
              {artisans.length === 0 ? (
                <p>No artisans found.</p>
              ) : (
                artisans.map((artisan, index) => (
                  <UserCard key={index}>
                    <UserName>{artisan.name}</UserName>
                    <UserEmail>{artisan.email}</UserEmail>
                  </UserCard>
                ))
              )}
            </UserList>
            <CloseButton onClick={() => setShowArtisans(false)}>Close</CloseButton>
          </ModalContent>
        </UsersModal>
        )}
    </Container>
  );
};

export default MainDashboard;

// Styled Components
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #f3f6f9;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 170px;
  overflow: hidden;
  position: relative;

  @media (max-width: 800px) {
    width: 270px;
    margin: 0 auto;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Icon = styled.span`
  font-size: 30px;
  color: ${(props) => props.color};
  margin-right: 10px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 14px;
  color: black;
  margin: 0;
`;

const Value = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: gray;
`;

const ViewAll = styled.span`
  font-size: 14px;
  color: #2196f3;
  cursor: pointer;
  text-align: center;
  margin-top: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #1976d2;
  }

  &:active {
    color: #1565c0;
  }
`;

const UsersModal = styled.div`
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
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
  }
`;

const UserList = styled.div`
  margin-top: 10px;
  max-height: 60vh;
  overflow-y: auto;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
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
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #1976d2;
  }

  &:active {
    background-color: #1565c0;
  }
`;
