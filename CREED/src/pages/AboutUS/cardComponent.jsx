import React, { useState } from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  margin: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 1em;
`;

const Title = styled.h3`
  margin-top: 0.5em;
  flex-grow: 1;
`;

const Description = styled.p`
  color: #666;
  flex-grow: 1;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }

  &.back {
    background-color: #007bff;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const SlidingText = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  transition: transform 0.5s ease;

  ${(props) =>
    props.show &&
    css`
      transform: translateX(-100%);
    `}
`;

const AdditionalText = styled.p`
  color: #333;
`;

const CardComponent = ({ image, title, description, info }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card>
      <div className="w-full flex justify-center">
        <Image src={image} alt={title} />
      </div>

      <Title>{title}</Title>
      <Description>{description}</Description>
      {!showMore && (
        <Button onClick={() => setShowMore(true)}>READ MORE →</Button>
      )}
      <SlidingText show={showMore}>
        <AdditionalText>{info}</AdditionalText>
        <Button className="back" onClick={() => setShowMore(false)}>
          GO BACK
        </Button>
      </SlidingText>
    </Card>
  );
};

export default CardComponent;
