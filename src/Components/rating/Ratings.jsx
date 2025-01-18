import React from "react";
import "./Ratings.css"; 

const Ratings = ({ ratings }) => {
  return (
    <div className="customer-reviews">
    <h2>Customer reviews</h2>
    <div className="average-rating">
      <div className="stars">
        {"⭐".repeat(Math.round(ratings.averageRating))}
        <span className="average-rating-text">
          {ratings.averageRating.toFixed(1)} out of 5
        </span>
      </div>
      <p className="total-ratings">{ratings.totalRatings} customer ratings</p>
    </div>

    <div className="rating-bars">
      {ratings.starRatings.map((rating) => (
        <div key={rating.stars} className="rating-bar-item">
          <span className="star-label">{rating.stars} star</span>
          <div className="bar-container">
            <div
              className="bar"
              style={{
                width: `${(rating.count / ratings.totalRatings) * 100}%`,
              }}
            ></div>
          </div>
          <span className="percentage">
            {(
              (rating.count / ratings.totalRatings) *
              100
            ).toFixed(0)}%
          </span>
        </div>
      ))}
    </div>

    <p className="info-text">How do we calculate ratings?</p>
  </div>
  );
};

export default Ratings;
