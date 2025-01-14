import React from 'react'
import './rating.css'
import { useState } from "react";
import Reviewcards from './Reviewcards';


const Review = () => {
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

  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://your-backend-url/api/reviews"; // Replace with your API URL

    const payload = {
      userId,
      productId,
      rating: parseFloat(rating), // Ensure rating is a number
      review,
    };

    try {
      setLoading(true);
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Review submitted:", response.data);
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-container">
      <h2>Product Reviews</h2>
      <div className="existing-reviews">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} className="review-image" />
            <div>
              <h3>{review.name}</h3>
              <p>{review.review}</p>
              <span>⭐ {review.stars}</span>
            </div>
          </div>
        ))}
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <h3>Leave a Review</h3>

        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your user ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="productId">Product ID</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter product ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            step="0.5"
            placeholder="Rate (1 to 5)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default Review;