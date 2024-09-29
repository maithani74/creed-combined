import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import productReducer from "../slices/productSlice.js";
import categoryReducer from "../slices/categorySlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  product: productReducer,
  category: categoryReducer,
});
export default rootReducer;
