import { configureStore, } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice"
import sidebarReducer from "../features/sidebar/sidebarSlice"
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
    reducer:{
        product:productReducer,
        sidebar:sidebarReducer,
        cart:cartReducer
    },
    
    
});