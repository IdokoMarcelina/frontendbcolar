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
  

      {/* statics */}

      <div className='statics'>
        <h3>Pages</h3>
       <div className='Cards'>

       <div className='card-1'>
          <Link to="/collabo">
          <p>Collabo</p>
          
          </Link>
        </div>

        <div className='card-2'>
        <Link to="/productpage">
          <p>Services</p>
          
          </Link>
        </div>

        <div className='card-3'>
          <p>collabo Applications</p>
        </div>

        <div className='card-4'>
          <p>My service post</p>
        </div>

        <div className='card-4'>
          <p>My collabo post</p>
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
      
      
      
     
     {/* <Cards/> */}
  
    </div>
  )
}

export default Bio