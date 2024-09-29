import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

// Styled components
const Container = styled.div`
  background-color : white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-top: 5%;
  max-width: 90%;
  margin: 0 auto;
  font-size: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const TextSection = styled.div`
  flex: 1;
  margin-right: 2rem;

  @media (max-width: 1024px) {
    margin-right: 0;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.2rem;
    color: #333;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: #666;
    text-align: justify;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    font-size: 2.8rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StatsSection = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 4%;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  div {
    text-align: center;

    h3 {
      font-size: 2.2rem;
      color: #007bff;
      margin-bottom: 0.5rem;

      @media (max-width: 1024px) {
        font-size: 1.4rem;
      }
    }

    p {
      font-size: 1.3rem;
      color: #666;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  background-color: #40c4ff;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e90ff;
  }
`;

// React Component
const LapRES = () => {
  
  return (
    <>
      <Container>
        <TextSection>
          <h1>
            <p>“CREED: Crafted for Life’s Every Sip”</p>
            Designed for Your Hydration Journey.
            <p>
              <a href="/">Online Shopping</a>
            </p>
          </h1>
          <p>
          Since our inception in 2022, CREED has adhered to a singular principle: create exceptional experiences centered around you. We specialize in providing a diverse range of bottles, including baby feeding bottles, single-wall bottles, and double-wall bottles. Our commitment is to fuse innovation, quality, and thoughtful design into every product we offer.
          </p>

          <StatsSection>
            <div>
              <h3>10+</h3>
              <p>Shopping Categories</p>
            </div>
            <div>
              <h3>2+</h3>
              <p>Different Territories</p>
            </div>
            <div>
              <h3>4K+</h3>
              <p>Happy Clients</p>
            </div>
          </StatsSection>
        </TextSection>

        <ImageSlider />
        
      </Container>
    </>
  );
};

export default LapRES;
