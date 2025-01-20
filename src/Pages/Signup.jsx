import React from "react";
import { FaEye } from "react-icons/fa";
import "./ArtisanSignup.css";
import signInImg from "../assets/images/signIn-img.jpg";
import { Link } from 'react-router-dom';  // Import Link for routing

const Signup = ({ formData, setFormData, onNext }) => {
  const [click, setClick] = React.useState(true);
  const [clickConfirm, setClickConfirm] = React.useState(true);

  const checkPassword = () => setClick(!click);
  const checkConfirm = () => setClickConfirm(!clickConfirm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-Container">
      <div className="sign-Wrapper">
        <form className="form-part">
          <h2>Create Service Account</h2>

          <div className="label-tag">
            <label>Fullname</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
              placeholder="Fullname"
              required
            />
          </div>

          <div className="label-tag">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="label-tag">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              onChange={handleInputChange}
              inputMode="numeric"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="label-tag">
            <label>Password</label>
            <div id="password">
              <input
                name="password"
                type={click ? `password` : `text`}
                value={formData.password || ""}
                onChange={handleInputChange}
                placeholder="Password"
                required
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
                type={clickConfirm ? `password` : `text`}
                value={formData.confirmPassword || ""}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                required
              />
              <h4 className="showPassword" onClick={checkConfirm}>
                <FaEye />
              </h4>
            </div>
          </div>

          <button type="button" onClick={onNext}>
            Next
          </button>

          <p>
            Already a member?{" "}
            <span>
              <Link to="/signin">Signin</Link>
            </span>
          </p>
          
          {/* Link to User Signup Page */}
          <p>
            Not an Artisan?{" "}
            <span>
              <Link to="/signup-user">Signup as User</Link>
            </span>
          </p>
        </form>

        <div className="img-part">
          <div className="img-text">
            <h1>Welcome to Blue Collar</h1>
            <h4>Easily connect with verified local artisans for your services</h4>
          </div>
          <img src={signInImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
