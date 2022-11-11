import styled from "styled-components";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language style={{ color: "orange", marginRight: "10px" }}>
            EN
          </Language>
          {/* <SearchConatiner> */}
          <Input
            placeholder="Search..."
            style={{
              color: "orange",
              border: "1px solid black",
              height: "30px",
              borderRadius: "2px",
            }}
          />
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "orange" }}>
              Kitchn
            </Link>
          </Logo>
        </Center>
        <Right>
          <Item>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "orange",
              }}
            >
              DISHES
            </Link>
          </Item>
          <Item>
            <Link
              to="/faqs"
              style={{
                textDecoration: "none",
                color: "orange",
                marginTop: "15px",
              }}
            >
              FAQs
            </Link>
          </Item>
          <Item>
            <Badge color="secondary">
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: "orange",
                }}
              >
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </Item>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 70px;
  margin-bottom: 0px;
  ${mobile({ height: "50px" })};
  background-color: #3c4048;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchConatiner = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2.8rem;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Item = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-top: 10px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default Navbar;
