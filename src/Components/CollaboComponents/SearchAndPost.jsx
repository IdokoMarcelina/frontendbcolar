import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


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

        <Link to="/post-gig">
          <POSTBUTTON>
            <FaPlusCircle className="icon" />
            <p>Post Gig</p>
          </POSTBUTTON>
        </Link>
        
      </WRAPPER>
    </SECTION>
  );
}

export default SearchAndPost;

const SECTION = styled.div`
  background-color: gainsboro; 
  color: #0000ff; 
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  height: 50vh;

  p {
    margin: 0 0 20px; 
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
  }

  
  @media (max-width: 768px) {
    padding:90px 20px;
    height: 50vh;

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
  width: 100%;
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    
    flex-direction: row; 
    gap: 5px; 
  }
`;

const SEARCH = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid #ddd;
  max-width: 600px;
  flex-grow: 1; 
  height: 70px; 
  width: 100%; 
  background-color: white; 
  color: #000; 

  .icon {
    font-size: 24px; 
    margin-right: 10px;
    color: #888;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%; 
    background: none;
    color: #000; 
    font-size: 16px; 
  }

  @media (max-width: 1300px) {
    max-width: 500px; 
    height: 60px;    
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
  color: #1212bb;

  p{
  font-size: 25px;

  }

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
  gap: 0; 
  padding: 5px;
  margin-top: 5px;
  background-color: #1313aa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  .icon {
    font-size: 30px; 
  }

  p {
    font-size: 18px; 
    margin: 0; 
  }

  &:hover {
    background-color: #4444ff; 
  }


  @media (max-width: 1300px) {
    width: 120px; 
    height: 50px; 

    .icon {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 25px;
    margin: auto;

    .icon {
      font-size: 15px; 
    }

    p {
      font-size: 10px; 
    }
  }
`;

