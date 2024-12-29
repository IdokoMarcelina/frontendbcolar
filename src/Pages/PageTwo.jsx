import React from 'react'
import './ArtisanSignup.css'
import { useState } from "react"
import signInImg from '../assets/images/signin-img.jpg'
import './ArtisanSignup.css'
import {Link} from 'react-router-dom'
const PageTwo = ()=>{

    const [gender, setGender] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

    return(
        <>
           <div className="sign-Container">
            <div className="sign-Wrapper">
            
            <form className='form-part'>
                <h2>Create Service Account</h2>
    
                    <section className='name-section'>
                       <div className='label-tag'>
                       <label>State</label>
                        <input type="text" id='nameInput' />
                       </div>
    
                       <div className='label-tag'>
                       <label >Region/LGA</label>
                        <input type="text" id='nameInput' />
                       </div>
                    </section>
                    
                    <div className='label-tag'>
                       <label>Office Address</label>
                        <input type="text" />
                    </div>

                <div className='label-tag' >
                    <label>Skill</label>
                    <input type="text" list='options' placeholder="Your Skill"/>
                     <datalist id='options'>
                       <option value="Plumber"></option>
                       <option value="Carpenter"></option>
                       <option value="Electrician"></option>
                       <option value="Painter"></option>
                     </datalist>
               </div>

               <section className='name-section'>
                       <div className='label-tag'>
                       <label>Date of Birth</label>
                        <input type="date" id='nameInput' />
                       </div>
    
                       <div className='label-tag'>
                       <label >Gender</label>
                       <select value={gender} onChange={handleGenderChange}  >
                         <option value="">Select a gender</option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="other">Other</option>
                       </select>

                       </div>
                </section>

                <div className='label-tag'>
                       <label>ID Card</label>
                       <nav id='upload-id'>
                       <input type="file" accept="image/*" name= "image"/>
                       </nav>
                       
                    </div>
                
    
    
                    <button>Create Account</button>
    
                    <p>Already a member? <span>
                      <Link to="signin">
                       <a href="/signin">Signin</a>
                    </Link>
                    </span> 
                    </p>
                </form>
    
                <div className='img-part'>
                    <div className="img-text">
                        <h1>Welcome to Blue Collar</h1>
                        <h4>Easily connect with verified local artisans for your services</h4>
                    </div>
                        <  img src={signInImg} alt=""   id='page-twoImg' />
                </div>
    
           </div>
           </div>
        </>
    )
}
export default PageTwo