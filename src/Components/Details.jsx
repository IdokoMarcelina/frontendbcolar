import React from 'react';
import './Details.css';

const Details = ({ name, avatar, skills, memberSince, email, phone, location }) => {
  return (
    <div className='Contain'>
      <div className='Profile'>
        <h2>Profile Information</h2>
        <img src={avatar || 'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black-thumbnail.png'} alt="Profile" />  {/* Display avatar if available */}
        <h3>{name || 'No name provided'}</h3>  {/* Display user name */}
        <p>{skills && skills.length > 0 ? ` ${skills.join(', ')}` : 'No skills provided'}</p>  {/* Display skills as a comma-separated list */}
        <p>Member since {new Date(memberSince).getFullYear() || 'Unknown'}</p>  {/* Display membership year */}
      </div>

      {/* Contact Information */}
      <div className='contact'>
        <h2>Contact Information</h2>
        <p>{email || 'No email provided'}</p>
        <p>{phone || 'No phone number provided'}</p>
        <p>{location || 'No location provided'}</p>  {/* Display LGA as location */}
      </div>
    </div>
  );
};

export default Details;
