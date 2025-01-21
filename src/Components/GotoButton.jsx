import React from 'react';
import { Link } from 'react-router-dom';

function GotoButton() {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token || !user) {
    return <div>Please log in.</div>; // Handle cases where there's no logged-in user
  }

  return (
    <div>
      {user.user_type === "artisan" ? (
        <Link to="/artisandashboard">
          <div>Goto</div>
        </Link>
      ) : user.user_type  === "user" ? (
        <Link to="/userdashboard">
          <div>Goto</div>
        </Link>
      ) : user.user_type  === "user" ? (
        <Link to="/admin">
          <div>Goto</div>
        </Link>
      ) : (
        <Link to="/">
          <div>Goto</div>
        </Link>
      )}
    </div>
  );
}

export default GotoButton;
