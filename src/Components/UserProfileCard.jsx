import React, { useEffect, useState } from "react";

const UserProfileCard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Fetch logged-in user's details
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("https://backend-bcolar.onrender.com/api/profile/getuser", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Send token for authentication
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserDetails();
  }, []);

  const handleEditProfile = () => {
    // Redirect to edit profile page or open a modal
    console.log("Edit Profile clicked");
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={cardStyle}>
      <img
        src={user.avatar || "default-avatar.png"}
        alt="Profile"
        style={imageStyle}
      />
      <h2 style={nameStyle}>{user.name}</h2>
      <p style={infoStyle}>{user.email}</p>
      <p style={infoStyle}>{user.phone}</p>
      <button onClick={handleEditProfile} style={buttonStyle}>
        Edit Profile
      </button>
    </div>
  );
};

// Styles
const cardStyle = {
  width: "300px",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  textAlign: "center",
  backgroundColor: "#fff",
};

const imageStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "15px",
};

const nameStyle = {
  fontSize: "1.5rem",
  margin: "10px 0",
};

const infoStyle = {
  fontSize: "1rem",
  color: "#666",
};

const buttonStyle = {
  padding: "10px 15px",
  fontSize: "1rem",
  color: "#fff",
  backgroundColor: "#007BFF",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default UserProfileCard;
