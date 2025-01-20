import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainDashboard from '../../Components/admindash/Maindashboard';
import DAUChart from '../../Components/admindash/DAUChart';
import UserGrowthChart from '../../Components/admindash/UserGrowthChart';
import Applications from '../../Components/admindash/Applications';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
`;

const SECTIONONE = styled.section`
  flex: 1;
  margin-bottom: 20px;
`;

const SECTIONTWO = styled.section`
  display: flex;
  justify-content: space-between;
  margin-right: 95px;
  margin-top: 30px;
  /* gap: 30px; */

  @media (max-width: 1300px) {
    flex-direction: column; 
  }
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const SECTIONTHREE = styled.section`
  margin-top: 20px;
`;

function Main() {
  return (
    <AdminContainer>
      <SECTIONONE>
        <MainDashboard />
      </SECTIONONE>

      <SECTIONTWO>
        <DAUChart />
        {/* <UserGrowthChart /> */}
      </SECTIONTWO>

      {/* <SECTIONTHREE>
        <Applications />
      </SECTIONTHREE> */}

    </AdminContainer>
  );
}

export default Main;



