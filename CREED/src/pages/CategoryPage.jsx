import { useEffect, useState } from "react";
import { setLoading, setProducts } from "../slices/productSlice.js";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link, useLocation } from "react-router-dom";
import { setItemToLocalStorage } from "../utils/localStorage.js";
import ProductsDisplay from "../components/main/Products/ProductsDisplay.jsx";
import { getProductsByCategory } from "../services/product.service.js";
import Header from "./Header.jsx";

export default function CategoryPage() {
  // fetching the products and displaying with help of products cards
  const { loading } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const slug = location.pathname.replace("/category/", "");
  let array = slug.split("-");
  array = array.map((word) => word[0].toUpperCase() + word.slice(1));
  const title = array.join(" ");
  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      let res = await getProductsByCategory(slug);
      setProducts(res);
      dispatch(setLoading(false));
    })();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      {/* <Header/> */}
      <div className="flex flex-col gap-4 ">
        {!!products.length && (
          <h1 className="text-3xl md:text-4xl text-SecondaryColor font-bold">
            {title[0].toUpperCase() + title.slice(1)}
          </h1>
        )}
        <ProductsDisplay products={products} />
      </div>
    </>
  );
}
