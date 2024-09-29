import React from "react";
import styled from "styled-components";

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  padding-top: 10%;

  img {
    max-width: 80%;
    height: auto;
    border-radius: 20px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

const TextSection = styled.div`
  flex: 1.2;
  padding-left: 2 rem;

  @media (max-width: 1024px) {
    padding-left: 0;
  }

  h2 {
    font-size: 2.4rem;
    color: #333;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
      font-size: 1.6rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    color: #666;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 1.6rem;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: #666;
    line-height: 1.8;

    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e90ff;
  }
`;

// React Component
const ResponsiveComponent = () => {
  const handleClick = () => {
    window.location.href = "/allProducts";
  };
  return (
    <Container>
      <ImageSection>
        <img src="resComp.jpeg" alt="Service Image" />
      </ImageSection>
      <TextSection>
        <h2>
        "Crafting Hydration Solutions for Your Lifestyle." 
        </h2>
        <p>
        At CREED, we believe that every sip counts. That’s why we meticulously craft our bottles to suit the unique needs of our customers. From the tender care of baby feeding to the on-the-go hydration needs of adults, our products are designed to enhance your daily life. <br />
        <br />

We are more than just a brand; we are a community. Join us on this journey towards a more sustainable and stylish way to hydrate. Together, let’s create a better tomorrow, one sip at a time.
        </p>
        <Button onClick={handleClick}>Explore Products</Button>
      </TextSection>
    </Container>
  );
};

export default ResponsiveComponent;
