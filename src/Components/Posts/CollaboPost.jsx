import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  h1 {
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

const Button = styled.button`
  margin: 10px;
  padding: 8px 12px;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
`;

const DeleteButton = styled(Button)`
  background-color: red;
`;

const ViewButton = styled(Button)`
  background-color: blue;
`;

const ApplyButton = styled(Button)`
  background-color: green;
`;

const CollaboPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applicants, setApplicants] = useState([]);

  // Retrieve user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  const artisanId = user?.id || user?._id;
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!artisanId) {
      console.error("Artisan ID not found.");
      setError('Artisan ID not found.');
      setLoading(false);
      return;
    }

    const apiUrl = `https://backend-bcolar.onrender.com/api/collabo/getArticanCollaboPost/${artisanId}`;

    const fetchCollaboPosts = async () => {
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
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollaboPosts();
  }, [artisanId, token]);

  // Delete a post
  const deletePost = async (postId) => {
    const apiUrl = `https://backend-bcolar.onrender.com/api/collabo/deleteCollabo/${postId}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete post.');
      }

      setPosts(posts.filter(post => post._id !== postId));
      alert('Post deleted successfully');
    } catch (err) {
      alert(err.message);
    }
  };

  // Fetch applicants for a post
  const viewApplicants = async (postId) => {
    const apiUrl = `https://backend-bcolar.onrender.com/api/collabo/viewCollaboApplicants/${postId}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch applicants.');
      }

      const data = await response.json();
      setApplicants(data);
      alert(`Applicants: ${data.length > 0 ? data.map(a => a.name).join(', ') : "No applicants yet"}`);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <h1>Collabo Posts by Artisan {artisanId}</h1>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostContainer key={post._id}>
              <h3>{post.category}</h3>
              <p><strong>Description:</strong> {post.description}</p>
              <p><strong>Requirements:</strong> {post.requirements}</p>
              <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
              {post.collaboPic && <PostImage src={post.collaboPic} alt={post.category} />}
              <p><strong>Applicants:</strong> {post.applicants.length}</p>

              {/* Action Buttons */}
              <DeleteButton onClick={() => deletePost(post._id)}>Delete</DeleteButton>
              <ViewButton onClick={() => viewApplicants(post._id)}>View Applicants</ViewButton>
            </PostContainer>
          ))
        ) : (
          <p>No collabo posts available.</p>
        )}
      </div>
    </Container>
  );
};

export default CollaboPosts;
