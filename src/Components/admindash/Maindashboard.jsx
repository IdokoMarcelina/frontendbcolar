import React from "react";
import styled from "styled-components";
import { FaUsers, FaHammer, FaTools, FaChartBar } from "react-icons/fa";

const MainDashboard = () => {
  const cards = [
    { title: "Users", icon: <FaUsers />, value: 500, color: "#4CAF50" },
    { title: "Artisans", icon: <FaHammer />, value: 120, color: "#2196F3" },
    { title: "Most-Used Service", icon: <FaTools />, value: 200, color: "#FF9800" },
    { title: "Least-Used Service", icon: <FaChartBar />, value: 30, color: "#F44336" },
  ];

  return (
    <Container>
      <Dashboard>
        {cards.map((card, index) => (
          <Card key={index} cardColor={card.color}>
            <CardBody>
              <h3>{card.title}</h3>
              <Value>{card.value}</Value>
            </CardBody>
            <CardFooter>
              <ViewAll>View All</ViewAll>
              <Icon color={card.color}>{card.icon}</Icon>
            </CardFooter>
          </Card>
        ))}
      </Dashboard>
    </Container>
  );
};

export default MainDashboard;

// Styled Components

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 220px;
  width: 170px; // Default width
  color: ${(props) => props.cardColor || "#fff"};

  @media (max-width: 800px) {
    width: 150%; // Increase width on smaller screens
    height: 250px; // Adjust height to maintain proportion
    margin: 10px 0; // Add spacing between centered cards
  }
`;

const CardBody = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Value = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  position: absolute;
  bottom: 10px;
`;

const ViewAll = styled.span`
  font-size: 14px;
  color: #555;
  cursor: pointer;
  margin-left: 10px;
`;

const Icon = styled.span`
  font-size: 20px;
  color: ${(props) => props.color};
  cursor: pointer;
  margin-right: 10px;
`;
