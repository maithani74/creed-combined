import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductDetails } from "../services/product.service";
import ProductsPage from "./ProductsPage.jsx";
import ProductSlider from "./ProductDetails/ProductSlider.jsx";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import PathDisplay from "../components/common/PathDisplay.jsx";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [mainImg, setmainImg] = useState(product?.image);
  const [fade, setfade] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(product?.image);
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const fetchProductDetails = async () => {
    setLoading(true);
    const res = await getProductDetails(id);
    setProduct(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const handleImageClick = (newImg) => {
    setfade(true);
    setTimeout(() => {
      setmainImg(newImg);
      setfade(false);
    }, 400);
  };
  const handleChangePhoto = (index) => {
    handleImageClick(product?.images[index]);
    setSelectedPhoto(product?.images[index]);
  };
  if (loading) {
    return (
      <div className="loader-div">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <section className="">
        <div className="  mx-auto  flex flex-col lg:flex-row">
          <div className="overflow-hidden flex flex-col items-center  lg:w-1/2">
            <div
              className={`relative productImage md:max-w-[500px] flex-col flex items-center justify-center lg:justify-start border-2 border-gray-100 rounded-lg ${
                fade ? "fade-out" : ""
              }`}
            >
              <img
                className={`w-full max-w-full h-auto object-contain rounded-lg ${
                  fade ? "fade-out" : ""
                }`}
                src={selectedPhoto ? selectedPhoto : product?.images[0]}
                alt="Product"
              />
              <div className=" relative  flex gap-3 bottom-4">
                <button
                  className={`${selectedPhoto == product?.images[0] ? "bg-SecondaryColor" : "bg-LightPrimaryColor"} rounded-full self-center w-[10px] h-[10px]  bottom-4`}
                  onClick={() => {
                    handleChangePhoto(0);
                  }}
                ></button>

                <button
                  className={`${selectedPhoto == product?.images[1] ? "bg-SecondaryColor" : "bg-LightPrimaryColor"} rounded-full self-center w-[10px] h-[10px]  bottom-4`}
                  onClick={() => {
                    handleChangePhoto(1);
                  }}
                ></button>

                <button
                  className={`${selectedPhoto == product?.images[2] ? "bg-SecondaryColor" : "bg-LightPrimaryColor"} rounded-full self-center w-[10px] h-[10px]  bottom-4`}
                  onClick={() => {
                    handleChangePhoto(2);
                  }}
                ></button>
              </div>
            </div>
            <div className="sub-images flex flex-wrap mt-4 justify-center">
              <img
                className="w-1/3 h-auto lg:w-auto lg:max-w-[110px] rounded-lg p-1 border-[1px] border-gray-100"
                style={{ cursor: "pointer" }}
                src={product?.images[0]}
                alt="Product"
                onClick={() => {
                  handleChangePhoto(0);
                }}
              />

              <img
                className="w-1/3 lg:w-auto lg:max-w-[110px] rounded-lg p-1 border-[1px] border-gray-100"
                style={{ cursor: "pointer" }}
                src={product?.images[1]}
                alt="Product"
                onClick={() => {
                  handleChangePhoto(1);
                }}
              />

              <img
                className="w-1/3 lg:w-auto lg:max-w-[110px] rounded-lg p-1 border-[1px] border-gray-100"
                style={{ cursor: "pointer" }}
                src={product?.images[2]}
                alt="Product"
                onClick={() => {
                  handleChangePhoto(2);
                }}
              />
            </div>
          </div>

          <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-6">
            <div
              className="productName mb-2 font-bold text-[40px] mb-2 max-w-[400px] lg:mx-0 lg:my-0"
              style={{ color: "#002D46" }}
            >
              {product?.name}
            </div>

            <div
              className="description mt-2 mb-4 text-[18px]"
              style={{ color: "#919291" }}
            >
              {product?.description}
            </div>

            <div className="price flex">
              <div
                className="present-cost mr-2 font-bold"
                style={{ fontSize: "28px", color: "#002D46" }}
              >
                &#8377;
                {product?.price - product?.price * (product?.discount / 100)}
              </div>

              <div
                className="oldPrice mr-2 my-auto flex"
                style={{ color: "#919291" }}
              >
                <div className="mrp my-auto">M.R.P: </div>
                <div
                  className="old my-auto"
                  style={{ textDecoration: "line-through" }}
                >
                  &#8377;{product?.price}
                </div>
              </div>

              <div
                className="discount mr-2 my-auto font-bold"
                style={{ color: "#FF6D5C" }}
              >
                {"("}
                {product?.discount}
                {")"} %
              </div>
            </div>

            <div
              className="alltax text-sm mb-2"
              style={{ marginTop: "-0.5rem", color: "#002D46" }}
            >
              Inclusive of all taxes
            </div>
            {product?.color && (
              <div className="colour-detail flex text-[22px] mb-6">
                <div className="colour-type" style={{ color: "#919291" }}>
                  Colour -{" "}
                </div>
                <div className="colour ml-2" style={{ color: "#FF6D5C" }}>
                  {product?.color}
                </div>
              </div>
            )}
            <div className="facilities flex justify-center items-center justify-between pl-8 pr-8 mb-1">
              <div className="tag1 justify-center items-center">
                <img
                  className="flex justify-center items-center"
                  src="https://www.pebblecart.com/cdn/shop/files/Free_shipping.gif?v=1668739055&width=80"
                  alt=""
                />
                <span
                  className="flex justify-center items-center"
                  style={{ textAlign: "center" }}
                >
                  Free Shipping
                </span>
              </div>

              <div className="tag1 justify-center items-center">
                <img
                  className="flex justify-center items-center"
                  src="https://www.pebblecart.com/cdn/shop/files/Warranty.gif?v=1668739055&width=80"
                  alt=""
                />
                <span
                  className="flex justify-center items-center"
                  style={{ textAlign: "center" }}
                >
                  1 Year Warranty
                </span>
              </div>

              <div className="tag1 justify-center items-center">
                <img
                  className="flex justify-center items-center"
                  src="https://www.pebblecart.com/cdn/shop/files/Secure_Checkout.gif?v=1670310938&width=80"
                  alt=""
                />
                <span
                  className="flex justify-center items-center"
                  style={{ textAlign: "center" }}
                >
                  Secure CheckOut
                </span>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "row", gap: "16px" }}
              className="cartAndBuy flex flex-col lg:flex-row mb-3"
            >
              {/* <Link to={"/bulk-orders"} ></Link> */}
              <button
                type="button"
                //onClick={handleAddToCart}
                className='button_cart1
                relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
                px-3 py-2 font-semibold 
                uppercase transition-all duration-500
                before:absolute before:inset-0
                before:-z-10 before:translate-x-[150%]
                before:translate-y-[150%] before:scale-[2.5]
                before:rounded-[100%] before:bg-[#40bfff]
                before:transition-transform before:duration-1000
                before:content-[""]
                hover:scale-105 hover:text-[#002d46]
                hover:before:translate-x-[0%]
                hover:before:translate-y-[0%]
                active:scale-95'
              >
                <Link to={"/bulk-orders"} ><span>Add To Cart</span></Link>
              </button>
              <Link
                to="/bulk-orders"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                <button
                  className="button_cart1 buyNow shining-btn flex-grow text-[#002d46]! font-bold py-3 px-3 rounded-lg "
                  style={{ backgroundColor: "#40BFFF", color:"#002d46", fontWeight:"bold" }}
                >
                  Buy Now
                </button>
              </Link>
            </div>

            <button
              className="w-full py-3 rounded-3xl text-white font-semibold mb-2 mt-2 shining-btn border-[15xl] mt-4"
              style={{
                background:
                  "conic-gradient(from -24deg at 98.3% 0%, #40BFFF 82.800002deg, #40BFFF 133.89502deg, #fff 359.9063801765442deg)",
              }}
            >
              <p className="bulk text-[28px] text-black">Bulk Order Query</p>
              <p className="corporate text-[14px] text-black">
                Corporate Orders
              </p>
            </button>
          </div>
        </div>

        {/*  Product Specifications */}
        <div className="specifications  pt-6 lg:pt-12 ">
          <div className="sub-heading text-[#40BFFF] text-lg font-bold mb-4">
            SPECIFICATIONS
          </div>

          <div className="detail mt-4 pd-[16px] text-gray-500">
            <div className="main-box w-full bg-[#F0F3F4] p-[12px] rounded-[12px]">
              <ul>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">
                    Product Name:
                  </strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.name}</span>
                </li>
                {product?.category?.name && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Generic Product Name :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.category?.name}
                    </span>
                  </li>
                )}
                {product?.description && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Product Description :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.description}
                    </span>
                  </li>
                )}

                {product?.stock && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Product Stock :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">{product?.stock}</span>
                  </li>
                )}

                {product?.screenSize && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Screen Size :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.screenSize}
                    </span>
                  </li>
                )}
                {product?.type && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Type :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">{product?.type}</span>
                  </li>
                )}

                {product?.displayType && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Display Type :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.displayType}
                    </span>
                  </li>
                )}
                {product?.charging && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Charging :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.charging}
                    </span>
                  </li>
                )}
                {product?.battery && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Battery Capacity :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.battery}
                    </span>
                  </li>
                )}
                {product?.bluetoothVersion && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Bluetooth Version :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.bluetoothVersion}
                    </span>
                  </li>
                )}

                {product?.notification && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Notification :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.notification}
                    </span>
                  </li>
                )}
                {product?.voiceAssistance && (
                  <li className="flex justify-between mb-2">
                    <strong className="w-[35%] lg:w-[20%] text-gray-500">
                      Voice Assistance :
                    </strong>
                    <span className="w-[65%] lg:w-[80%]">
                      {product?.voiceAssistance}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="mt-10 mb-2 text-2xl md:text-3xl font-bold">
          Recommended Products
        </div>
        {/*TODO: after adding too many products uncomment this line */}
        {/*
            <ProductSlider currentProdId={product?._id} />
        */}
        {/*TODO: after adding too many products comment this line */}
        <ProductSlider />
      </div>
    </>
  );
};

export default ProductDetail;
