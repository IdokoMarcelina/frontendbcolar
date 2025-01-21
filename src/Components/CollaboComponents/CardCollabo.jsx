import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import GotoButton from '../GotoButton';

function CardCollabo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user')); // Get user from localStorage

        if (!token || !user) {
          console.error('No token or user found. Please log in.');
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

  const handleApplyClick = async (id) => {
    const user = JSON.parse(localStorage.getItem('user')); // Get user from localStorage
    if (!user) {
      console.error('No user found in localStorage');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `https://backend-bcolar.onrender.com/api/collabo/applyForCollabo/${id}/apply`,
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        setPosts(posts.map((post) =>
          post._id === id ? { ...post, isApplied: true } : post
        ));
        alert('Application submitted successfully');
      }
    } catch (error) {
      console.error('Error applying for collabo:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      (post.category || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.description || "").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div>
      <GotoButton/>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search by category..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Link to="/post-gig">
          <PostGigButton>
            <FaPlusCircle className="icon" />
            <p>Post Gig</p>
          </PostGigButton>
        </Link>
      </SearchWrapper>

      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredPosts.length === 0 ? (
          <p>No collaborations found matching your search.</p>
        ) : (
          <WRAPPER>
            {filteredPosts.map((post) => (
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

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 70%;
  max-width: 500px;
  font-size: 16px;
  border: 3px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #0000ff;
  }
`;

const PostGigButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #1313aa;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  .icon {
    font-size: 20px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  &:hover {
    background-color: #4444ff;
  }
`;

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
