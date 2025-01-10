import React,{ useState, useEffect } from 'react'
import Details from '../Components/Details'
import Bio from '../Components/Bio'
import './Profile.css'

const Profile = () => {

  // const [name, setName] = useState("");
  // const [avatar, setAvatar] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // const getLoggedInStatus = async () => {
  //   const url = "http://localhost:3300/api/profile/loginstatus"; 
  //   const body = {
  //     email: "aitmacelina@gmail.com", 
  //     password: "@Mimi1234",   
  //   };

  //   try {
  //     const response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to authenticate");
  //     }

  //     const result = await response.json();

  //     if (result.isLoggedIn) {
  //       // Assuming the response includes profile data
  //       setName(result.profile.name);
  //       setAvatar(result.profile.avatar);
  //     } else {
  //       throw new Error("User not logged in");
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getLoggedInStatus();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;


  return (
    <>
    <div className='profil'>
    <Details/>
    <Bio/>
    </div>
    </>
  )
}

export default Profile