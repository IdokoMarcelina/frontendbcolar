import React, { useState } from 'react';
import axios from 'axios';
import './../Pages/ArtisanSignup.css'
import signInImg from '../assets/images/signin-img.jpg'
import { useNavigate } from 'react-router-dom';
const ServiceForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    skill: '',
    state: '',
    idCard: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };`
  `
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    if (!formData.fullname || !formData.skill || !formData.state || !formData.idCard) {
      alert("Please fill out all fields.");
      return;
    }
    
    const formPayload = new FormData();
    formPayload.append('name', formData.fullname);
    formPayload.append('category', formData.skill);
    formPayload.append('region', formData.state);
    if (formData.idCard) {
      formPayload.append('productPic', formData.idCard);
    }
  
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token); // Debugging: Ensure token is retrieved
      for (const [key, value] of formPayload.entries()) {
        console.log(`${key}:`, value);
      }
      
      
      if (!token) {
        alert("Please log in to add a service.");
        return;
      }
  
      const response = await axios.post(
        'https://backend-bcolar.onrender.com/api/service/productPage',
        formPayload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        alert('Service added successfully!');

        setTimeout(() => {navigate("/productPage"); }, 2000);  
      } else {
        alert('Failed to add service.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding service. Please try again.');
    } finally {
      setIsLoading(false); // End loading
    }
  };
  

  return (
    <div className="sign-Container">
      <div className="sign-Wrapper">
        <form className="form-part" onSubmit={handleSubmit}>
          <h2>Add a Service</h2>

          <div className="label-tag">
            <label>Fullname</label>
            <input
              type="text"
              name="fullname"
              placeholder="Your Fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="label-tag">
            <label>Skill</label>
            <input
              type="text"
              list="options"
              name="skill"
              placeholder="Your Skill"
              value={formData.skill}
              onChange={handleChange}
              required
            />
            <datalist id="options">
              <option value="Plumber"></option>
              <option value="Carpenter"></option>
              <option value="Electrician"></option>
              <option value="Painter"></option>
            </datalist>
          </div>

          <div className="label-tag">
            <label>State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select your state</option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
              <option value="FCT">FCT Abuja</option>
            </select>
          </div>

          <div className="label-tag">
            <label>ID Card</label>
            <nav id="upload-id">
              <input
                type="file"
                accept="image/*"
                name="idCard"
                onChange={handleChange}
                required
              />
            </nav>
          </div>

          <button type="submit" disabled={isLoading} style={{ cursor: isLoading ? "not-allowed" : "pointer" }}>
            {isLoading ? 'Submitting...' : 'Add Service'}
          </button>
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
  );
};

export default ServiceForm;
