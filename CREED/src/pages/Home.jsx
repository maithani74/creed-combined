import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import ScrollToTop from "../components/common/ScrollComponent";
import Header from "./Header";
import TopSlider from "../components/common/TopSlider";
import Slideshow from "../components/common/Sideshow";
import Products from "./Products";
import Footer from "./Footer";
import SliderTest from "./SliderTest";
import Category from "./Category";
import HeaderTest from "./HeaderPhone";
import ProductsPage from "./ProductsPage";
import PrimaryWrapper from "../components/common/PrimaryWrapper";
import LatestProducts from "../components/main/Products/LatestProducts";
import Loading from "../components/common/Loading";
import ParallaxText from "./ParallaxText";
import "../../src/index.css";
import styled from "styled-components";
import ImageSlider from "./AboutUS/ImageSlider";
import AboutComponent from "./AboutUS/AboutComponent";
import TextComponent from "./AboutUS/TextComponent";
import ResponsiveComponent from "./AboutUS/ResponsiveComponent";
import LapRES from "./AboutUS/LapRES";

const TextContainer = styled.div`
  padding: 20px;
  line-height: 1.5;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
    background-color : white;
`;

const Heading = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: black;
  margin: 0.2em 0;
`;

const SubHeading = styled.h2`
  font-weight: bolder;
  font-size: 3em;
  color: #007bff;
  margin: 0.2px 0.1px;
`;

const Home = () => {
  const viewPortWidth = window.innerWidth <= 480;
  return (
    <div className=" ">
      <TopSlider />
      {viewPortWidth ? <HeaderTest /> : <Header />}
      <Slideshow />
      <Category />
      <div className="parallax-section">
        <ParallaxText baseVelocity={-5}> CREED </ParallaxText>
        <ParallaxText baseVelocity={5}>
          “Crafted for Life’s Every Sip”{" "}
        </ParallaxText>
      </div>
      <PrimaryWrapper>
        <LatestProducts />
      </PrimaryWrapper>


      <div className="bg-[white]">
      {/* TODO: Create Design for Pc  */}
      <div className="sm:hidden flex">
        <LapRES />
      </div>
      <div className="sm:hidden flex">
        <ResponsiveComponent />
      </div>
      <div className="sm:hidden flex">
        
      </div>
      <div className="md:hidden">
        <TextComponent />
        <AboutComponent />
        
      </div>
    </div>


      {/**Experience pebble */}
      <div className="experiencePebble pt-28 pb-28 pl-8 pr-8 bg-white">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          className="head text-[#002D46] font-semibold text-4xl mb-6 "
        >
          Experience CREED
        </div>

        <div
          className="images flex flex-wrap justify-between "
          style={{ fontSize: "15px", boxShadow: "none" }}
        >
          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-1">
            <img
              style={{ maxWidth: "70%", height: "auto" }}
              src="https://www.pebblecart.com/cdn/shop/files/A_decade_old.gif?v=1668739055&width=130"
              alt=""
            />
            <span className="text-center">
              4+ Years
              <br />
              legacy
            </span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img
              style={{ maxWidth: "70%", height: "auto" }}
              src="https://www.pebblecart.com/cdn/shop/files/Trusted_Product.gif?v=1668739055&width=130"
              alt=""
            />
            <span className="text-center">
              Trusted
              <br />
              Products
            </span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img
              style={{ maxWidth: "70%", height: "auto" }}
              src="https://www.pebblecart.com/cdn/shop/files/Replacement.gif?v=1668739055&width=130"
              alt=""
            />
            <span className="text-center">
              Hassle Free
              <br />
              Replacement
            </span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img
              style={{ maxWidth: "70%", height: "auto" }}
              src="https://www.pebblecart.com/cdn/shop/files/Warranty.gif?v=1668739055&width=130"
              alt=""
            />
            <span className="text-center">
              Assured
              <br />
              Warranty
            </span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img
              style={{ maxWidth: "70%", height: "auto" }}
              src="https://www.pebblecart.com/cdn/shop/files/Free_shipping.gif?v=1668739055&width=130"
              alt=""
            />
            <span className="text-center">
              Fast & Free
              <br />
              Delivery
            </span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img
              style={{ maxWidth: "70%", height: "auto" }}
              src="https://www.pebblecart.com/cdn/shop/files/Quick_SUpport.gif?v=1668739055&width=130"
              alt=""
            />
            <span className="text-center">
              Quick
              <br />
              Support
            </span>
          </div>
        </div>
      </div>
    
      <Footer></Footer>
    </div>
  );
};

export default Home;
