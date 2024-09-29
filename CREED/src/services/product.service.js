import toast from "react-hot-toast";
import { setLoading } from "../slices/productSlice.js";
import { apiConnector } from "./apiconnector";
import { productEndpoints, cateogryEndpoints } from "./apiEndpoints";
const { GET_PRODUCTS, GET_PRODUCT, FILTER_BY_CATEGORY, GET_LATEST } =
  productEndpoints;

export async function fetchProducts() {
  let toastId;
  let result = [];
  try {
    const response = await apiConnector(GET_PRODUCTS.req, GET_PRODUCTS.url);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.products;
  } catch (error) {
    toastId = toast.error("Could Not Load Products");
  }
  toast.dismiss();
  return result;
}

export async function getProductDetails(id) {
  let toastId;
  let result = null;
  try {
    const response = await apiConnector(
      GET_PRODUCT.req,
      GET_PRODUCT.url + "/" + id,
    );
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.product;
  } catch (error) {
    toast.error("Could Not Load Product Details ");
  }
  toast.dismiss(toastId);
  return result;
}

export async function getProductsByCategory(slug) {
  let toastId;
  let result = null;
  try {
    const response = await apiConnector(
      FILTER_BY_CATEGORY.req,
      FILTER_BY_CATEGORY.url,
      {
        slug,
      },
    );
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.products;
  } catch (error) {
    toast.error("Error Occured Fetching Category Products");
  }
  toast.dismiss(toastId);
  return result;
}
export async function fetchLatestProducts() {
  let toastId;
  let result = [];
  try {
    const response = await apiConnector(GET_LATEST.req, GET_LATEST.url);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.products;
  } catch (error) {
    toastId = toast.error("Could Not Load Latest Products");
  }
  toast.dismiss();
  return result;
}
