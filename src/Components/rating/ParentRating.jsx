import React from 'react'
import Ratings from './Ratings';



const ratingsData = {
    averageRating: 4.7,
  totalRatings: 40,
  starRatings: [
    { stars: 5, count: 34 },
    { stars: 4, count: 4 },
    { stars: 3, count: 2 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ],
  };

const ParentRating = () => {
  return (
    <div>
    <Ratings ratings={ratingsData} />
    </div>
  )
}

export default ParentRating