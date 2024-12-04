import React from 'react'
import Details from '../Components/Details'
import Bio from '../Components/Bio'
import './Profile.css'

const Profile = () => {
  return (
    <>
    <div className='profile'>
    <Details/>
    <Bio/>
    </div>
    </>
  )
}

export default Profile