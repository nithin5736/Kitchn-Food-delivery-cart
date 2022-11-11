import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import axios from "axios";

const ProductPage = () => {
  const [setCart] = useContext(ThemeContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.productname}</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            fugiat quam similique nobis voluptatem dignissimos, incidunt et
            voluptates illo, laudantium minima velit laboriosam eligendi aut
            natus veritatis atque reiciendis deleniti?
          </Desc>
          <Price>Rs.{product.price}</Price>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Desc = styled.p`
  font-weight: 400;
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
`;

export default ProductPage;
