import React, { useState, useEffect } from 'react';
import './ArtisanCard.css';
import { useNavigate, useParams } from 'react-router-dom';

const ArtisanCard = () => {
  const { artisanId } = useParams();

  const [artisan, setArtisan] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const url = `https://backend-bcolar.onrender.com/api/auth/getuserid?userId=${artisanId}`;
      const token = localStorage.getItem('token');

      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching artisan data...");

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        console.log("Response Status:", response.status);

        if (!response.ok) {
          throw new Error("Failed to authenticate");
        }

        const result = await response.json();
        console.log("API Response:", result);

        if (result && result.user) {
          setArtisan(result.user);
        } else {
          throw new Error("User not logged in");
        }
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  const handleMessageButtonClick = async () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user")); 
    const token = localStorage.getItem("token"); 
  
    if (!artisan || !artisan._id) {
      alert("Artisan ID is missing. Please try again.");
      return;
    }
  
    if (!loggedInUser || !loggedInUser._id) {
      alert("Logged-in user ID is missing. Please log in again.");
      return;
    }
  
    const chatData = {
      firstId: loggedInUser._id, 
      secondId: artisan._id, 
    };
  
    try {
      const response = await fetch("https://backend-bcolar.onrender.com/createChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify(chatData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create chat.");
      }
  
      const result = await response.json();

      if (result.data._id) {
        navigate('/chat')
      }else{
        throw new Error("An error occured");        
      }
      
    } catch (err) {
      console.error("Error creating chat:", err.message);
      alert("Error creating chat: " + err.message);
    }
  };
  
  

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={artisan.avatar || 'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black-thumbnail.png'}
            alt="Profile"
            className="profile-avatar"
          />
          <h2>{artisan.name || 'No name provided'}</h2>
          <p className="skills">
            {artisan.skills && artisan.skills.length > 0 ? artisan.skills.join(', ') : 'No skills provided'}
          </p>
          <p className="member-since">Member since {new Date(artisan.memberSince).getFullYear() || 'Unknown'}</p>
        </div>

        <div className="profile-body">
          <h3>About</h3>
          <p className="about-text">{artisan.about || 'No about information provided'}</p>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> {artisan.email || 'No email provided'}</p>
          <p><strong>Phone:</strong> {artisan.phone || 'No phone number provided'}</p>
          <p><strong>Location:</strong> {artisan.location || 'No location provided'}</p>
          <p><strong>Office Address:</strong> {artisan.officeAddress || 'No office address provided'}</p>
        </div>

        <button className='message-btn ' onClick={handleMessageButtonClick}>Message</button>
      </div>
    </div>
  );
};

export default ArtisanCard;
