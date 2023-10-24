import {configureStore} from "@reduxjs/toolkit"
import { cartReducer } from "./reducer";
import categoryReducer from "../redux/categorySlice";
import productReducer from "../redux/productSlice";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        category: categoryReducer,
    product: productReducer,
    },
})
export default store;