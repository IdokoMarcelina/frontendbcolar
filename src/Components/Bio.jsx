import React, { useState, useEffect } from "react";
import './Bio.css';
import { Link } from 'react-router-dom';
import ClickButton from "./chat-button/ClickButton";
import EditButton from "./chat-button/EditButton";

const Bio = () => {
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [about, setAbout] = useState("");  
  const [loading, setLoading] = useState(true); 

  const user = JSON.parse(localStorage.getItem('user'));
  const artisanId = user._id
  
  useEffect(() => {
    const fetchUserAbout = async () => {
      const url = "https://backend-bcolar.onrender.com/api/profile/getuser"; 
      try {
        const token = localStorage.getItem("token"); 

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();

        if (data && data.about) {
          setAbout(data.about);
        } else {
          setAbout("Tell us about yourself here"); 
        }
      } catch (error) {
        setAbout("Error loading about info");  
      } finally {
        setLoading(false); 
      }
    };

    fetchUserAbout();
  }, []);  

  const receiveMessage = () => {
    setUnreadMessages(prev => prev + 1);
  };

  const markAsRead = () => {
    setUnreadMessages(0);
  };

  return (
    <div className='contains'>
      <div className='chats'>
        <Link to="/edit">
          <EditButton />
        </Link>
        <Link to="/chat">
          <ClickButton />
        </Link>
        <Link
          to="/logout"
          style={{
            display: 'inline',
            marginLeft: '10px',
            textDecoration: 'none',
            padding: '8px 20px',
            border: 'none',
            backgroundColor: 'red',
            borderRadius: '5px',
            color: 'white',
          }}
        >
          <p style={{ cursor: 'pointer', margin: 0 }}>logout</p>
        </Link>
      </div>

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

          <div className='card-4'>
            <Link to='/servicepost'>
              <p>My Service Post</p>
            </Link>
          </div>

          <div className='card-4'>
            <Link to="/collaboposts">
              <p>My Collabo Post</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='about'>
        <h3>About</h3>
        {loading ? (
          <p>Loading...</p> 
        ) : (
          <p>{about}</p> 
        )}
      </div>
    </div>
  );
};

export default Bio;
