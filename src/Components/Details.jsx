import React,{ useState } from 'react'
import face from '../assets/images/face.jpg'
import './Details.css'

const Details = () => {
  const ratings = {
    totalRatings: 23980,
    averageRating: 4.5,
    starRatings: [
      { stars: 5, count: 14764 },
      { stars: 4, count: 9480 },
      { stars: 3, count: 1240 },
      { stars: 2, count: 340 },
      { stars: 1, count: 170 },
    ],
  };
  return (
    <div className='Container'>
       <div className='Profile'>
        <h2>Profile information</h2>
        <img src={face} alt="" />
        <h3>Mohamend kamel</h3>
        <p>Capenter</p>
        <ul>
            {/* <li><img src={} alt="" /></li> */}
        </ul>
        <p>Member since 2024</p>
        <p>Active 5mins ago</p>
        <div className='percentage'><div><p>75%</p></div><p>Complete your profile</p></div>

       </div>

       {/* contact */}
       <div className='contact'>
        <h2>Conctact information</h2>
        <p>moh@gmail.com</p>
        <p>070368029348</p>
        <p>lagos</p>
       </div>

       {/* total numbers of jobs completed */}
       <div className='job'>
       <p>Total job completed</p>
       <div><p>30</p></div>
       </div>

       {/* rating  */}
       <div className="rating-container">
      <div className="average-rating">
        <div className="star-icon">⭐</div>
        <div className="rating-number">{ratings.averageRating}</div>
        <div className="rating-text">
          Average Rating
          <br />
          <span>Based on {ratings.totalRatings.toLocaleString()} ratings</span>
        </div>
      </div>
      <div className="rating-bars">
        {ratings.starRatings.map((rating) => (
          <div key={rating.stars} className="rating-bar">
            <span className="star-label">{rating.stars} star</span>
            <div className="bar-container">
              <div
                className="bar"
                style={{
                  width: `${
                    (rating.count / ratings.totalRatings) * 100
                  }%`,
                }}
              ></div>
            </div>
            <span className="rating-count">{rating.count.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Details