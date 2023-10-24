

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CATEGORY_LIST } from "../utils/restApiEndPoint";

// Define the initial state
const initialState = {
  categories: [],
  selectedCategory: "",
};

// Create an async thunk for fetching categories
export const fetchCategories = createAsyncThunk("category/fetchCategories", async () => {
  const res = await fetch(GET_CATEGORY_LIST);
  const categoryList = await res.json();
  return categoryList;
});

// Create a category slice
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        // console.log(action,state.categories)
        state.categories = action.payload.map((category) => ({ categoryName: category }));
        // console.log(state.categories)
      });
  },
});

export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
