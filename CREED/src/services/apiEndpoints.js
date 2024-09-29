const BASE_URL = "https://creed-backend-vxes.onrender.com";
const VERSION = BASE_URL + "/api/v1";

const req = {
  post: "POST",
  get: "GET",
  put: "PUT",
  delete: "DELETE",
};

export const endpoints = {
  SENDOTP_API: VERSION + "/otp/sendOtp",
  SIGNUP_API: VERSION + "/user/register",
  LOGIN_API: VERSION + "/user/login",
  RESET_PASSWORD_TOKEN_LINK: VERSION + "/reset-password-token",
  RESET_PASSWORD: VERSION + "/reset-password",
};

export const productEndpoints = {
  FILTER_PRODUCTS_BY_CATEGORY: {
    req: req.post,
    url: VERSION + "/product/filterByCategory",
  },
  GET_PRODUCTS: {
    req: req.get,
    url: VERSION + "/product/getProducts",
  },
  CREATE_PRODUCT: {
    req: req.post,
    url: VERSION + "/product/create",
  },
  UPDATE_PRODUCT: {
    req: req.put,
    url: VERSION + "/product/update",
  },
  GET_PRODUCT: {
    req: req.get,
    url: VERSION + "/product/getProduct",
  },
  DELETE_PRODUCT: {
    req: req.delete,
    url: VERSION + "/product/update",
  },
  FILTER_BY_CATEGORY: {
    req: req.post,
    url: VERSION + "/product/filterByCategory",
  },
  PRICED_PRODUCTS: {
    req: req.post,
    url: VERSION + "/product/pricedProducts",
  },
  GET_LATEST: {
    req: req.get,
    url: VERSION + "/product/getLatest",
  },
  GET_PRODUCT_COUNT: {
    req: req.get,
    url: VERSION + "/product/product-count",
  },
  GET_PRODUCT_LIST: {
    req: req.get,
    url: VERSION + "/product/productList",
  },
};

export const orderEndpoints = {
  CREATE_ORDER: {
    req: req.post,
    url: VERSION + "/order/createOrder",
  },
  GET_ORDER: {
    req: req.get,
    url: VERSION + "/order/getOrder",
  },
  DELETE_ORDER: {
    req: req.delete,
    url: VERSION + "/order/deleteOrder",
  },
  GET_PAYMENT: {
    req: req.get,
    url: VERSION + "/order/getPayment",
  },
  GET_ALL_ORDERS: {
    req: req.get,
    url: VERSION + "/order/getAllOrders",
  },
  UPDATE_ORDER: {
    req: req.put,
    url: VERSION + "/order/updateOrder",
  },
};

export const cateogryEndpoints = {
  CREATE_CATEGORY: {
    req: req.post,
    url: VERSION + "/category/create-category",
  },
  UPDATE_CATEGORY: {
    req: req.put,
    url: VERSION + "/category/update-category",
  },
  GET_CATEGORIES: {
    req: req.get,
    url: VERSION + "/category/get-categories",
  },
  GET_CATEGORY: {
    req: req.get,
    url: VERSION + "/category/get-category",
  },
  DELETE_CATEGORY: {
    req: req.delete,
    url: VERSION + "/category/delete-category",
  },
};
