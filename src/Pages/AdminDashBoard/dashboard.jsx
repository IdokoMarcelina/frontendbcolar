import React from 'react';
import AdminSidebar from '../../Components/admindash/AdminSidebar';
import Main from './Main';
import NavBarAdmin from '../../Components/admindash/NavBarAdmin';
import styled from 'styled-components';

function Dashboard() {
  return (
    <>
      <NavBarAdmin />
      <AdminDashboard>
       <LEFT>
        <AdminSidebar />

       </LEFT>
       
        
        
        <RIGHT>
        <Main />
        </RIGHT>
      </AdminDashboard>
    </>
  );
}

export default Dashboard;

// Styled Components

const AdminDashboard = styled.div`
  display: flex;
  @media (max-width: 800px) {

  }
`
const RIGHT = styled.div`
    width: 75%; 
  @media (max-width: 800px) {
   flex-wrap: wrap;
  }
`
const LEFT = styled.div`
    width: 25%;
  @media (max-width: 800px) {
   display: none;
  }
`;

