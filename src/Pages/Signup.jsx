import React from 'react'
import './ArtisanSignup.css'
import { useState } from "react"
import { FaEye } from "react-icons/fa";
import signInImg from '../assets/images/signin-img.jpg'
import './ArtisanSignup.css'
import {Link} from 'react-router-dom'
const Signup = () => {
  const [click, setClick] = useState(true)
    
  const checkPassword = ()=>{
      setClick(!click)  
  }

  const [clickConfirm, setClickConfirm] = useState(true)
  
  const checkConfirm = ()=>{
      setClickConfirm(!clickConfirm)  
  }

  
  return(
      <>
        <div className="sign-Container">
        <div className="sign-Wrapper">
          
          <form className='form-part'>
              <h2>Create Service Account</h2>
  
                  <section className='name-section'>
                     <div className='label-tag'>
                     <label>First Name</label>
                      <input type="text" id='nameInput' />
                     </div>
  
                     <div className='label-tag'>
                     <label >Last Name</label>
                      <input type="text" id='nameInput' />
                     </div>
                  </section>
                  
                  <div className='label-tag'>
                     <label>Username</label>
                      <input type="text" />
                  </div>
  
                  <div className='label-tag'>
                     <label>Email</label>
                      <input type="email" />
                  </div>
  
                  <div className='label-tag'>
                     <label>Phone Number</label>
                      <input type="text" inputMode='numeric' />
                  </div>
  
                  <div className='label-tag' >
                     <label>Password</label>
                    <div id='password' >
                    < input name="password" type={click?`password` : `text` } />
                    <h4 className='showPassword'  onClick={checkPassword}> <FaEye /> </h4>
                    </div>
                  </div>
  
                  <div className='label-tag' >
                     <label>Confirm Password</label>
                      <div id='password'>< input name="password" type={clickConfirm?`password` : `text` } />
                      <h4 className='showPassword'  onClick={checkConfirm}> <FaEye  /> </h4>
                      </div>
                     
                  </div>
  
                  <Link to='/pagetwo'><button>Next</button></Link>
  
                  <p>Already a member? <span>
                    <Link to="/signin">
                       <a href="">Signin</a>
                    </Link>
                    </span> 
                  </p>
              </form>
  
              <div className='img-part'>
                  <div className="img-text">
                      <h1>Welcome to Blue Collar</h1>
                      <h4>Easily connect with verified local artisans for your services</h4>
                  </div>
                      <img src={signInImg} alt="" />
              </div>
  
            </div>
        </div>
      </>
  )
}

export default Signup