import React from 'react'
import styled from 'styled-components'
import MainDashboard from '../../Components/admindash/Maindashboard'
import DAUChart from '../../Components/admindash/DAUChart'
import UserGrowthChart from '../../Components/admindash/UserGrowthChart'
import MostUsedArtisansChart from '../../Components/admindash/MostUsedArtisan'
import ArtisanSignupsChart from '../../Components/admindash/ArtisanSignupChart'
import pendingApplications from '../../Components/admindash/pendingApplications'
import Applications from '../../Components/admindash/Applications'

function Main() {
  return (
    <AdminContainer>

      <SECTIONONE>
        <MainDashboard />
      </SECTIONONE>
      
      <SECTIONTWO>
        
          <DAUChart />
        <UserGrowthChart />
      

      </SECTIONTWO>
   

      <SETIONTHREE>
        {/* <pendingApplications/> */}
        <Applications/>
      </SETIONTHREE>

    </AdminContainer>
  )
}

export default Main

// Styled Components

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const SECTIONONE = styled.div`
  margin-bottom: 50px;
`;
const SECTIONTWO = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 30px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const CONTAINER = styled.div`
  width: 500px;
  height: 350px;
  background-color: lightblue;
  
`;
const SETIONTHREE = styled.div`
  margin-bottom: 50px;
  margin-top: 20px;
`;


//   @media (max-width: 800px) {
//     width: 200px; // Reduce chart size on mobile
//     height: 200px;
//   }
// `;
