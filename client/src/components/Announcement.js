import React from "react";
import styled from "styled-components";

const Container = styled.div`
   height: 30px;
   background-color: orange;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 14px;   
   font-weight: 500px;
`;

const Announcement = () => {
  return (
    <Container>ORDER FOOD FROM YOUR NEARBY RESTAURANTS</Container>
  );
};

export default Announcement;
