import React from 'react'
import Profilecard from './Profilecard'
import Infosections from './Infosections';
import './Edit.css'
const Edit = () => {
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
      <Profilecard />
      <Infosections title="Personal Information" fields={personalInfo} />
      <Infosections title="Address" fields={addressInfo} />
    </div>
  </div>
  )
}

export default Edit