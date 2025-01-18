import React, { useState, useEffect } from "react";
import './Bio.css';
import { Link } from 'react-router-dom';
import ClickButton from "./chat-button/ClickButton";
import EditButton from "./chat-button/EditButton";

const Bio = () => {
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [about, setAbout] = useState("");  // State to store the 'about' data
  const [loading, setLoading] = useState(true); // Loading state to track API call

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user._id);
  const artisanId = user._id
  
  // Fetch 'about' info from backend on component mount
  useEffect(() => {
    const fetchUserAbout = async () => {
      const url = "https://backend-bcolar.onrender.com/api/profile/getuser"; // Your API URL
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        console.log("Token:", token); // Log token to check it's being retrieved correctly

        const response = await fetch(url, {
          method: 'GET', // Ensure it's a GET request
          headers: {
            "Authorization": `Bearer ${token}`, // Send token in the header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        console.log("Fetched Data:", data); // Log the fetched data to see the response

        // Ensure that the 'about' field exists and is properly set
        if (data && data.about) {
          setAbout(data.about); // Set the 'about' data if it exists
        } else {
          console.warn("No 'about' field found in the response.");
          setAbout("Tell us about yourself here"); // Fallback text if no 'about' field is found
        }
      } catch (error) {
        console.error("Error fetching user about info:", error);
        setAbout("Error loading about info");  // Set an error message if fetch fails
      } finally {
        setLoading(false); // Mark loading as complete
      }
    };

    fetchUserAbout(); // Call function to fetch user about info
  }, []);  // Run once on component mount

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
          <EditButton />
        </Link>
        <Link to="/chat">
          <ClickButton />
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
            <p>Collabo Applications</p>
          </div>

          <div className='card-4'>
            <Link to = '/servicepost'>
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

      {/* about */}
      <div className='about'>
        <h3>About</h3>
        {loading ? (
          <p>Loading...</p> // Display loading while the data is being fetched
        ) : (
          <p>{about}</p> // Display fetched about data or fallback text
        )}
      </div>
    </div>
  );
};

export default Bio;
