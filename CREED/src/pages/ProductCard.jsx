import React from "react";
import product from "../assets/product.jpg";

const ProductCard = ({ desc, image, name, price, discount }) => {
  return (
    <div className="transition josefin-sans-bold md:w-56 lg:w-96 duration-700 md:w-96 hover:scale-[1.03] bg-white rounded-xl shadow-lg p-8 border border-gray-200 ">
      {/* Product Image */}
      <div className="relative overflow-hidden flex justify-center items-center">
        <img
          className="aspect-square md:h-56 object-contain hover:scale-110 transition ease-in-out duration-700"
          src={image}
          alt="Product"
        />
      </div>

      <div className="description flex flex-col justify-left items-baseline ">
        {/* Product Name */}
        <div className="text-[25px] josefin-sans-bold font-semibold text-gray-800  sm:p-[5px]">
          {name[0].toLocaleUpperCase() + name.slice(1)}
        </div>
        <div className="text-md josefin-sans-light text-LightPrimaryColor sm:p-[5px]">
          {desc} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam sequi aut recusandae culpa voluptatibus ad quas voluptatum
          eveniet iste doloribus?
        </div>

        {/* Product Ratings */}
        <div className="flex justify-center items-center mt-2">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-gray-300 text-xl">★</span>
        </div>

        {/* Product Pricing */}
        <div className="mt-2 flex flex-col justify-center ">
          <span className="text-SecondaryColor text-[30px] font-bold sm:text-[25px]">
            ₹{price - price * (discount / 100)}
          </span>
          <div className="discount flex gap-[50px] sm:gap-[22px]">
            <span className="text-gray-400 line-through text-[17px] sm:text-[17px]">
              ₹{price}
            </span>
            <span className="text-red-500 text-[17px] font-semibold sm:text-[17px]">
              {discount}% Off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
