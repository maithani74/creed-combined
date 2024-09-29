import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import { setLoading, setProducts } from "../../slices/productSlice";
import { fetchProducts } from "../../services/product.service";
import { setItemToLocalStorage } from "../../utils/localStorage";
import { Link } from "react-router-dom";

const SliderWrapper = styled.div`
  width: 100%;
  padding: 20px;
  .slick-prev,
  .slick-next {
    z-index: 1;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  object-fit: contain;
  height: auto;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  color: #333;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const CurrentPrice = styled.span`
  font-size: 1.5rem;
  color: #2997ff;
  margin-right: 10px;
`;

const OldPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`;

const Discount = styled.span`
  color: red;
  font-weight: bold;
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "red",
        overflow: "hidden",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "white" }}
      onClick={onClick}
    />
  );
}

export default function ProductSlider({ currentProdId = "" }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    lazyLoad: true,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      let res = await fetchProducts();
      const result = res.filter((prod) => prod._id != currentProdId);
      setProducts(result);
      dispatch(setLoading(false));
    })();
  }, []);

  return (
    <>
      <SliderWrapper className="slider-container">
        <Slider {...settings}>
          {products.map((product, index) => {
            const currentPrice =
              product.price - product.price * (product.discount / 100);
            const oldPrice = product.price;
            return (
              <Card className="mx-3" key={index}>
                <div>
                  <ProductImage src={product.images[0]} alt={product.name} />
                </div>
                <Link to={"/product/" + product._id}>
                  <div className="text-xl font-bold">
                    {product.name[0].toLocaleUpperCase() +
                      product.name.slice(1)}
                  </div>
                  <PriceContainer>
                    <CurrentPrice>₹{currentPrice.toFixed(2)}</CurrentPrice>{" "}
                    <OldPrice>₹{oldPrice.toFixed(2)}</OldPrice>
                  </PriceContainer>
                  <Discount>{product.discount}% Off</Discount>
                </Link>
              </Card>
            );
          })}
        </Slider>
      </SliderWrapper>
    </>
  );
}
