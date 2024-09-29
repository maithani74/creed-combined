import React, { useEffect } from "react";
import Feed from "../../src/assets/feed.jpg";
import Double from "../../src/assets/Double.jpg";
import Single from "../../src/assets/Single.jpg";
import Copper from "../../src/assets/Copper.jpg";
import BabyFeeding from "../../src/assets/feed.jpg";
import { setCategories, setLoading } from "../slices/categorySlice";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../services/category.service";
import { Link } from "react-router-dom";

export const Category = () => {
  const { loading, categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 800,
    });
  }, []);
  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      const res = await getAllCategories();
      dispatch(setCategories(res));
      dispatch(setLoading(false));
    })();
  }, []);

  return (
    <div className="category py-10 flex josefin-sans-bold flex-col justify-center mt-[20px]  items-center text-[60px] sm:text-[30px] pt-[40px] sm:pt-[60px] font-bold">
      What We Deliver
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-center w-[100%] py-8 sm:p-[0] mt-10"
      >
        {categories.map((category, index) => {
          const images = [Single, Double, BabyFeeding];
          return (
            <Link
              key={category._id}
              to={`/category/${category.slug}`}
              className="flex flex-col object-cover items-center text-center w-1/4 sm:w-1/2"
            >
              {/* Image */}
              <div className="h-104 flex items-center justify-center w-64 object-cover sm:h-30 sm:w-32 rounded-full overflow-hidden border-2 border-gray-200 shadow-md">
                <img
                  src={images[index]}
                  alt={category.name}
                  className="h-[100%] sm:object-cover sm:h-full w-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Label */}
              <p className="mt-3 text-lg josefin-sans-bold font-medium text-gray-800 group-hover:text-gray-600">
                {category.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
