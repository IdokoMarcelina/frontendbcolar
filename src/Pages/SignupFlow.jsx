import React, { useState } from "react";
import Signup from "./Signup";
import PageTwo from "./PageTwo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupFlow = () => {
    const userType = {user_type: "artisan",}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    LGA: "",
    userType,
    state: "",
    officeAddress: "",
    dateOfBirth: "",
    gender: "",
    idCard: null,
    skill: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()

  const handleNext = () => {

    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
        alert("Please fill out all fields.");
        return;
      }
  
      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

    if (!/^\d+$/.test(formData.phone)) {
        alert("Phone number must contain only numbers.");
        return;
      }
    setCurrentPage(2); // Move to PageTwo
  };

  const handleBack = () => {
    setCurrentPage(1); // Go back to Signup
  };

  const handleSubmit = async () => {
    
   

    try {
      const response = await axios.post(
        "https://backend-bcolar.onrender.com/api/auth/register",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Account created successfully:", response.data);
      alert("Account created successfully!");

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
    </>
  );
};

export default SignupFlow;
