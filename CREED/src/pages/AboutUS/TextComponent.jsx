import React from "react";
import styled from "styled-components";

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

const TextComponent = () => {
  return (
    <TextContainer>
      <Heading>"Innovative Designs for Life’s Every Sip."</Heading>
      <SubHeading></SubHeading>
    </TextContainer>
  );
};

export default TextComponent;
