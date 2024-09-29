import TextComponent from "./TextComponent";
import AboutComponent from "./AboutComponent";
import CardComponent from "./cardComponent";
import LapRES from "./LapRES";
import styled from "styled-components";
import ResponsiveComponent from "./ResponsiveComponent";
const cardData = [
  {
    image: "shop.png",
    title: "Full category shop",
    description: "Explore our comprehensive online store.",
    info: "Explore our comprehensive online store where you'll find a diverse range of products.",
  },
  {
    image: "dis.png",
    title: "Extraordinary discount",
    description: "Experince unparalled savings.",
    info: "Experince unparalled savings on wide selection of premium products.",
  },
  {
    image: "cargo.png",
    title: "Free Cargo",
    description: "Enjoy the convenience of free cargo services.",
    info: "Enjoy the convenience of free cargo services, ensuring your purchases and delivery to you.",
  },
  {
    image: "hour.png",
    title: "24-Hour service",
    description: "Our commitment to exceptional",
    info: "Our commitment to exceptional customer means our 24 hour customer service.",
  },
];
const Boxes = styled.div`
  @media (min-width: 600px) {
    display: flex;
  }
  background-color : white;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 10%;
  }
`;
function AboutUs() {
  return (
    <div className="bg-[white]">
      {/* TODO: Create Design for Pc  */}
      <div className="sm:hidden flex">
        <LapRES />
      </div>
      <div className="sm:hidden flex">
        <ResponsiveComponent />
      </div>
      <div className="sm:hidden flex">
        <Boxes>
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              info={card.info}
            />
          ))}
        </Boxes>
      </div>
      <div className="md:hidden">
        <TextComponent />
        <AboutComponent />
        <Boxes>
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              info={card.info}
            />
          ))}
        </Boxes>
      </div>
    </div>
  );
}

export default AboutUs;
