import React from "react";
import Data from "../../Data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <div className="wrapper mb-[50px] w-full h-full flex flex-col justify-center items-center sm:pt-[50px] sm:p-[5px] ">
        <span className="text-[#002d46] w-full pl-[50px] pr-[50px] pt-[50px] pb-[20px] sm:pl-[10px] sm:pr-[10px] sm:pb-[10px] sm:pt-[10px] text-[60px] josefin-sans-bold sm:text-[35px] sm:mb-[20px]">
          New Launches
        </span>
        <div className="flex flex-wrap justify-center items-center gap-[20px] w-full sm:w-[90%]">
          {Data.map((items, index) => (
            <ProductCard
              key={index}
              image={items.img}
              name={items.name}
              id={items.id}
              price={items.price}
              discount={items.discount}
              className="w-[45%] sm:w-[45%] md:w-[30%] lg:w-[23%]" // Adjust widths as needed
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
