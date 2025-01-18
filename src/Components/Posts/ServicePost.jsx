import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  h1{
    color: black;
  }
`;

const PostContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  color: black;
  font-size: 16px;
  width: 50%;
`;

const PostImage = styled.img`
  max-width: 200px;
  height: auto;
`;

const ServicePosts = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const artisanId = user?.name;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  
  useEffect(() => {
    if (!artisanId) {
      setError('Artisan ID not found.');
      setLoading(false);
      return;
    }

    const apiUrl = `https://backend-bcolar.onrender.com/api/service/getartisanpost?artisanId=${artisanId}`;

    const fetchServicePosts = async () => {
      try {
        if (!token) {
          setError('No authentication token found.');
          setLoading(false);
          return;
        }

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (!data) {
          throw new Error('Failed to fetch service posts');
        }

        setPosts(data); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchServicePosts(); 
  }, [artisanId, token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <h1>Service Posts by Artisan {artisanId}</h1>
      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostContainer key={index}>
              <h3>{post.name}</h3>
              <p><strong>Category:</strong> {post.category}</p>
              <p><strong>Region:</strong> {post.region}</p>
              <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
              {post.productPic && <PostImage src={post.productPic} alt={post.name} />}
            </PostContainer>
          ))
        ) : (
          <p>No service posts available.</p>
        )}
      </div>
    </Container>
  );
};

export default ServicePosts;
