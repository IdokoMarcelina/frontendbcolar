import React,{ useState, useEffect } from 'react'
import face from '../assets/images/face.jpg'
// import ChangingProgressProvider from "./ChangingProgressProvider";
import './Details.css'
import Circularprogress from './Circularprogress';
import CircularProgress from './progressprovider/CircularProgress';


const percentage = 66;
const Details = () => {
  
 
  return (
    <div className='Contain'>
       <div className='Profile'>
        <h2>Profile information</h2>
        <img src={face} alt="" />
        <h3>Mohamend kamel</h3>
        <p>Capenter</p>
        <ul>
            {/* <li><img src={} alt="" /></li> */}
        </ul>
        <p>Member since 2024</p>
        {/* <CircularProgress/> */}
       

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