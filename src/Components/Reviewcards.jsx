import React from 'react'
import Startrating from './Startrating'

const Reviewcards = ({ name, review, stars, image }) => {
  return (
    <div className="review-card">
     <img src={image} alt={name} className="review-image" />
      <div className="review-content">
        <h4 className="review-name">{name}</h4>
        <Startrating stars={stars}/>
        <p className="review-text">{review}</p>
        </div>
    </div>
  )
}

export default Reviewcards