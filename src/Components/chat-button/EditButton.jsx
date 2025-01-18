import React from 'react'
import './ChatButton.css'
import {Link} from 'react-router-dom'
import Edit from '../Edit-profile/Edit'

const EditButton = () => {
  return (
    <div className='edit-profile-btn'>
     <Link to='/edit'>
        <button> Edit Profile</button>
     </Link>
    
    </div>
  )
}

export default EditButton