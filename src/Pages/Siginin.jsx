import React from 'react'
import { useState } from "react"
import signInImg from '../assets/images/signin-img.jpg'
import { FaEye } from "react-icons/fa";
import './ArtisanSignup.css'
import {Link} from 'react-router-dom'

const Siginin = () => {

  
  const [click, setClick] = useState(true)
    
  const checkPassword = ()=>{
      setClick(!click)
  }
  return (
      
      <div className="sign-Container">
                 <div className="sign-Wrapper">
            
            <form className='form-part'>
                <h2>Sign In</h2>
    
                <div className='label-tag'>
                   <label>Email</label>
                    <input type="email" />
                </div>

                    <div className='label-tag' >
                   <label>Password</label>
                  <div id='password' >
                  < input name="password" type={click?`password` : `text` } />
                  <h4 className='showPassword'  onClick={checkPassword}> <FaEye /> </h4>
                  </div>
                </div>
    
                    <button>Sign in</button>
    
                    <p>Not a member yet? <span>
                      <Link to="/signup">
                       <a href="">Signup</a>
                      </Link></span>
          </p>
                    
                </form>
    
                <div className='img-part' >
                    <div className="img-text">
                        <h1>Welcome to Blue Collar</h1>
                        <h4>Easily connect with verified local artisans for your services</h4>
                    </div>
                        <img src={signInImg} alt=" " id='page-twoImg' />
                </div>
    
                 </div>
             </div>
  )
}

export default Siginin