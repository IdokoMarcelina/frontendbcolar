import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
      <div style={{ backgroundColor: 'gray', color: 'deepblue', padding: '20px' }}>
     Welcome to BLUECOLAR Creations, where craftsmanship meets passion. Our team of skilled artisans is dedicated to creating unique, handcrafted pieces that tell a story. From our Melbourne HQ, we bring art to life using the finest materials and traditional techniques.
      <h3>Chat with us</h3>
        <ul>
            <li>Start a live chat</li>
            <li>Shoot us an email</li>
            <li>Message us on Twitter</li>
        </ul>

        <h3>Call us</h3>
        <p>Call our team Mon-Fri from 8am to 5pm.</p>
        <p>+1 (555) 000-0000</p>

        <h3>Visit us</h3>
        <ul>
            <li>100 Smith Street, Collingwood VIC 3066</li>
            <li>128 Clarence Street, Sydney NSW 2000</li>
        </ul>

        <h3>Follow us</h3>
        <ul>
            <li><FaFacebook /> Facebook</li>
            <li><FaTwitter /> Twitter</li>
            <li><FaLinkedin /> LinkedIn</li>
            <li><FaYoutube /> YouTube</li>
            <li><FaInstagram /> Instagram</li>
        </ul>
    </div>
  )
}

export default About