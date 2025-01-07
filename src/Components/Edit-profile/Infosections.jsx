import React from 'react'
import './Edit.css'
import { FaEdit } from "react-icons/fa";
const Infosections = ({ title, fields }) => {
  return (
    <div className="info">
    <div className="back">
      <h3 className="title">{title}</h3>
      <button className="icon">
        <FaEdit />
        <span>Edit</span>
      </button>
    </div>
    <div className="index">
      {fields.map((field, index) => (
        <div key={index}>
          <h4 className="field">{field.label}</h4>
          <p className="value">{field.value}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Infosections