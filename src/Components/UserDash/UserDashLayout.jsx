import React, { useState } from "react";
import styled from "styled-components";
import UserSidebar from "./UserSidebar";
// import SubNav from "../subnav/SubNav";

const UserDashLayout = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };
  
    return (
      <LayoutContainer>
        {/* <SubNav toggleSidebar={toggleSidebar} /> */}
  
        {/* <SidebarWrapper isVisible={isSidebarVisible}>
          <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
          <UserSidebar />
        </SidebarWrapper> */}
  
        <MainContent isVisible={isSidebarVisible}>{children}</MainContent>
      </LayoutContainer>
    );
  };
  
  export default UserDashLayout;

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1440px;
  margin: auto;
  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) => (isVisible ? "translateX(0)" : "translateX(-100%)")};
  position: fixed;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 250px;
  background-color: #E1E7F3 ;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  /* top: 10px; */
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: red; 
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: ${({ isVisible }) => (isVisible ? "250px" : "0")};
  transition: margin-left 0.3s ease-in-out;
  padding:  20px 20px 0px; 
  overflow-y: auto;
`;


