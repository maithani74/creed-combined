import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 70%;
  height: auto;
  border-radius: 8% 2px 4px 8%;

  object-fit: cover;
  margin: 0 auto;
`;

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <Image src="img2.JPG" alt="Image 1" />
        </div>
        <div>
          <Image src="Slider_image2.jpg" alt="Image 2" />
        </div>
        <div>
          <Image src="Slider_image3.jpg" alt="Image 3" />
        </div>
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
