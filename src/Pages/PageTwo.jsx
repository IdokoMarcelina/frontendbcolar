import React from "react";
import "./ArtisanSignup.css";
import signInImg from "../assets/images/signin-img.jpg";
import { useNavigate } from "react-router-dom";

const PageTwo = ({ formData, setFormData, onSubmit, onBack }) => {
  const navigate = useNavigate(); // For navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-Container">
      <div className="sign-Wrapper">
        <form className="form-part" onSubmit={(e) => e.preventDefault()}>
          <h2>Create Service Account</h2>

          <section className="name-section">
            <div className="label-tag">
              <label>State</label>
              <input
                type="text"
                id="nameInput"
                name="state"
                value={formData.state || ""}
                onChange={handleInputChange}
                placeholder="State"
                required
              />
            </div>

            <div className="label-tag">
              <label>LGA</label>
              <input
                type="text"
                id="nameInput"
                name="LGA"
                value={formData.LGA || ""}
                onChange={handleInputChange}
                placeholder="LGA"
                required
              />
            </div>
          </section>

          <div className="label-tag">
            <label>Office Address</label>
            <input
              type="text"
              name="officeAddress"
              value={formData.officeAddress || ""}
              onChange={handleInputChange}
              placeholder="Office Address"
              required
            />
          </div>

          <div className="label-tag">
            <label>Skill</label>
            <input
              type="text"
              list="options"
              name="skill"
              value={formData.skill || ""}
              onChange={handleInputChange}
              placeholder="Your Skill"
              required
            />
            <datalist id="options">
              <option value="Plumber"></option>
              <option value="Carpenter"></option>
              <option value="Electrician"></option>
              <option value="Painter"></option>
            </datalist>
          </div>

          <section className="name-section">
            <div className="label-tag">
              <label>Date of Birth</label>
              <input
                type="date"
                id="nameInput"
                name="dateOfBirth"
                value={formData.dateOfBirth || ""}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="label-tag">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender || ""}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </section>

          <div className="label-tag">
            <label>ID Card</label>
            <nav id="upload-id">
              <input
                type="file"
                accept="image/*"
                name="idCard"
                onChange={(e) =>
                  setFormData({ ...formData, idCard: e.target.files[0] })
                }
                required
              />
            </nav>
          </div>

          <div className="button-group">
            <button type="button" onClick={onBack}>
              Back
            </button>
            <button type="button" onClick={onSubmit}>
              Create Account
            </button>
          </div>

          <p>
            Already a member?{" "}
            <span>
              <a href="/signin">Signin</a>
            </span>
          </p>
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

export default PageTwo;
