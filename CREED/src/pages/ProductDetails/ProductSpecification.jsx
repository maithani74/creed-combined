import React from "react";
import styled from "styled-components";

const SpecificationWrapper = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
  line-height: 1.6;
  width: auto;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  margin-bottom: 16px;
`;

const Detail = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  color: #555;
  font-size: 14px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  color: #777;
`;
const AddToCartButton = styled.button`
  background-color: #4676ff;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #39b2e6;
  }

  &:active {
    background-color: #32a0cc;
  }
`;

const ProductSpecification = ({ product }) => {
  return (
    <>
      <SpecificationWrapper>
        <Title>Specification</Title>

        <Detail>
          <Label>Shown:</Label>
          <span>{product.shown}</span>
        </Detail>

        <Detail>
          <Label>Style:</Label>
          <span>{product.style}</span>
        </Detail>

        <Description>{product.description}</Description>
      </SpecificationWrapper>
      <AddToCartButton>Add To Cart</AddToCartButton>
    </>
  );
};

export default ProductSpecification;
