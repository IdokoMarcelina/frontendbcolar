import React from 'react'; 
import { Link } from 'react-router-dom';

function GotoButton() {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token || !user) {
    return <div>Please log in.</div>; // Handle cases where there's no logged-in user
  }

  // Inline style object
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '5px 20px',
    marginTop:'10px',
    marginLeft:'5px',
    marginBottom:'5px',
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '5px',
    textDecoration: 'none', // Removes underline from Link
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div>
      {user.user_type === "artisan" ? (
        <Link to="/artisandashboard" style={buttonStyle}>
          Go to dashboard
        </Link>
      ) : user.user_type === "user" ? (
        <Link to="/userdashboard" style={buttonStyle}>
          Go to dashboard
        </Link>
      ) : user.user_type === "admin" ? ( // Fixed condition for admin
        <Link to="/admindashboard" style={buttonStyle}>
          Go to dashboard
        </Link>
      ) : (
        <Link to="/" style={buttonStyle}>
          Goto 
        </Link>
      )}
    </div>
  );
}

export default GotoButton;
