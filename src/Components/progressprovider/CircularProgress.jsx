import React from 'react'
import './Progress.css'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

  const percentage = 66;

const CircularProgress = () => {
  return (
    <div style={{ padding: "40px 40px 40px 40px" }} >
    <div label="Stroke width" className='stroke'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10}
      />
     
    </div>
    <p className='tex'>Complete your profile</p>

    </div>
  )
}

export default CircularProgress