import React, { useState, useEffect } from 'react';
import Details from '../Components/Details';
import Bio from '../Components/Bio';
import './Profile.css';

const Profile = () => {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [skills, setSkills] = useState([]);  // Changed from occupation to skills
  const [memberSince, setMemberSince] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");  // LGA field for location
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      const url = "https://backend-bcolar.onrender.com/api/profile/getuser"; 
      const token = localStorage.getItem('token'); // Get the token from localStorage

      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Add token to the Authorization header
          },
        });

        console.log("response", response);

        if (!response.ok) {
          throw new Error("Failed to authenticate");
        }

        const result = await response.json();

        if (result && result.user) {
          setName(result.user.name); 
          setAvatar(result.user.avatar); 
          setSkills(result.user.skill);  // Fetch skills instead of occupation
          setMemberSince(result.user.created_at); 
          setEmail(result.user.email); 
          setPhone(result.user.phone); 
          setLocation(result.user.LGA);  // Fetch LGA for location
        } else {
          throw new Error("User not logged in");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='profil'>
      <Details 
        name={name} 
        avatar={avatar} 
        skills={skills}  
        memberSince={memberSince}
        email={email}
        phone={phone}
        location={location} 
      />
      <Bio />
    </div>
  );
};

export default Profile;
