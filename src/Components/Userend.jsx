import React from 'react'
import './Userend.css'
import Cards from './Cards'
const Userend = () => {
  return (
    <div>
       <div className='chats'>
      <p> Booking
       </p>
      <p>   Chat
       </p>
      </div>
      <div className='freelance'>
        <ul>
        <li>Freelance</li>
        <li>Project</li>
        <li>Merchant</li>
        <li>Collaborate</li>
        </ul>
        
      </div>

      {/* statics */}

      <div className='statics'>
        <h3>Statics</h3>
       <div className='Cards'>
       <div className='card-1'>
          <h4>12</h4>
          <p>completed projects</p>
        </div>
        <div className='card-2'>
          <h4>02</h4>
          <p>projects in progress</p>
        </div>
        <div className='card-3'>
          <h4>12</h4>
          <p>Total reviews</p>
        </div>
        <div className='card-4'>
          <h4>12</h4>
          <p>total points gain</p>
        </div>
        <div className='rate'>
          <div><p>66%</p></div>
          <p>Project completed rate</p>
        </div>
        <div className='response'>
          <div><p>76%</p></div>
          <p>Response rate</p>
        </div>
       </div>
      </div>

      {/* about */}
      <div className='about'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, 
          odio. Voluptates sapiente vel pariatur? Sunt mollitia est non, 
          maiores laborum minima 
          obcaecati quo iusto, quia, fugit adipisci dolore distinctio consectetur?</p>
      </div>
      <div className='skills'>
        <h3>core skill</h3>
        <div className='core'>
          <p>Furniture</p>
          <p>Roofing</p>
          <p>Art work</p>
        </div>
      </div>
      
      {/* portfolios and reviews */}
      <div className='porfolios'>
       <div className='reviews'>
       <p>Porfolios</p>
       <p>Reviews</p>
       </div>
        <hr />
      </div>  

       {/* cards */}
       <Cards/>
    </div>
  )
}

export default Userend