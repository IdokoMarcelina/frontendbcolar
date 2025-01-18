import React, { useState, useEffect } from 'react';
import './Edit.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Edit = ({ onClose = () => {} }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [Lga, setLga] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState(""); // New state for about field
  const [state, setState] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch user details from the DB when the component mounts
  useEffect(() => {
    const fetchUserDetails = async () => {
      const url = "https://backend-bcolar.onrender.com/api/profile/getuser"; // API URL to fetch the user details

      try {
        const token = localStorage.getItem("token"); // Get the token from localStorage
        const response = await fetch(url, {
          headers: {
            "Authorization": `Bearer ${token}`, // Send token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        // Populate fields with user details
        setName(data.name || "");
        setPhone(data.phone || "");
        setLga(data.regionLGA || "");
        setBio(data.bio || "");
        setAbout(data.about || ""); // Populate about field
        setState(data.state || "");
        setOfficeAddress(data.officeAddress || "");
        setSkill(data.skill || "");
        setAvatar(data.avatar || null); // If avatar is provided, set it
      } catch (error) {
        console.error("Error fetching user details:", error);
        alert("Failed to fetch user details.");
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = "https://backend-bcolar.onrender.com/api/profile/updateuser"; // API URL to update user details
    const formData = new FormData();

    // Append only the fields that are not empty or modified
    if (name) formData.append("name", name);
    if (phone) formData.append("phone", phone);
    if (Lga) formData.append("LGA", Lga);
    if (bio) formData.append("bio", bio);
    if (about) formData.append("about", about); // Include about field
    if (state) formData.append("state", state);
    if (officeAddress) formData.append("officeAddress", officeAddress);
    if (skill) formData.append("skill", skill);

    // Check if an avatar file is selected
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "PATCH", // Use PATCH instead of POST
        body: formData,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`, // Pass token in the header
        },
      });

      const text = await response.text(); // Read the response as text

      if (!response.ok) {
        console.error("API Error:", text); // Log the error message from the server
        throw new Error("Failed to update profile");
      }

      // Check if the response is in JSON format
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        try {
          const result = JSON.parse(text); // Try to parse the text as JSON
          alert("Profile updated successfully!");
          console.log("Update successful:", result);
          onClose(); // Close modal after successful update
          navigate('/dashboard'); // Navigate to the dashboard after successful update
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Failed to update profile. Invalid response format.");
        }
      } else {
        console.error("Received non-JSON response:", text);
        alert("Failed to update profile. Invalid response format.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
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

          {/* Name */}
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

          {/* Phone */}
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

          {/* LGA */}
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

          {/* Bio */}
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter your bio"
              className="input-field"
            />
          </div>

          {/* About */}
          <div className="form-group">
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)} // Handle about field change
              placeholder="Enter a brief description about yourself"
              className="input-field"
            />
          </div>

          {/* State */}
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

          {/* Office Address */}
          <div className="form-group">
            <label htmlFor="officeAddress">Office Address</label>
            <input
              type="text"
              id="officeAddress"
              value={officeAddress}
              onChange={(e) => setOfficeAddress(e.target.value)}
              placeholder="Enter your office address"
              className="input-field"
            />
          </div>

          {/* Skill */}
          <div className="form-group">
            <label htmlFor="skill">Skill</label>
            <input
              type="text"
              id="skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Enter your skill"
              className="input-field"
            />
          </div>

          {/* Avatar */}
          <div className="form-group">
            <label htmlFor="avatar">Profile Picture</label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="input-file"
            />
          </div>

          {/* Update Button */}
          <button type="submit" className="update-button" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
