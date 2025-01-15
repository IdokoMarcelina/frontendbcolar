import React,{ useState, useEffect } from 'react'
import Details from '../Components/Details'
import Bio from '../Components/Bio'
import './Profile.css'

const Profile = () => {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getLoggedInStatus = async () => {
    const url = "https://backend-bcolar.onrender.com/api/profile/loginstatus"; 
    // const body = {
    //   email: "aitmacelina@gmail.com", 
    //   password: "@Mimi1234",   
    // };

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(body),
  
      });
      console.log("response",response)
      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      // const result = await response.json();
      const result = await response.ok;
      // const neww = await response.ok
      // console.log("result",result)
      // console.log("new",neww)

      if (result) {
        // Assuming the response includes profile data
        // setName(result.profile.name);
        // setAvatar(result.profile.avatar);
      } else {
        throw new Error("User not logged in");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoggedInStatus();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <>
    <div className='profil'>
    <Details name={name} avatar={avatar}/>
    <Bio/>
    </div>
    </>
  )
}

export default Profile