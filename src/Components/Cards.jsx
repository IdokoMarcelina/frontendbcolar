import React from 'react'
import furniture from '../assets/images/furniture.jpg'
import './Cards.css'
const Cards = () => {
  return (
    <div className='furnish'>
        <div className='furniture'>
            <img src={furniture} alt="" />
            <p>furniture</p>
        </div>
        <div className='furniture'>
            <img src={furniture} alt="" />
            <p>furniture</p>
        </div>
    </div>
  )
}

export default Cards
