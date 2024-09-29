import { useEffect, useState } from "react";
import ProductsDisplay from "./ProductsDisplay";
import CommingSoon from "../../common/CommingSoon";
import { setLoading } from "../../../slices/productSlice";
import { fetchLatestProducts } from "../../../services/product.service";
import { useDispatch } from "react-redux";

export default function LatestProducts() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      let res = await fetchLatestProducts();
      setProducts(res);
      dispatch(setLoading(false));
    })();
  }, []);
  return (
    <>
      <div className="my-7 text-3xl md:text-4xl text-SecondaryColor font-bold">
        Latest Products
      </div>
      {products.length ? (
        <ProductsDisplay products={products} />
      ) : (
        <CommingSoon />
      )}
    </>
  );
}
