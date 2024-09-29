import { useEffect, useState } from "react";
import { fetchProducts } from "../services/product.service";
import { setLoading, setProducts } from "../slices/productSlice.js";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link, useLocation } from "react-router-dom";
import { setItemToLocalStorage } from "../utils/localStorage.js";
import ProductsDisplay from "../components/main/Products/ProductsDisplay.jsx";
import PathDisplay from "../components/common/PathDisplay.jsx";
import Loading from "../components/common/Loading.jsx";

export default function ProductsPage({ length = 0, path = true }) {
  // fetching the products and displaying with help of products cards
  const { loading, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    // after loading the component fetch the products
    (async () => {
      dispatch(setLoading(true));
      let res = await fetchProducts();
      if (res.length) {
        setItemToLocalStorage("products", res);
        if (length) {
          let array = [];
          for (let i = 0; i < length; i++) {
            if (i >= res.length) {
              break;
            }
            array.push(res[i]);
          }
          dispatch(setProducts(array));
        } else {
          dispatch(setProducts(res));
        }
      }
      dispatch(setLoading(false));
    })();
  }, []);
  if (loading) {
    return <Loading />;
  }
  // image name price discount
  return (
    <div className="flex flex-col gap-4 ">
      {path && (
        <div className="hidden md:block text-3xl md:text-4xl text-SecondaryColor font-bold">
          Products
        </div>
      )}
      {!path && (
        <div className="mt-7 text-3xl md:text-4xl text-SecondaryColor font-bold">
          Products
        </div>
      )}
      {path && <PathDisplay mobile={true} pc={false} />}
      <ProductsDisplay products={products} />
    </div>
  );
}
