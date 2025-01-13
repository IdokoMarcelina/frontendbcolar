import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const dashboardRedirect = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/signin');
          return;
        }

        const response = await axios.get('https://backend-bcolar.onrender.com/api/auth/mydashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { user_type } = response.data;

        if (user_type === 'admin') {
          navigate('/admin');
        } else if (user_type === 'artisan') {
          navigate('/artisandashboard');
        } else {
          navigate('/userdashboard');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        navigate('/signin');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Redirecting...</div>;
};

export default dashboardRedirect;
