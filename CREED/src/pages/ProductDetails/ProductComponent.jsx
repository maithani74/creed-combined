// src/components/ProductDetail.js
import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetailWrapper = styled.div`
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
`;

const ProductCarousel = styled(Carousel)`
  max-width: 100%;

  .carousel .slide img {
    border-radius: 8px;
    width: auto;
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
  }
`;

const ProductName = styled.h2`
  font-size: 18px;
  margin: 8px 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #1a73e8;
  align-items: left;
`;

const Rating = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  margin: 8px 0;
`;

const Star = styled.span`
  color: #fbc02d;
  font-size: 18px;
  align-items: last baseline;
`;

const ProductComponent = ({ product }) => {
  return (
    <ProductDetailWrapper>
      <ProductCarousel>
        {product.images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`${product.name} ${index + 1}`} />
          </div>
        ))}
      </ProductCarousel>

      <ProductName>{product.name}</ProductName>

      <Rating>
        {Array(product.rating)
          .fill()
          .map((_, i) => (
            <Star key={i}>★</Star>
          ))}
        {Array(5 - product.rating)
          .fill()
          .map((_, i) => (
            <Star key={i}>☆</Star>
          ))}
      </Rating>

      <ProductPrice>₹{product.price}</ProductPrice>
    </ProductDetailWrapper>
  );
};

export default ProductComponent;
