import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GotoButton from '../GotoButton';

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
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;  /* Center the content vertically */
  align-items: center;  /* Center the content horizontally */
  text-align: center; 
`;

const PostImage = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 50px;
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

  const deletePost = async (postId) => {
    const apiUrl = `https://backend-bcolar.onrender.com/api/service/deleteartisanpost/${postId}`;
    
    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      // Remove the deleted post from the UI
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <GotoButton/>
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
              <button
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  margin: '0px',
                  width: '200px',
                  height: '40px'
                }}
                onClick={() => deletePost(post._id)} 
              >
                Delete
              </button>
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
