import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PRODUCT_BY_CATEGORY, GET_PRODUCT_LIST, SEARCH_PRODUCT_LIST,GET_PRODUCT } from "../utils/restApiEndPoint";

// Define the initial state
const initialState = {
  productList: [],
  productDetail:null,
  loading: false,
};
export const fetchAllProducts= createAsyncThunk("product/fetchAllProducts", async()=>{
    const res= await fetch(GET_PRODUCT_LIST)
    const products = await res.json();
    return products
})
export const fetchProduct= createAsyncThunk("product/fetchProduct", async(productId)=>{
    const res= await fetch(GET_PRODUCT(productId))
    const product = await res.json();
    return product
})
// Create an async thunk for fetching products by category
export const fetchProductsByCategory = createAsyncThunk("product/fetchProductsByCategory", async (categoryName) => {
  const res = await fetch(GET_PRODUCT_BY_CATEGORY(categoryName));
  const products = await res.json();
  return products;
});

// Create an async thunk for searching products
export const searchProducts = createAsyncThunk("product/searchProducts", async (query) => {
  const url = query ? SEARCH_PRODUCT_LIST(query) : GET_PRODUCT_LIST;
  const res = await fetch(url);
  const products = await res.json();
  return products;
});

// Create a product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.loading = false;
        // console.log(action.payload)
        // console.log("i completed fetching")
      }).addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productDetail = action.payload;
        state.loading = false;
        
        console.log(state.productDetail)
        // console.log(action.payload)
        // console.log("i completed fetching")
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.productList = action.payload;
        // console.log(action.payload)
        state.loading = false;
      })
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.loading = false;
        // console.log(action.payload)
      });
  },
});
// export const { setProductDetail } = productSlice.actions;
export default productSlice.reducer;
