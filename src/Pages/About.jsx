// Importing React and Styled Components
import React from 'react';
import styled from 'styled-components';
import connect from '../assets/images/connect2.png'

// Styled components for the page
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  background-color: white; /* Light blue background */
  color: #00274d; /* Dark blue text */
  padding:80px 70px;
  margin-top: 60px;
  height: 100vh;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #0e0ed6;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
`;

const Image = styled.img`
  position: absolute;
  top: 60px;
  right: 90px;
  width: 400px;
  height: auto;
  margin-top: 40px;
  border-radius: 50%;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Image src={connect} alt="Team" /> {/* Replace with your image URL */}
      <Heading>About Us</Heading>
      <Paragraph>
        We are a team of software engineers focusing on innovations and providing solutions to
        problems around us. Our passion for solving real-world challenges led to the creation of the
        Bcolar app, a blue-and-white themed application designed to enhance user experience and
        provide effective solutions.
      </Paragraph>
      <Paragraph>
        At our core, we value creativity, collaboration, and continuous learning. Our team is
        dedicated to leveraging cutting-edge technologies to create products that make a difference.
        Join us as we continue to innovate and build solutions for a better tomorrow.
      </Paragraph>
    </AboutUsContainer>
  );
};

export default AboutUs;
