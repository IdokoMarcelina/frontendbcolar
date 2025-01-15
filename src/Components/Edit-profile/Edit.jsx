import React from 'react'
import { FaEdit } from "react-icons/fa";
import Profilecard from './Profilecard'
import Infosections from './Infosections';
import{ useState, useEffect } from 'react'
import './Edit.css'
const Edit = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = "https://backend-bcolar.onrender.com/api/profile/updateuser"; // API URL
    const formData = new FormData();

    formData.append("name", name);
    formData.append("avatar", avatar);

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const result = await response.json();
      alert("Profile updated successfully!");
      console.log("Update successful:", result);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
            required
          />
        </div>

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

        <button type="submit" className="update-button" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Edit