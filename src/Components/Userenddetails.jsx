import React from 'react'
import './Userenddetails.css'
import face from '../assets/images/face.jpg'



const Userenddetails = () => {
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
    <div>
         <div className='Containe'>
       <div className='Profil'>
        <h2>Profile information</h2>
        <img src={face} alt="" />
        <h3>Mohamend kamel</h3>
        <p>Capenter</p>
        <ul>
            {/* <li><img src={} alt="" /></li> */}
        </ul>
        <p>Member since 2024</p>
        <p>Active 5mins ago</p>
        <div className='percentag'><div><p>75%</p></div><p>Complete your profile</p></div>

       </div>

       {/* contact */}
       <div className='contac'>
        <h2>Conctact information</h2>
        <p>moh@gmail.com</p>
        <p>070368029348</p>
        <p>lagos</p>
       </div>

       {/* total numbers of jobs completed */}
       <div className='jobb'>
       <p>Total job completed</p>
       <div><p>30</p></div>
       </div>

       {/* rating  */}
       <div className="rating-containe">
      <div className="average-ratin">
        <div className="star-iconn">⭐</div>
        <div className="rating-numba">{ratings.averageRating}</div>
        <div className="rating-tex">
          Average Rating
          <br />
          <span>Based on {ratings.totalRatings.toLocaleString()} ratings</span>
        </div>
      </div>
      <div className="rating-bar">
        {ratings.starRatings.map((rating) => (
          <div key={rating.stars} className="rating-bars">
            <span className="star-label">{rating.stars} star</span>
            <div className="bar-containe">
              <div
                className="barr"
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
    </div>
  )
}

export default Userenddetails