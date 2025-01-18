import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to extract the artisanId from the URL
import styled from 'styled-components';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

function CollaboPosts() {
  const { artisanId } = useParams(); // Extract artisanId from the URL params
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('hello');
    
    const fetchArtisanPosts = async () => {
      setLoading(true);
      try {
        if (!artisanId) {
          console.error("Artisan ID is missing!"); // Log if artisanId is missing
          setLoading(false);
          return;
        }

        const token = localStorage.getItem('token');
         const artisanId = localStorage.getItem('user', _id);
        if (!token) {
          console.error('No token found. Please log in.');
          setLoading(false);
          return;
        }

        console.log("Fetching collabo posts for Artisan ID:", artisanId); // Log artisanId

        const response = await axios.get(
          `https://backend-bcolar.onrender.com/api/collabo/getArticanCollaboPost/${artisanId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Collabo response:", response.data); // Log the API response

        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('Expected an array of posts, but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching artisan posts:', error.response || error);
      } finally {
        setLoading(false);
      }
    };

    if (artisanId) {
      fetchArtisanPosts();
    }
  }, []); 

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const artisanId = localStorage.getItem('user', _id);
      await axios.delete(`https://backend-bcolar.onrender.com/api/collabo/deleteCollabo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };


  useEffect(() => {
    console.log('Updated posts:', posts);
  }, [posts]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No collaboration posts found.</p>
      ) : (
        <WRAPPER>
          {posts.map((post) => (
            <COLLABOCARD key={post._id}>
              <IMAGE>
                <img src={post.collaboPic || 'default-placeholder.png'} alt={post.category} />
              </IMAGE>
              <TEXT>
                <p><strong>Category:</strong> {post.category}</p>
                <p><strong>Description:</strong> {post.description}</p>
                <div><strong>Requirement:</strong> {post.requirements}</div>
              </TEXT>
              <DeleteButton onClick={() => handleDelete(post._id)}>
                <FaTrash /> Delete
              </DeleteButton>
            </COLLABOCARD>
          ))}
        </WRAPPER>
      )}
    </div>
  );
}

export default CollaboPosts;

const WRAPPER = styled.div`
  display: grid;
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

const COLLABOCARD = styled.div`
  max-width: 400px;
  background-color: white;
  margin-top: 20px;
  border: 1px solid gainsboro;
  border-radius: 9px;
  text-align: center;
`;

const IMAGE = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TEXT = styled.div`
  width: 350px;
  padding: 10px;
  text-align: justify;
`;

const DeleteButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: darkred;
  }
`;
