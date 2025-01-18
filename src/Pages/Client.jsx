import React from 'react'
import Userenddetails from '../Components/Userenddetails'
import './Clients.css'
import Userend from '../Components/Userend'
import {useState,useEffect} from 'react'

const Client = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    const url = "https://backend-bcolar.onrender.com/api/profile/getuser";

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Authentication token not found. Please log in.");
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="profile">
        <Userenddetails />
        <Userend />
      </div>
    </div>
  );
};

export default Client