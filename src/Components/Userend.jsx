import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
const Userend = () => {
  return (
    <div className='contain'>
       <div className='chat'>
        <Link to="/book">
      <button>Booking</button>
      </Link>
      <p>   Chat
       </p>
      </div>
      <div className='freelanc'>
        <ul>
        <li>Freelance</li>
        <li>Project</li>
        <li>Merchant</li>
        <li>Collaborate</li>
        </ul>
        
      </div>

      {/* statics */}

      <div className='static'>
        <h3>Statics</h3>
       <div className='Cardss'>
       <div className='card-one'>
          <h4>12</h4>
          <p>completed projects</p>
        </div>
        <div className='card-two'>
          <h4>02</h4>
          <p>projects in progress</p>
        </div>
        <div className='card-three'>
          <h4>12</h4>
          <p>Total reviews</p>
        </div>
        <div className='card-four'>
          <h4>12</h4>
          <p>total points gain</p>
        </div>
        <div className='rates'>
          <div><p>66%</p></div>
          <p>Project completed rate</p>
        </div>
        <div className='responses'>
          <div><p>76%</p></div>
          <p>Response rate</p>
        </div>
       </div>
      </div>

      {/* about */}
      <div className='abouts'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, 
          odio. Voluptates sapiente vel pariatur? Sunt mollitia est non, 
          maiores laborum minima 
          obcaecati quo iusto, quia, fugit adipisci dolore distinctio consectetur?</p>
      </div>
      <div className='skillss'>
        <h3>core skill</h3>
        <div className='core'>
          <p>Furniture</p>
          <p>Roofing</p>
          <p>Art work</p>
        </div>
      </div>
      
      {/* portfolios and reviews */}
      <div className='porfolioss'>
       <div className='reviewss'>
       <p>Porfolios</p>
       <p>Reviews</p>
       </div>
        <hr />
      </div>  

       {/* cards */}
       <Cards/>
       <div className='experts'>
      <div className='worc'>
        <h3>Work experience</h3>
        <p> quasi, consequuntur tempora quisquam tempore!</p>
      </div>
      <div className='educate'>
        <h3>Education</h3>
        <p> quasi, consequuntur tempora quisquam tempore!</p>
      </div>
      <div className='qualify'>
        <h3>Qualification</h3>
        <p> quasi, consequuntur tempora quisquam tempore!</p>
      </div>
     </div>
    </div>
  )
}

export default Userend