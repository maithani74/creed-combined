import { Link } from "react-router-dom";
import ProductCard from "../../../pages/ProductCard";
import CommingSoon from "../../common/CommingSoon";
export default function ProductsDisplay({ products = [] }) {
  if (!products.length) {
    return (
      <>
        <CommingSoon />
      </>
    );
  }
  return (
    <div className="flex py-2 justify-center md:justify-normal lg:gap-8 gap-4  flex-wrap ">
      {products.map((product, index) => {
        let productDetails = {
          image: product.images[0],
          price: product.price,
          discount: product.discount,
          name: product.name,
          desc: product.description,
        };
        return (
          <Link className="" key={index} to={`/product/${product._id}`}>
            <ProductCard {...productDetails} />
          </Link>
        );
      })}
    </div>
  );
}
