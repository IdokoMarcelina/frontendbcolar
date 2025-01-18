import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ServicePosts = () => {
    const user = localStorage.getItem('user');
    const artisanId = user._id
//   const { artisanId } = useParams(); 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  
  console.log(artisanId);
  
//   console.log('Token from localStorage:', token); 

  useEffect(() => {
    console.log('Component mounted or artisanId/token changed');

    const apiUrl = `https://backend-bcolar.onrender.com/api/service/getartisanpost`;
    console.log('API URL:', apiUrl);

    const fetchServicePosts = async () => {
      try {
        if (!token) {
          console.error('No authentication token found.');
          setError('No authentication token found.');
          setLoading(false);
          return;
        }

        console.log('Fetching service posts...');
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Attach the token in headers for authentication
            'Content-Type': 'application/json'
          }
        });

        console.log( response); // Log the response status

        if (!response.ok) {
          console.error('Failed to fetch service posts');
          throw new Error('Failed to fetch service posts');
        }

        const data = await response.json();
        console.log('Fetched data:', data); 
        setPosts(data); 
      } catch (err) {
        console.error('Error fetching service posts:', err.message); 
        setError(err.message); 
      } finally {
        console.log('Fetch operation completed');
        setLoading(false); 
      }
    };

    fetchServicePosts(); 
  }, []);

  if (loading) {
    console.log('Loading posts...');
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error:', error); 
    return <p>Error: {error}</p>;
  }

  console.log('Rendering posts...');
  return (
    <div>
      <h1>Service Posts by Artisan {artisanId}</h1>
      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))
        ) : (
          <p>No service posts available.</p>
        )}
      </div>
    </div>
  );
};

export default ServicePosts;
