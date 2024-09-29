// src/components/ProductList.js
import React, { useEffect } from "react";
import styled from "styled-components";
import ProductComponent from "./ProductComponent";
import ProductSpecification from "./ProductSpecification";
import ProductSlider from "./ProductSlider";
import { useLocation, useParams } from "react-router-dom";

const product = {
  id: 1,
  name: "Milton Stainless Steel",
  images: ["steel.png", "holdingBottle.jpg", "Slider_image3.jpg"],
  rating: 4,
  price: "299,43",
  shown: "White / Stainless Steel",
  description:
    "The CREED Super Stainless Steel Bottle is made from high-quality, food-grade stainless steel and is safe for regular use. ",
  style: "Curved Neck",
};

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const ProductDetails = () => {
  let prodId = useParams();
  // TODO: Fetch the product and display
  useEffect(() => {}, []);
  return (
    <>
      <ProductListWrapper>
        <ProductComponent key={product.id} product={product} />
        <ProductSpecification product={product} />
      </ProductListWrapper>
      <ProductSlider />
    </>
  );
};

export default ProductDetails;
