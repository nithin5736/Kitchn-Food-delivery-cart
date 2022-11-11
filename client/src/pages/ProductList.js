import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NVProducts from "../components/NVProducts";
import VProducts from "../components/VProducts";

const ProductList = () => {
  const [type, setType] = useState("");

  console.log(type);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Center>
        <Title>Favourite Dishes</Title>
      </Center>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Dishes:</FilterText>
          <Select
            onClick={(e) => {
              setType(e.target.value);
            }}
          >
            <Option selected disabled>
              Type
            </Option>
            <Option value="v">Veg</Option>
            <Option value="nv">Non veg</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {type === "" && <NVProducts />}
      {type === "" && <VProducts />}
      {type === "nv" && <NVProducts />}
      {type === "v" && <VProducts />}
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

export default ProductList;
