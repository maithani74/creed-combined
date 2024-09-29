import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const Container = styled.div`
  padding: 20px;
  background-color : white;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 500px) {
    .hAoJMw {
      width: 100%;
      margin: 0 auto;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextContent = styled.div`
  flex: 2;
  margin-right: 20px;
  max-width: 800px;
  width: 100%;
`;

const Bottom = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    padding: 6rem;
  }
`;
const Description = styled.p`
  font-size: 1rem;
  color: black;
  margin: 0 auto;
  text-align: justify;
  max-width: 600px;
  padding: 0 10px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Stat = styled.div`
  text-align: center;
  margin: 3px;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  color: #007bff;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: black;
  margin-top: 5px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin: 0.2em auto;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const SubHeading = styled.h2`
  font-weight: bolder;
  font-size: 3rem;
  color: #007bff;
  margin: 0.2em auto;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;
const ImgCompt = styled.img`
  width: 0;
  height: 0;
  @media (min-width: 1024px) {
    width: 40%;
    height: auto;
    border-radius: 20%;
  }
`;

const AboutComponent = () => {
  return (
    <Container>
      <ContentWrapper>
        <TextContent>
          <Description>
          Since our inception in 2022, CREED has adhered to a singular principle: create exceptional experiences centered around you. We specialize in providing a diverse range of bottles, including baby feeding bottles, single-wall bottles, and double-wall bottles. Our commitment is to fuse innovation, quality, and thoughtful design into every product we offer.
          </Description>
          <StatsContainer>
            <Stat>
              <StatNumber>10+</StatNumber>
              <StatLabel>Shopping Categories</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>2+</StatNumber>
              <StatLabel>Different Territories</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>4K+</StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </Stat>
          </StatsContainer>
        </TextContent>

        <ImageSlider />
      </ContentWrapper>
      <Bottom>
        <ImgCompt src="holdingBottle.jpg" alt="text"></ImgCompt>
        <Description>
          <Heading>We offer the best service that will</Heading>
          <SubHeading>make it easier</SubHeading>
          At CREED, we believe that every sip counts. That’s why we meticulously craft our bottles to suit the unique needs of our customers. From the tender care of baby feeding to the on-the-go hydration needs of adults, our products are designed to enhance your daily life. <br /> <br />
          We are more than just a brand; we are a community. Join us on this journey towards a more sustainable and stylish way to hydrate. Together, let’s create a better tomorrow, one sip at a time.
        </Description>
      </Bottom>
    </Container>
  );
};

export default AboutComponent;
