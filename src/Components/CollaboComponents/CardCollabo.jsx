import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function CardCollabo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token'); 

        if (!token) {
          console.error('No token found. Please log in.');
          setLoading(false);
          return;
        }

        const response = await axios.get('https://backend-bcolar.onrender.com/api/collabo/getAllCollabo', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const postsWithState = response.data.map(post => ({
          ...post,
          isApplied: false,
        }));
        setPosts(postsWithState);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleApplyClick = (id) => {
    setPosts(posts.map((post) =>
      post._id === id ? { ...post, isApplied: !post.isApplied } : post
    ));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.length === 0 ? (
          <p>No collaborations available. Please check back later!</p>
        ) : (
          <WRAPPER>
            {posts.map((post) => (
              <COLLABOCARD key={post._id}>
                <IMAGE>
                  <img src={post.collaboPic || 'default-placeholder.png'} alt={`Post ${post._id}`} />
                </IMAGE>
                <TEXT>
                  <p><strong>Category:</strong> {post.category}</p>
                  <p><strong>Description:</strong> {post.description}</p>
                  <div><strong>Requirement:</strong> {post.requirements}</div>
                </TEXT>
                <button onClick={() => handleApplyClick(post._id)}>
                  {post.isApplied ? 'Applied' : 'Apply'}
                </button>
              </COLLABOCARD>
            ))}
          </WRAPPER>
        )
      )}
    </div>
  );
}

export default CardCollabo;

const COLLABOCARD = styled.div`
  height: fit-content;
  max-width: 400px;
  background-color: white;
  margin-top: 20px;
  border: 1px solid gainsboro;
  border-radius: 9px;

  button {
    background-color: #0000ff;
    border: 1px solid #0000ff;
    border-radius: 10px;
    height: 35px;
    color: white;
    width: 350px;
    margin: 10px 20px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #0000aa;
    }
  }

  @media (max-width: 1300px) {
    max-width: 350px; 
    button {
      width: 300px; 
      margin: 10px auto; 
    }
  }
  @media (max-width: 768px) {
    max-width: 90%;
    margin-top: 20px;

    button {
      width: 90%;
      margin: 25px 10px 15px;
    }
  }
`;

const WRAPPER = styled.div`
  display: grid;
  margin-top: 2px;
  background-color: gainsboro;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; 
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;

const TEXT = styled.div`
  width: 350px;
  text-align: justify;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IMAGE = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 100%;

    img {
      object-fit: fill;
    }
  }
`;
