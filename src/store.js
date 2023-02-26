import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import productSlice from "./redux/productSlice";
import cartSlice from "./redux/cartSlice";

const store = configureStore({

    reducer:{
        user : authSlice,
        product : productSlice,
        cart : cartSlice,
    }

})

export default store;