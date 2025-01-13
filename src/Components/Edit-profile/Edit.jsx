import React from 'react'
import Profilecard from './Profilecard'
import Infosections from './Infosections';
import{ useState, useEffect } from 'react'
import './Edit.css'
const Edit = () => {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent form default submission behavior

    const url = "https://backend-bcolar.onrender.com/api/profile/updateuser"; // Replace with your API URL
    const formData = new FormData();

    formData.append("name", name);
    if (avatar) formData.append("avatar", avatar); // Only append if avatar exists

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update");
      }

      const result = await response.json();
      console.log("Update successful:", result);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  const personalInfo = [
    { label: "First Name", value: "Rafiqul" },
    { label: "Last Name", value: "Rahman" },
    { label: "Email address", value: "rafiqulrahman51@gmail.com" },
    { label: "Phone", value: "+09 345 346 46" },
    { label: "Bio", value: "Team Manager" },
  ];

  const addressInfo = [
    { label: "Country", value: "United Kingdom" },
    { label: "City/State", value: "Leeds, East London" },
    { label: "Postal Code", value: "ERT 2354" },
    { label: "TAX ID", value: "AS454645756" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5 md:p-10">
      <div className="max-w-4xl mx-auto space-y-5">
        <form onSubmit={handleUpdate}>
          {/* Profile Card */}
          <div className="profile-card bg-white shadow rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-4">Update Profile</h2>
            <div className="flex flex-col space-y-4">
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Avatar</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  className="mt-1 block w-full"
                />
              </label>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="bg-white shadow rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <ul>
              {personalInfo.map((field, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{field.label}</span>
                  <span className="text-gray-500">{field.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <ul>
              {addressInfo.map((field, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{field.label}</span>
                  <span className="text-gray-500">{field.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Submit Button */}
          <div className="text-right mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit