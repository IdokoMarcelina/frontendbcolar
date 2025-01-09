import React from "react";
import styled from "styled-components";
import { FaUsers, FaHammer, FaTools, FaChartBar } from "react-icons/fa";

const MainDashboard = () => {
  const cards = [
    { title: "Users", icon: <FaUsers />, value: 500, color: "#4CAF50" },
    { title: "Artisans", icon: <FaHammer />, value: 120, color: "#2196F3" },
    { title: "Most-Used ", icon: <FaTools />, value: 200, color: "#2196F3" },
    { title: "Least-Used ", icon: <FaChartBar />, value: 30, color: "#F44336" },
  ];

  const handleViewAll = (title) => {
    alert(`Viewing all for ${title}`);
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
  background-color: #F3F6F9;
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
    width: 270px; /* Set card width to 400px */
    margin: 0 auto; /* Center align the card */
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Icon = styled.span`
  font-size: 30px; /* Increased icon size */
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
  color: #2196F3; /* Blue color to indicate it's clickable */
  cursor: pointer;
  text-align: center;
  margin-top: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #1976D2; /* Darker blue on hover */
  }

  &:active {
    color: #1565C0; /* Even darker blue when clicked */
  }
`;
