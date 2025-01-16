import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Import axios for API requests

function Applications() {
  // State to store the fetched applications
  const [applications, setApplications] = useState([]);

  // Fetch applications from the API
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("http://backend-bcolar.onrender.com/api/service/getallService");
        setApplications(response.data); // Assuming the response is an array of applications
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []); // Empty dependency array to fetch data only once on mount

  // Handle the deletion of an application (artisan post)
  const handleDecline = async (id) => {
    try {
      const response = await axios.delete(`https://backend-bcolar.onrender.com/api/service/deleteartisanpost/${id}`);
      if (response.status === 200) {
        // Remove the deleted application from the state
        setApplications(applications.filter((app) => app.id !== id));
        alert(`Deleted application with ID: ${id}`);
      }
    } catch (error) {
      console.error("Error deleting application:", error);
      alert("Error deleting application.");
    }
  };

  const handleView = (id) => {
    alert(`Viewing application with ID: ${id}`);
  };

  return (
    <Container>
      <Title>Artisan posts</Title>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Application Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.date}</td>
              <td>
                <DeclineButton onClick={() => handleDecline(app.id)}>
                  Delete
                </DeclineButton>
                <ViewButton onClick={() => handleView(app.id)}>
                  View
                </ViewButton>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
  max-width: 800px;
  margin: 0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: justify;

  @media(max-width: 800px) {
    font-size: 20px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  thead th {
    background-color: #f8f9fa;
    color: #212529;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #e9ecef;
  }

  @media (max-width: 768px) {
    th:nth-child(2),
    th:nth-child(3),
    td:nth-child(2),
    td:nth-child(3) {
      display: none;
    }

    th,
    td {
      text-align: center;
    }
    th:first-child,
    td:first-child {
      width: 140px;
    }
    th:last-child,
    td:last-child {
      width: 500px;
    }
  }
`;

const DeclineButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #e41e2d;
  }
`;

const ViewButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;

export default Applications;
