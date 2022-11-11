import React from "react";
import Collapsible from "react-collapsible";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Body>
        <Head>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </Head>
        <Box>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>How to search city wise restaurant?</span>
                <span>+</span>
              </h3>
            >
              <p>
                To search restaurants in particular city is very simple with
                foodchow. Enter preferred city name in search bar and click on
                search. All restaurant listed in searched city will be display.
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>How to register restaurant on Kitchn?</span>
                <span>+</span>
              </h3>
            >
              <p>
                Anyone can start their restaurant business online within few
                minutes. Click on Add Your Restaurant from foodchow welcome
                page. Enter your mail id and receive mail to add your restaurant
                details. Add whole details and restaurant will be online
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>How to view restaurant menu?</span>
                <span>+</span>
              </h3>
            >
              <p>
                Customer have to go to restaurant page to view menu of
                restaurant. From Cuisine option on restaurant page customer can
                view menu of that restaurant.
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  How can customer change ingredients or customize item ?
                </span>
                <span>+</span>
              </h3>
            >
              <p>
                Kitchn providing feature to customize item while placing order
                for food. If restaurant owner have provided functionality to
                customize the item. User have to open menu of the restaurant and
                click on Customize for item which you want to customize. You can
                change the ingredients or add more ingredients to item according
                to your choice.
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  Who will issue refund for order cancellation or other issue?
                </span>
                <span>+</span>
              </h3>
            >
              <p>
                To customer, refund will be issue by restaurant owner only.
                Foodchow is not responsible for order cancellation or refund of
                the order.
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  Do I need to pay extra charges for online payment or online
                  orders?
                </span>
                <span>+</span>
              </h3>
            >
              <p>
                All extra charges are taken by restaurant owner. Foodchow is not
                taking any extra charges for online payment or online orders.
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Items are different from what I ordered</span>
                <span>+</span>
              </h3>
            >
              <p>
                We are sorry you had to experience this.This happens due to miss
                communication,these are the rare cases we fond.we try not to
                repeat them again.
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  How to view only non-veg item from restaurant menu?{" "}
                </span>
                <span>+</span>
              </h3>
            >
              <p>
                Searching your favourite item from whole menu is headache.
                Foodchow providing solution for this also. If you are interested
                in only Non-Veg items then view menu of only Non-Veg items. Go
                to Cuisine page of your selected restaurant and click on
                Non-Veg.
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>How to search restaurant for particular cuisine?</span>
                <span>+</span>
              </h3>
            >
              <p>
                On foodchow you can also find restaurant according to your
                choice of cuisine. Search restaurant list in your city and click
                on your favourite cuisine from left hand side panel. All
                restaurants will be listed with your selected cuisine.
              </p>
            </Collapsible>
          </Fst>
          <Fst>
            <Collapsible
              trigger=<h3
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>How to view only Veg item from restaurant menu?</span>
                <span>+</span>
              </h3>
            >
              <p>
                Searching your favourite item from whole menu is headache.
                Foodchow providing solution for this also. If you are interested
                in only Pure Veg items then view menu of only Veg items. Go to
                Cuisine page of your selected restaurant and click on Pure-Veg.
              </p>
            </Collapsible>
          </Fst>
        </Box>
      </Body>
      <Footer />
    </>
  );
};

const Body = styled.div`
  height: 1000px;
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Head = styled.div`
  margin-top: 20px;
  padding: 20px;
  font-size: 400px;
  h1 {
    margin-left: 100px;
    text-align: center;
  }
`;

const Fst = styled.div`
  padding: 5px;
  margin: 7px;
  font-weight: 20px;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 2.3px -5px rgba(0, 0, 0, 0.02),
    0px 0px 5.6px -5px rgba(0, 0, 0, 0.028),
    0px 0px 10.5px -5px rgba(0, 0, 0, 0.035),
    0px 0px 18.8px -5px rgba(0, 0, 0, 0.042),
    0px 0px 35.1px -5px rgba(0, 0, 0, 0.05),
    0px 0px 84px -5px rgba(0, 0, 0, 0.07);

  p {
    color: #151515;
    font-style: italic;
  }

  &:hover {
    background-color: rgb(222, 222, 224);
  }
`;

const Box = styled.div`
  margin: 25px;
`;

export default FAQ;
