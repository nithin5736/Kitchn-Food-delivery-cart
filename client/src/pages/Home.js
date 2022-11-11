import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NVProducts from "../components/NVProducts";
import VProducts from "../components/VProducts";
import Footer from "../components/Footer";
import styled from "styled-components";
import nv from "../images/nv.mp4";
import v from "../images/v.mp4";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <video src={nv} autoPlay loop muted width="100%" height="10%" />
      <Center>
        <Logo>Non Veg dishes</Logo>
      </Center>
      <NVProducts />
      <video src={v} autoPlay loop muted width="100%" height="10%" />
      <Center>
        <Logo>Veg dishes</Logo>
      </Center>
      <VProducts />
      <Footer />
    </div>
  );
};

const Logo = styled.h1`
  font-weight: 500;
  font-size: 2.8rem;
  color: #3c4048;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export default Home;
