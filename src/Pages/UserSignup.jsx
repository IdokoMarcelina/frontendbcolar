import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import signInImg from "../assets/images/signin-img.jpg";
import "./ArtisanSignup.css";

const UserSignup = () => {
  const [click, setClick] = useState(true);
  const [clickConfirm, setClickConfirm] = useState(true);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [regionLGA, setRegionLGA] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const checkPassword = () => setClick(!click);
  const checkConfirm = () => setClickConfirm(!clickConfirm);

  const userType = {user_type: "user"}

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !phone || !regionLGA || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      alert("Phone number must contain only numbers.");
      return;
    }

    // Submit form
    try {
      const payload = {
        name,
        email,
        phone,
        regionLGA,
        password,
        confirmPassword,
        userType,
      };

      const result = await axios.post("https://backend-bcolar.onrender.com/api/auth/register", payload);
      console.log(result);

      alert("Your account has been created successfully");

      // Add a delay before navigating
      setTimeout(() => {
        navigate("/verification");
      }, 2000); // 2-second delay
    } catch (err) {
      alert("An error occurred during signup. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="sign-Container">
      <div className="sign-Wrapper">
        <form onSubmit={handleSubmit} className="form-part">
          <h2>Create User Account</h2>

          <div className="label-tag">
            <label>Fullname</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="label-tag">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="label-tag">
            <label>Phone Number</label>
            <input
              type="text"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="label-tag">
            <label>Region/LGA</label>
            <input
              type="text"
              value={regionLGA}
              onChange={(e) => setRegionLGA(e.target.value)}
            />
          </div>

          <div className="label-tag">
            <label>Password</label>
            <div id="password">
              <input
                name="password"
                type={click ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <h4 className="showPassword" onClick={checkPassword}>
                <FaEye />
              </h4>
            </div>
          </div>

          <div className="label-tag">
            <label>Confirm Password</label>
            <div id="password">
              <input
                name="confirmPassword"
                type={clickConfirm ? "password" : "text"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <h4 className="showPassword" onClick={checkConfirm}>
                <FaEye />
              </h4>
            </div>
          </div>

          <button type="submit">Create Account</button>

          <p>
            Already a member?{" "}
            <span>
              <Link to="/signin">Signin</Link>
            </span>
          </p>

          <p>
            Are you an Artisan?{" "}
            <span>
              <Link to="/signup">Create a Service Account</Link>
            </span>
          </p>
        </form>

        <div className="img-part">
          <div className="img-text">
            <h1>Welcome to Blue Collar</h1>
            <h4>Easily connect with verified local artisans for your services</h4>
          </div>
          <img src={signInImg} alt="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
