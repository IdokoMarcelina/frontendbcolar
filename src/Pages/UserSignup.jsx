import React from 'react'
import './ArtisanSignup.css'
import { useState } from "react"
import { FaEye } from "react-icons/fa";
import signInImg from '../assets/images/signin-img.jpg'
import './ArtisanSignup.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
const UserSignup = () => {
  const [click, setClick] = useState(true)
    
  const checkPassword = ()=>{
      setClick(!click)  
  }

  const [clickConfirm, setClickConfirm] = useState(true)
  
  const checkConfirm = ()=>{
      setClickConfirm(!clickConfirm) 

  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [region, setRegion] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('https://documenter.getpostman.com/view/38379745/2sAYBUDY4R', {name,email, phone, region, password, confirmPassword})
    .then(result => console.log(result)
    )
  }
  
  return(
      <>
        <div className="sign-Container">
        <div className="sign-Wrapper">
          
          <form onSubmit={handleSubmit} className='form-part'>
              <h2>Create User Account</h2>
              <div className='label-tag'>
                     <label>Fullname</label>
                      <input type="text"
                      onChange={(e) => setName(e.target.value)}
                      />
                  </div>
  
                  <div className='label-tag'>
                     <label>Email</label>
                      <input type="email" 
                      onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
  
                  <div className='label-tag'>
                     <label>Phone Number</label>
                      <input type="text" inputMode='numeric' 
                        onChange={(e) => setPhone(e.target.value)}
                      />
                  </div>

                  <div className='label-tag'>
                       <label >Region/LGA</label>
                        <input type="text" 
                          onChange={(e) => setRegion(e.target.value)}
                        />
                  </div>
  
                  <div className='label-tag' >
                     <label>Password</label>
                    <div id='password' >
                    < input name="password" type={click?`password` : `text` } 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <h4 className='showPassword'  onClick={checkPassword}> <FaEye /> </h4>
                    </div>
                  </div>
  
                  <div className='label-tag' >
                     <label>Confirm Password</label>
                      <div id='password'>< input name="password" type={clickConfirm?`password` : `text` } 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <h4 className='showPassword'  onClick={checkConfirm}> <FaEye  /> </h4>
                      </div>
                     
                  </div>
  
                  <button type='submit' >Create Account</button>
  
                  <p>Already a member? <span>
                    <Link to="/signin">
                       <a href="">Signin</a>
                    </Link>
                    </span> 
                  </p>

                  <p> Are you an Artisan? <span>
                    <Link to="/signup">
                       <a href="">Create a service Account</a>
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

export default UserSignup