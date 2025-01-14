import React, { useState } from "react";
import capenter from '../assets/images/capenter.jpg'
import './Bio.css'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import ClickButton from "./chat-button/ClickButton";
import EditButton from "./chat-button/EditButton";
const Bio = () => {

    // State to track unread messages
    const [unreadMessages, setUnreadMessages] = useState(0);

    
    const receiveMessage = () => {
      setUnreadMessages(prev => prev + 1);
    };
  
    // Function to mark messages as read
    const markAsRead = () => {
      setUnreadMessages(0);
    };
  return (
    <div className='contains'>
      <div className='chats'>
       
        <Link to="/edit">
      <EditButton/>
      </Link>
        <Link to="/chat">
        <ClickButton/>
      </Link>
      
      </div>
      <div className='freelance'>
        <ul>
        <li>Freelance</li>
        <li>Project</li>
        <li>Merchant</li>
        <Link to="/collabo">
        <li>Collaborate</li>
        </Link>
        </ul>
        
      </div>

      {/* statics */}

      <div className='statics'>
        <h3>Statics</h3>
       <div className='Cards'>
       <div className='card-1'>
          <h4>12</h4>
          <p>completed projects</p>
        </div>
        <div className='card-2'>
          <h4>02</h4>
          <p>projects in progress</p>
        </div>
        <div className='card-3'>
          <h4>12</h4>
          <p>Total reviews</p>
        </div>
        <div className='card-4'>
          <h4>12</h4>
          <p>total points gain</p>
        </div>
        <div className='rate'>
          <div><p>66%</p></div>
          <p>Project completed rate</p>
        </div>
        <div className='response'>
          <div><p>76%</p></div>
          <p>Response rate</p>
        </div>
       </div>
      </div>

      {/* about */}
      <div className='about'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, 
          odio. Voluptates sapiente vel pariatur? Sunt mollitia est non, 
          maiores laborum minima 
          obcaecati quo iusto, quia, fugit adipisci dolore distinctio consectetur?</p>
      </div>
      <div className='skills'>
        <h3>core skill</h3>
        <div className='core'>
          <p>Furniture</p>
          <p>Roofing</p>
          <p>Art work</p>
        </div>
      </div>
      
      {/* portfolios and reviews */}
      <div className='porfolios'>
       <div className='reviews'>
       <p>Porfolios</p>
       <p>Reviews</p>
       </div>
        <hr />
      </div>
      <div className='add'>
        <button>Add work</button>
      </div>
     {/* cards */}
     <Cards/>
     <div className='exper'>
      <div className='work'>
        <h3>Work experience</h3>
        <p> quasi, consequuntur tempora quisquam tempore!</p>
      </div>
      <div className='edu'>
        <h3>Education</h3>
        <p> quasi, consequuntur tempora quisquam tempore!</p>
      </div>
      <div className='qualif'>
        <h3>Qualification</h3>
        <p> quasi, consequuntur tempora quisquam tempore!</p>
      </div>
     </div>
    </div>
  )
}

export default Bio