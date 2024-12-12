import React from 'react'
import styled from 'styled-components'
import MainDashboard from '../../Components/admindash/Maindashboard'
import DAUChart from '../../Components/admindash/DAUChart'
import UserGrowthChart from '../../Components/admindash/UserGrowthChart'
import MostUsedArtisansChart from '../../Components/admindash/MostUsedArtisan'
import ArtisanSignupsChart from '../../Components/admindash/ArtisanSignupChart'
import pendingApplications from '../../Components/admindash/pendingApplications'

function Main() {
  return (
    <AdminContainer>

      <SECTIONONE>
        <MainDashboard />
      </SECTIONONE>
      
      <ChartsWrapper>
        <ChartContainer>
          <DAUChart />
        </ChartContainer>
        <ChartContainer>
          <UserGrowthChart />
        </ChartContainer>
      </ChartsWrapper>

      <ChartsWrapper>
        <ChartContainer>
          <MostUsedArtisansChart/>
        </ChartContainer>

        <ChartContainer>
          <ArtisanSignupsChart/>
        </ChartContainer>
      </ChartsWrapper>

      <SETIONTHREE>
        <pendingApplications/>
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
const SETIONTHREE = styled.div`
  margin-bottom: 50px;
`;

const ChartsWrapper = styled.div`
  display: flex;
  width: 800px;
  margin: 25px;
  margin-bottom: 100px;
  flex-direction: row;
  gap: 6rem;  // Ensures 2rem space between charts
  justify-content: space-evenly; // Ensures space between charts even if the screen size increases
  margin-top: 20px;
  flex-wrap: wrap;  // Allows charts to wrap on smaller screens
`;

const ChartContainer = styled.div`
  width: 300px; // Set width for charts
  height: 300px; // Set height for charts
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    width: 200px; // Reduce chart size on mobile
    height: 200px;
  }
`;
