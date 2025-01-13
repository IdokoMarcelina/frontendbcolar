import React from 'react'
import Profilecard from './Profilecard'
import Infosections from './Infosections';
import './Edit.css'
const Edit = () => {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleUpdate = async () => {
    const url = "http://localhost:3000/api/profile/updateuser"; // Replace with your API URL
    const formData = new FormData();

    formData.append("name", name);
    formData.append("avatar", avatar);

    try {
      const response = await fetch(url, {
        method: "PATCH",
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
    <div className="min-h-screen bg-gray-100 p-5 md:p-10"   onSubmit={(e) => {
      e.preventDefault();
      handleUpdate();
    }}>
    <div className="max-w-4xl mx-auto space-y-5">
      <Profilecard  type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}/>
      <Infosections title="Personal Information" fields={personalInfo}  type="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])} />
      <Infosections title="Address" fields={addressInfo} />
    </div>
    <button type="submit">Update</button>
  </div>
  )
}

export default Edit