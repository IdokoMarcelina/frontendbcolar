import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { IoMdFingerPrint } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";



const ForgotPassword = () => {
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState(''); 
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true); 

        try {
            const response = await fetch('https://backend-bcolar.onrender.com/api/auth/forgetPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), 
            });

            const data = await response.json(); 

            if (response.ok) {
                setMessage('Password reset email sent. Check your inbox.');
                setTimeout(() => {
                    navigate('/resetPassword', { state: { email } }); 
                }, 2000);
            } else {
                setMessage(data.message || 'Failed to send reset email.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false); 
        }
    };

    return ( <ForgotPasswordDiv>

        <div>
            <h4><IoMdFingerPrint /></h4>
            <h3>Forgot password?</h3>
          
                <p>No worries, we'll send you reset instructions.</p>

                <form onSubmit={handleSubmit}>

                <label htmlFor="email"> Email:</label> <br />
                <input type="email"  placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>  <br />
                <button type="submit" disabled={loading} >{loading ? 'Submitting...' : 'Submit'}</button>
            </form>
            {message && <p>{message}</p>} 
            <h6> <IoIosArrowRoundBack /> Back to log in</h6>
        </div>

    </ForgotPasswordDiv> );
}
 
export default ForgotPassword;

const ForgotPasswordDiv = styled.div`
    width:400px;
    height: 100vh;
    border: 1px solid;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
    display: flex;
    flex-direction: column;
    justify-content: center;

    }
    h4{
        border: 1px solid;
        border-radius: 3px;
        padding: 5px;
        margin: 10px auto;
        width: 45px;
        height: 45px;
        font-size: 32px;
    }
    h3{
        font-size: 22px;
        margin: 5px auto;
    }
    p{
        color: #5e5e61;
    }
    input{
        width: 300px;
        height: 40px;
        border: 1px solid #5e5e61;
        border-radius: 10px;
        padding: 10px;
        
    }
    button{
        width: 300px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #0000ff;
        color: white;
        font-weight: 600;
    &:hover{   
        background-color: #4b4bf9;
    }    
}
h6{
    font-weight: 500;
    font-size: 16px;
    margin: 15px auto 0px;
    text-align: center;
}
`