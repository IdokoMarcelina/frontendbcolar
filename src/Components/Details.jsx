import React,{ useState, useEffect } from 'react'
import face from '../assets/images/face.jpg'
// import ChangingProgressProvider from "./ChangingProgressProvider";
import './Details.css'


const percentage = 66;
const Details = () => {
  
 
  return (
    <div className='Container'>
       <div className='Profile'>
        <h2>Profile information</h2>
        <img src={face} alt="" />
        <h3>Mohamend kamel</h3>
        <p>Capenter</p>
        <ul>
            {/* <li><img src={} alt="" /></li> */}
        </ul>
        <p>Member since 2024</p>
        <p>Active 5mins ago</p>
        {/* <div style={{ padding: "40px 40px 40px 40px" }}>  <div label="Default">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
    <div label="Stroke width">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
      />
    </div></div> */}

       </div>

       {/* contact */}
       <div className='contact'>
        <h2>Conctact information</h2>
        <p>moh@gmail.com</p>
        <p>070368029348</p>
        <p>lagos</p>
       </div>

       {/* total numbers of jobs completed */}
       <div className='job'>
       <p>Total job completed</p>
       <div><p>30</p></div>
       </div>

       {/* rating  */}
    </div>
  )
}

export default Details