import React from 'react'
import { FaEdit } from "react-icons/fa";
import './Edit.css'
const Profilecard = () => {
  return (
    <div className="prof">
    <div className="cad">
      <img
        src="https://via.placeholder.com/80"
        alt="Profile"
        className="detail"
      />
      <div>
        <h2 className="name">Rafiqul Rahman</h2>
        <p className="team">Team Manager</p>
        <p className="location">Leeds, United Kingdom</p>
      </div>
    </div>
    <button className="icn">
      <FaEdit />
      <span>Edit</span>
    </button>
  </div>
  )
}

export default Profilecard