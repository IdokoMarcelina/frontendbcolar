import React,{ useState } from 'react'
import face from '../assets/images/face.jpg'
import './Details.css'

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
        <div className='percentage'><div><p>75%</p></div><p>Complete your profile</p></div>

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
    </div>
  )
}

export default Details