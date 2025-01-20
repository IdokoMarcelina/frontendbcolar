import React, { useState, useEffect } from 'react';
import '../Edit-profile/Edit.css';
import { useNavigate } from 'react-router-dom';

const EditUserProfile = ({ onClose = () => {} }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [Lga, setLga] = useState("");
  const [state, setState] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Fetch user details from the DB when the component mounts
  useEffect(() => {
    const fetchUserDetails = async () => {
      const url = "https://backend-bcolar.onrender.com/api/profile/getuser";

      try {
        const token = localStorage.getItem("token");
        console.log("Token retrieved:", token);  // Log the token

        if (!token) {
          alert("No token found, please log in again.");
          return;
        }

        const response = await fetch(url, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        console.log("Fetched user data:", data);  // Log the fetched user data

        setName(data.user.name || "");
        setPhone(data.user.phone || "");
        setLga(data.user.LGA || "");
        setState(data.user.state || "");
        setAvatar(data.user.avatar || null);
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        alert("Failed to fetch user details.");
      }
    };

    fetchUserDetails();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = "https://backend-bcolar.onrender.com/api/profile/updateuser";
    const formData = new FormData();

    console.log("Submitting profile update:", { name, phone, Lga, state, avatar });  // Log form data before submission

    if (name) formData.append("name", name);
    if (phone) formData.append("phone", phone);
    if (Lga) formData.append("LGA", Lga);
    if (state) formData.append("state", state);

    if (avatar) {
      console.log("Avatar file selected:", avatar.name);  // Log selected avatar file name
      formData.append("avatar", avatar);
    }

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "PATCH",
        body: formData,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const text = await response.text();
      console.log("Response text:", text);  // Log raw response text

      if (!response.ok) {
        console.error("API Error:", text);
        throw new Error("Failed to update profile");
      }

      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        try {
          const result = JSON.parse(text);
          console.log("Updated user profile:", result);  // Log updated user profile data
          alert("Profile updated successfully!");
          onClose();
          navigate('/userdashboard');
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Failed to update profile. Invalid response format.");
        }
      } else {
        console.error("Received non-JSON response:", text);
        alert("Failed to update profile. Invalid response format.");
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-modal">
      <div className="edit-container">
        <form className="edit-form" onSubmit={handleUpdate}>
          <h2 className="edit-header">Edit Profile</h2>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="LGA">LGA</label>
            <input
              type="text"
              id="LGA"
              value={Lga}
              onChange={(e) => setLga(e.target.value)}
              placeholder="Enter your LGA"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter your state"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Profile Picture</label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                console.log("File selected:", file);  // Log the selected file
                setAvatar(file);
              }}
              className="input-file"
            />
          </div>

          <button type="submit" className="update-button" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserProfile;
