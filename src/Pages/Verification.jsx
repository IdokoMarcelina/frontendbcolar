import React, { useState } from "react";
import "./ArtisanSignup.css";
import signInImg from "../assets/images/signIn-img.jpg";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Verification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !otp) {
      toast.error("Please fill out all fields!");
      return;
    }

    try {
      const payload = {
        email,
        otp,
        type: "register",
      };

      const verify = await axios.post(
        "https://backend-bcolar.onrender.com/api/otp/verify-otp",
        payload
      );
      console.log(verify);

      toast.info("Your account has been verified successfully!");
      navigate("/signin"); // Navigate immediately after success
    } catch (err) {
      toast.error("Verification failed. Please try again.");
      console.error(err);
    }
  };

  const handleResendOtp = async (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (!email) {
      toast.error("Please enter your email to resend the OTP.");
      return;
    }

    try {
      setIsResending(true);
      const payload = {
        email,
        type: "register",
      };
      await axios.post(
        "https://backend-bcolar.onrender.com/api/otp/resend-otp",
        payload
      );
      toast.error("OTP has been resent to your email!");
    } catch (err) {
      toast.error("Failed to resend OTP. Please try again.");
      console.error(err);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="sign-Container">
      <div className="sign-Wrapper">
        <form className="form-part" onSubmit={handleSubmit}>
          <h2>Verify Your Account</h2>

          <div className="label-tag">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="label-tag">
            <label>Input your Verification Code</label>
            <input
              type="text"
              inputMode="numeric"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
          </div>

          <p>
            Didn't get the OTP?{" "}
            <span>
              <Link to="#" onClick={handleResendOtp} style={{ cursor: isResending ? "not-allowed" : "pointer" }}>
                {isResending ? "Resending..." : "Resend"}
              </Link>
            </span>
          </p>

          <button type="submit" disabled={!email || !otp}>
            Verify OTP
          </button>
        </form>

        <div className="img-part">
          <div className="img-text">
            <h1>Welcome to Blue Collar</h1>
            <h4>Easily connect with verified local artisans for your services</h4>
          </div>
          <img src={signInImg} alt="" id="page-twoImg" />
        </div>
      </div>
    </div>
  );
};

export default Verification;