import React, { useState } from "react";
import styled from "styled-components";

const pendingApplications = () => {
  // const [applications, setApplications] = useState([
  //   { id: 1, name: "Application 1" },
  //   { id: 2, name: "Application 2" },
  //   { id: 3, name: "Application 3" },
  //   { id: 4, name: "Application 4" },
  //   { id: 5, name: "Application 5" },
  // ]); 

  // const handleAccept = (id) => {
  //   alert(`Accepted application ${id}`);
  // };

  // const handleDelete = (id) => {
  //   alert(`Deleted application ${id}`);
  // };

  return (
    <>
      <Title>Pending Applications</Title>

    </>
    // <Section>
    //   <ApplicationsList>
    //     {applications.map((application, index) => (
    //       <ListItem key={application.id} shadow={index % 2 === 1}>
    //         <ApplicationName>{application.name}</ApplicationName>
    //         <ButtonWrapper>
    //           <ActionButton onClick={() => handleAccept(application.id)}>
    //             Accept
    //           </ActionButton>
    //           <ActionButton
    //             onClick={() => handleDelete(application.id)}
    //             delete
    //           >
    //             Delete
    //           </ActionButton>
    //         </ButtonWrapper>
    //       </ListItem>
    //     ))}
    //   </ApplicationsList>
    //   <PaginationWrapper>
    //     <PaginationButton>Previous</PaginationButton>
    //     <PaginationButton>Next</PaginationButton>
    //   </PaginationWrapper>
    // </Section>
  );
};

export default pendingApplications;

// Styled Components

// const Section = styled.div`
//   width: 80%;
//   margin: 20px auto;
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
// `;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

// const ApplicationsList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px;
//   background-color: #f9f9f9;
//   margin-bottom: 10px;
//   border-radius: 8px;
//   box-shadow: ${(props) => (props.shadow ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none")};
// `;

// const ApplicationName = styled.span`
//   font-size: 16px;
//   font-weight: 600;
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const ActionButton = styled.button`
//   padding: 8px 12px;
//   font-size: 14px;
//   cursor: pointer;
//   border: none;
//   border-radius: 5px;
//   background-color: ${(props) => (props.delete ? "#f44336" : "#4caf50")};
//   color: #fff;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: ${(props) =>
//       props.delete ? "#d32f2f" : "#388e3c"};
//   }
// `;

// const PaginationWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const PaginationButton = styled.button`
//   padding: 10px 20px;
//   font-size: 14px;
//   cursor: pointer;
//   margin: 0 5px;
//   background-color: #2196f3;
//   color: #fff;
//   border: none;
//   border-radius: 5px;

//   &:hover {
//     background-color: #1976d2;
//   }
// `;

