import React from 'react';
import styled from 'styled-components';
import painterOne from '../../assets/images/painterOne.jpg'
import carpenterTwo from '../../assets/images/carpenterTwo.jpg'
import chef from '../../assets/images/chef.jpg'
import cooking from '../../assets/images/cooking.jpg'
import fineArtist from '../../assets/images/fineArtist.jpg'
import tailor from '../../assets/images/tailor.jpg'
import furniture from '../../assets/images/furniture.jpg'
import construction from '../../assets/images/construction.jpg'
function CardCollabo() {
  return (
    <div>
      <WRAPPER>
        <COLLABOCARD>
        <IMAGE>
        <img src={painterOne} alt="" />

        </IMAGE>
            
            <TEXT>

                <p> <span><b>Description:</b></span> A painting gig for 
                a 5-bedroom duplex. </p>

                <div><span><b>Requirement:</b></span> Proficient in painting, design-creation.</div>
            
            </TEXT>

          <button >Apply</button>
        </COLLABOCARD>


        <COLLABOCARD>
        <IMAGE>
        <img src={chef} alt="" />

        </IMAGE>
            
            
            <TEXT>

                <p> <span><b>Description:</b></span> A painting gig for 
                a 5-bedroom duplex. </p>

                <div><span><b>Requirement:</b></span> Proficient in painting, design-creation.</div>
            
            </TEXT>

          <button >Apply</button>
        </COLLABOCARD>
        <COLLABOCARD>
        <IMAGE>
        <img src={tailor} alt="" />

        </IMAGE>
            
            
            <TEXT>

                <p> <span><b>Description:</b></span> A painting gig for 
                a 5-bedroom duplex. </p>

                <div><span><b>Requirement:</b></span> Proficient in painting, design-creation.</div>
            
            </TEXT>

          <button >Apply</button>
        </COLLABOCARD>
      </WRAPPER>


      <WRAPPER>
        <COLLABOCARD>
        <IMAGE>
        <img src={carpenterTwo} alt="" />

        </IMAGE>
            
            <TEXT>

                <p> <span><b>Description:</b></span> A painting gig for 
                a 5-bedroom duplex. </p>

                <div><span><b>Requirement:</b></span> Proficient in painting, design-creation.</div>
            
            </TEXT>

          <button >Apply</button>
        </COLLABOCARD>


        <COLLABOCARD>
        <IMAGE>
        <img src={fineArtist} alt="" />

        </IMAGE>
            
            
            <TEXT>

                <p> <span><b>Description:</b></span> A painting gig for 
                a 5-bedroom duplex. </p>

                <div><span><b>Requirement:</b></span> Proficient in painting, design-creation.</div>
            
            </TEXT>

          <button >Apply</button>
        </COLLABOCARD>
        <COLLABOCARD>
        <IMAGE>
        <img src={cooking} alt="" />

        </IMAGE>
            
            
            <TEXT>

                <p> <span><b>Description:</b></span> A painting gig for 
                a 5-bedroom duplex. </p>

                <div><span><b>Requirement:</b></span> Proficient in painting, design-creation.</div>
            
            </TEXT>

          <button >Apply</button>
        </COLLABOCARD>
      </WRAPPER>
    </div>
  );
}

export default CardCollabo;

const COLLABOCARD = styled.div`
  height: fit-content;
  max-width: 400px;
  background-color: gainsboro;
  margin-top: 20px;  
  border: 1px solid gainsboro;
  border-radius: 9px;

  

  button{
    background-color: #0000ff;
    border: 1px solid #0000ff;
    border-radius: 10px;
    height: 35px;
    color: white;
    width: 350px;
   margin: 10px 20px;
  }

 

  @media (max-width: 768px) {
    max-width: 100%; /* Take full width on smaller screens */
    margin-top: 20px;
    padding: 0px;

    button{
        width: 280px;
         margin: 25px  10px 15px ;

    }
  }
`;

const WRAPPER = styled.div`
  display: flex;
  flex-direction: row; /* Horizontal layout by default */
  gap: 10px;
  justify-content: space-between; /* Center the cards */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack cards vertically on smaller screens */
    gap: 1rem; /* Adjust gap for smaller screens */
  }
`;
const TEXT = styled.div`
width: 350px;
text-align: justify;
padding: 0 20px;

  @media (max-width: 768px) {
    width: 250px;
    
  }
`;
const IMAGE = styled.div`
  width: 100%; /* Full width of the parent container */
  height: 300px; /* Fixed height for uniformity */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Crop any overflowing image parts */

  img {
    width: 100%; /* Cover full width of the div */
    height: 100%; /* Cover full height of the div */
    object-fit: cover; /* Ensure the image covers the div while maintaining aspect ratio */
  }

  @media (max-width: 768px) {
    height: 100%; /* Allow the image to expand and cover the full height of the div */

    img {
      object-fit: fill; /* Stretch to fully cover the container on smaller screens */
    }
  }
`;


