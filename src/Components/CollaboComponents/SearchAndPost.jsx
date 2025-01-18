import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import connect2 from '../../assets/images/connect2.png';  

function SearchAndPost({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Trigger the search when the search term changes
  };

  return (
    <SECTION>
      <WRAPPER>


      <TEXT>
          <p>
            Connect with fellow artisans <br />
            to bring ideas to life, share expertise <br/>
             and deliver outstanding projects
          </p>

          {/* <Link to="/post-gig">
            <POSTBUTTON>
              <FaPlusCircle className="icon" />
              <p>Post Gig</p>
            </POSTBUTTON>
          </Link> */}
        </TEXT>
        {/* Image on the left */}
        <IMAGE>
          <img src={connect2} alt="Connect" />
        </IMAGE>

        {/* Text and Post Button on the right */}
        
      </WRAPPER>
    </SECTION>
  );
}

export default SearchAndPost;

const SECTION = styled.div`
  background-color: #0808a8;
  color: gainsboro;
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
    padding: 90px 20px;
    height: 50vh;

    p {
      font-size: 16px;
    }
  }
`;

const WRAPPER = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;  // Stack image and text vertically on small screens
    text-align: center;
  }
`;

const IMAGE = styled.div`
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 100%;  // Full width on small screens
    margin-bottom: 20px;  // Space between image and text
  }
`;

const TEXT = styled.div`
  width: 50%;
  text-align: left;

  p {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;  // Full width on small screens
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
