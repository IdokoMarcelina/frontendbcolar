import React, { useState } from 'react';
import styled from 'styled-components';

function FormComponent() {
  const [gigData, setGigData] = useState({
    category: '',
    description: '',
    requirements: '',
    collaboPic: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2U1NjAzOWM3NGFhY2Y2ZGJmM2MxOCIsInVzZXJfdHlwZSI6ImFydGlzYW4iLCJpYXQiOjE3MzYzNDU2NzgsImV4cCI6MTczNjM0OTI3OH0.5y7bI1CrGyxkAyMp0PWg_kGJ7OasHcwb5JWb2DkYoV0'; 
    if (!gigData.category || !gigData.description || !gigData.requirements || !gigData.collaboPic) {
      alert('Please fill in all fields!');
      return;
    }

    const formData = new FormData();
    formData.append('collaboPic', gigData.collaboPic);
    formData.append('category', gigData.category);
    formData.append('description', gigData.description);
    formData.append('requirements', gigData.requirements);

    

    try {
         console.log('this line of code is working');
        const response = await fetch('https://backend-bcolar.onrender.com/api/collabo/collaboPage', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,  
            },
            body: formData, 
          });

          console.log(response);
          
      if (!response.status==200) {
        throw new Error('Failed to submit the gig.');
      }

      alert('Gig submitted successfully!');
      setGigData({
        category: '',
        description: '',
        requirements: '',
        collaboPic: null,
      });
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGigData({ ...gigData, collaboPic: file });
    }
  };

  return (
    <WRAPPER>
      <COLLABOCARD>
        <FORM onSubmit={handleSubmit}>
          <h2>Create a New Gig</h2>
          <input
            type="text"
            placeholder="Category"
            value={gigData.category}
            onChange={(e) => setGigData({ ...gigData, category: e.target.value })}
          />
          
          <textarea
            placeholder="Gig Description"
            value={gigData.description}
            onChange={(e) => setGigData({ ...gigData, description: e.target.value })}
          />
          
          <textarea
            placeholder="Requirements"
            value={gigData.requirements}
            onChange={(e) => setGigData({ ...gigData, requirements: e.target.value })}
          />
          
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {gigData.collaboPic && <img src={URL.createObjectURL(gigData.collaboPic)} alt="Preview" style={{ width: '100%', marginTop: '10px', maxHeight: '200px', objectFit: 'cover' }} />}
          </div>
          
          <button type="submit">Submit</button>
        </FORM>
      </COLLABOCARD>
    </WRAPPER>
  );
}

export default FormComponent;

const WRAPPER = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const COLLABOCARD = styled.div`
  height: fit-content;
  max-width: 400px;
  background-color: gainsboro;
  margin-top: 20px;  
  border: 1px solid gainsboro;
  border-radius: 9px;
  padding: 20px;

  button {
    background-color: #0000ff;
    border: 1px solid #0000ff;
    border-radius: 10px;
    height: 35px;
    color: white;
    width: 100%;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%; 
  }
`;

const FORM = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0;

  h2 {
    margin-bottom: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  button:hover {
    background-color: #4444ff;
  }
`;
