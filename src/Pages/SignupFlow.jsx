import React, { useState } from "react";
import Signup from "./Signup";
import PageTwo from "./PageTwo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignupFlow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    LGA: "",
    user_type: "artisan", // Default to artisan, can be dynamically changed based on user choice
    state: "",
    officeAddress: "",
    dateOfBirth: "",
    gender: "",
    idCard: null,
    skill: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Handle Next Button click
  const handleNext = () => {
    // Form validation before moving to the next page
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Validate phone number (numeric check)
    if (!/^\d+$/.test(formData.phone)) {
      alert("Phone number must contain only numbers.");
      return;
    }

    setCurrentPage(2); // Proceed to PageTwo
  };

  // Handle Back Button click
  const handleBack = () => {
    setCurrentPage(1); // Go back to Signup
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Make sure the form data is correctly prepared
    if (!formData.idCard) {
      alert("Please upload your ID card.");
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    console.log("Data being sent to the backend:", formDataToSend);

    try {
      const response = await axios.post(
        "https://backend-bcolar.onrender.com/api/auth/register",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Account created successfully:", response.data);
      alert("Account created successfully!");

      // Redirect to verification page after successful signup
      setTimeout(() => {
        navigate("/verification");
      }, 2000);

    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account. Please try again.");
    }
  };

  return (
    <>
      {currentPage === 1 ? (
        <Signup formData={formData} setFormData={setFormData} onNext={handleNext} />
      ) : (
        <PageTwo
          formData={formData}
          setFormData={setFormData}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      )}

      {/* Add a Link to Signup Page if needed */}
      <Link to="/signup-artisan">Go to Signup Page</Link>
    </>
  );
};

export default SignupFlow;
