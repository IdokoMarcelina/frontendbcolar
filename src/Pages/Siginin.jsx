import axios from 'axios';
import React from 'react'
import { useState } from "react"
import signInImg from '../assets/images/signin-img.jpg'
import { FaEye } from "react-icons/fa";
import './ArtisanSignup.css'
import {Link, useNavigate} from 'react-router-dom'
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; 



const Siginin = () => {

  
  const [click, setClick] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    
  const checkPassword = ()=>{
      setClick(!click)}

const navigate = useNavigate()
  const handleSubmit = async (e) =>{
    e.preventDefault();

    if (!email || !password){
      alert("please fill out all fields")
      return;
    }

    try{
        const payload = {email, password};

        const login = await axios.post("https://backend-bcolar.onrender.com/api/auth/login", payload);
            console.log(login);

            Toastify({
              text: "Welcome to BlueColar!",
              duration: 3000, 
              gravity: "top", 
              position: "center", 
              style: {
                background: "linear-gradient(to right, #0000ff, #0000ff)", 
                color: "#fff",
                fontSize: "16px",
                borderRadius: "8px",
                padding: "10px 20px",
              },
            }).showToast();

        const token = login.data.token;

        localStorage.setItem('token', token);

            setTimeout(() => {navigate("/"); }, 2000);  

    } catch (err) { 
      Toastify({
        text: "invalid email or password",
        duration: 5000, 
        gravity: "top", 
        position: "center", 
        style: {
          background: "linear-gradient(to right, #0000ff, #0000ff)", 
          color: "#fff",
          fontSize: "16px",
          borderRadius: "8px",
          padding: "10px 20px",
        },
      }).showToast();;
        console.log(err);
       
      }
    
  }
  return (
      
      <div className="sign-Container">
                 <div className="sign-Wrapper">
            
            <form onSubmit={handleSubmit} className='form-part'>
                <h2>Sign In</h2>
    
                <div className='label-tag'>
                   <label>Email</label>
                    <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                    <div className='label-tag' >
                   <label>Password</label>
                  <div id='password' >
                  < input name="password" type={click?`password` : `text` } 
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                  />
                  <h4 className='showPassword'  onClick={checkPassword}> <FaEye /> </h4>
                  </div>
                </div>
    
                    <button type='submit' >Sign in</button>
    
                    <p>Not a member yet? <span>
                      <Link to="/usersignup">
                       Signup
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