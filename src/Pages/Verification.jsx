
import React from 'react'
import './ArtisanSignup.css'
import { useState } from "react"
import signInImg from '../assets/images/signin-img.jpg'
import './ArtisanSignup.css'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
const Verification = () =>{

    const [email, setEmail] = useState('')
    const [otp, setOtp] =useState ('')

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (!email || !otp){
            alert("fill out all fields!")
            return;
        }

        try{
            
            const payload = {
                email,
                otp,
                type: "register"
            };
            
            const verify = await axios.post('https://backend-bcolar.onrender.com/api/otp/verify-otp', payload);
            console.log(verify);

            alert("Your account has been Verified successfully!")
            setTimeout(navigate("/signin"), 2000);
            

        }catch (err) {
            alert("Verification failed. Please try again.");
            console.log(err);
        }

    }
    return(
        <div className="sign-Container">
            <div className="sign-Wrapper">
            <form className='form-part'  onSubmit={handleSubmit}>
                <h2>Verify Your Account</h2>

                <div className='label-tag' >
                     <label>Email</label>
                      <input type="email"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      />
                  </div>
  
                <div className='label-tag'>
                     <label>Input your Verification Code</label>
                      <input type="text" inputMode='numeric'
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      />
                  </div>

                  <p>
            Didn't get the OTP?{" "}
            <span>
              <Link to="">Resend</Link>
            </span>
          </p> 
    
                    <button type='submit' >Verify OTP</button>

                    
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
export default Verification