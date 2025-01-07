import React from 'react'
import './rating.css'
import Reviewcards from './Reviewcards';

const reviews = [
    {
      id: 1,
      name: "Barbara Hines",
      review: "Ac neque quam, euismod nec ultricies elit mi nec amet. Est phasellus quis at mi vel quis, gravida pede.",
      stars: 4.5,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Troy I. Kyles",
      review: "Et tempus ullamcorper mi fringilla donec diam.",
      stars: 4,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Nancy Shepardson",
      review: "Iaculis pede mollis, ipsum elit. Aliquam quam lorem maecenas fusce, justo in et a quisque cursus et.",
      stars: 5,
      image: "https://via.placeholder.com/50",
    },
  ];
const Review = () => {
  return (
    <div className="review-container">
      {reviews.map((review) => (
        <Reviewcards key={review.id} {...review} />
      ))}
    </div>
  )
}

export default Review