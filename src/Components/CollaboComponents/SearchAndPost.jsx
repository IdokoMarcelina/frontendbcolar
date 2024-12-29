import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';

function SearchAndPost() {
  return (
    <SECTION>
      <TEXT>
        <p>
          Connect with fellow artisans <br />
          to bring ideas to life, share expertise, and deliver outstanding projects
        </p>
      </TEXT>
      <WRAPPER>
        <SEARCH>
          <FaSearch className="icon" />
          <input type="text" placeholder="Search..." />
        </SEARCH>

        <POSTBUTTON>
          
            <FaPlusCircle className="icon" />
            <p>Post Gig</p>
        </POSTBUTTON>
      </WRAPPER>
    </SECTION>
  );
}

export default SearchAndPost;

const SECTION = styled.div`
  background-color: #0000ff; /* Blue background */
  color: white; /* White text */
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  height: 40vh;

  p {
    margin: 0 0 20px; /* Add spacing below the text */
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding:50 20px;
    height: 26vh;

    p {
      font-size: 16px;
    }
  }
`;

const WRAPPER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */

  @media (max-width: 768px) {
    
    flex-direction: row; /* Keep items in a row on smaller screens */
    gap: 5px; /* Reduce gap between items */
  }
`;

const SEARCH = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid #ddd;
  max-width: 600px;
  flex-grow: 1; /* Allow the search bar to take available space */
  height: 70px; /* Set fixed height */
  width: 100%; /* Ensure full width on smaller screens */
  background-color: white; /* White background */
  color: #000; /* Black text for input */

  .icon {
    font-size: 24px; /* Increase icon size */
    margin-right: 10px;
    color: #888;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%; /* Match the height */
    background: none;
    color: #000; /* Black text inside input */
    font-size: 16px; /* Font size for input */
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: auto;
    max-width: 65%;
    height: 30px; 
  }
`;

const TEXT = styled.div`
  margin-bottom: 20px;
  color: gainsboro;

  @media (max-width: 768px) {
    margin: auto;
    max-width: 100%; 
    
  }
`;

const POSTBUTTON = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0; /* Remove any gap */
  padding: 10px;
  margin-top: 40px;
  background-color: #0505e9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  .icon {
    font-size: 40px; /* Icon size */
  }

  p {
    font-size: 18px; /* Smaller size for the text */
    margin: 0; /* Remove margin around text */
  }

  &:hover {
    background-color: #4444ff; /* Slightly lighter blue on hover */
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 25px;
    margin: auto;

    .icon {
      font-size: 15px; /* Adjust icon size for smaller screens */
    }

    p {
      font-size: 10px; /* Adjust text size for smaller screens */
    }
  }
`;

