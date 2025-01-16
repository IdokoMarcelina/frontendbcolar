import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserManagementCard = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found, user is not authenticated.");
        return;
      }

      const response = await fetch('https://backend-bcolar.onrender.com/api/auth/getAllUsers', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      if (response.ok) {
        const data = await response.json();
        if (data.users && typeof data.users === 'object') {
          setUsers(Object.values(data.users)); // Convert object to array
        } else {
          console.error('API response does not contain a valid users object');
        }
      } else {
        console.error(`Failed to fetch users: ${response.status}`);
      }
    } catch (error) {
      setError("Error fetching users");
      console.error('Error fetching users:', error);
    }
  };

  const assignAdminRole = async (userId) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("No token found. User is not authenticated.");
            return;
        }

        const response = await fetch(`https://backend-bcolar.onrender.com/api/admin/assign-admin/${userId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            alert("User assigned as Admin successfully!");
            fetchUsers(); // Refresh users after assigning admin role
        } else {
            const errorData = await response.json();
            alert(`Failed to assign admin role. Error: ${errorData.message || response.statusText}`);
            console.error('Error Response:', errorData);
        }
    } catch (error) {
        alert("Error assigning admin role.");
        console.error('Error assigning admin role:', error);
    }
};


  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <h2>User Management</h2>
      <SearchContainer>
        <input
          type="text"
          placeholder="Search by email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <UserList>
        {filteredUsers.length === 0 ? (
          <p>No users found.</p>
        ) : (
          filteredUsers.map((user) => (
            <UserCard key={user._id}>
              <UserInfo>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </UserInfo>
              <Button onClick={() => assignAdminRole(user._id)}>Make Admin</Button>
            </UserCard>
          ))
        )}
      </UserList>
    </Container>
  );
};

export default UserManagementCard;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const UserInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
  p {
    color: gray;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 15px;
  font-size: 1rem;
`;
