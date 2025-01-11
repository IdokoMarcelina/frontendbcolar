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
  margin-top: 20px;
`;

const SECTIONONE = styled.section`
  flex: 1;
  margin-bottom: 20px;
`;

const SECTIONTWO = styled.section`
  display: flex;
  gap: 20px;
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
        <UserGrowthChart />
      </SECTIONTWO>

      <SECTIONTHREE>
        <Applications />
      </SECTIONTHREE>

      {/* <Link to="/admin">Go to Admin Settings</Link> */}
    </AdminContainer>
  );
}

export default Main;
