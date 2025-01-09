import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { CgPassword } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";

const ResetPassword = () => {
    const location = useLocation();
    const email = location.state?.email || '';
    // const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [new_password, setNew_password] = useState('');
    const [confirm_new_password, setConfirm_new_password] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            if (new_password !== confirm_new_password) {
                setMessage("Passwords don't match.");
                return;
            }
    
            setLoading(true);
    
            try {
                const response = await fetch('https://backend-bcolar.onrender.com/api/auth/resetPassword', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, otp, new_password, confirm_new_password }),
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    setMessage('Password reset successful. Welcome back...');
                    // setTimeout(() => {
                    //     window.location.href = '/signin';
                    // }, 3000);
                } else {
                    setMessage(data.message || 'Failed to reset password.');
                }
            } catch (error) {
                setMessage('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        };

    return ( <ResetPasswordDiv>

        <div>
            <h4><CgPassword /></h4>
            <h3>Password Reset</h3>
            {/* <p>No worries, we'll send you reset instructions.</p> */}

            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> Email:</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                <label htmlFor="otp"> OTP:</label>
                <input type="text" id="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required/>

                <label htmlFor="new_password"> Set new Password:</label>
                <input type="password" placeholder="New Password" value={new_password} onChange={(e) => setNew_password(e.target.value)} required />

                <label htmlFor="confirm_new_password"> Confirm Password:</label>
                <input type="password" placeholder="Confirm Password" value={confirm_new_password} onChange={(e) => setConfirm_new_password(e.target.value)} required/>
                
                <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Reset Password'}</button>
            </form>

            {message && <p>{message}</p>}

            <h6> <IoIosArrowRoundBack /> Back to log in</h6>
        </div>

    </ResetPasswordDiv> );
}
  
export default ResetPassword;

const ResetPasswordDiv = styled.div`
    width:400px;
    height: 100vh;
    border: 1px solid;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* height: 400px; */
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
        height: 35px;
        border: 1px solid #5e5e61;
        border-radius: 10px;
        padding: 10px;
        margin: 5px 0px;  
    }
    label{
        /* margin: 5px 0px; */
    }
    button{
        width: 300px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #0000ff;
        color: white;
        font-weight: 600;
        margin: 10px 0px;
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