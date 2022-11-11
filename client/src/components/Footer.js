import React from "react";
import styled from "styled-components";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
  background-color: #3C4048;
  color: orange;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: orange;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Kitchn</Logo>
        <Desc>Kitchn order food from favourite restaurants near you.</Desc>
  
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link
              to="/main"
              style={{ textDecoration: "none", color: "orange" }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "orange" }}
            >
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "orange" }}
            >
              Dishes
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "orange" }}
            >
              Veg Dishes
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "orange" }}
            >
              Non-veg Dishes
            </Link>
          </ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "orange" }}
            >
              Wishlist
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "orange" }}
            >
              FAQ
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <RoomSharpIcon style={{ marginRight: "10px" }} />{" "}
          <a
            href="https://goo.gl/maps/55Pvy1pt13e5Zx938"
            style={{ textDecoration: "none", color: "orange" }}
          >
            Sricity, Chitoor, Andhra Pradesh, India
          </a>
        </ContactItem>
        <ContactItem>
          <LocalPhoneSharpIcon style={{ marginRight: "10px" }} /> +91 83176
          49645
        </ContactItem>
        <ContactItem>
          <MailOutlineSharpIcon style={{ marginRight: "10px" }} />
          healthstack@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
