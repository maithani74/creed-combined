import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalStorage } from "../utils/localStorage";
const initialState = {
  loading: false,
  categories: getItemFromLocalStorage("categories") || [],
};
const categorySlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories, setLoading } = categorySlice.actions;
export default categorySlice.reducer;
