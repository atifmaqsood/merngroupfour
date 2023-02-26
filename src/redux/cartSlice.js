import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: null,
  loading: false,
  error: null,
};

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ productID, quantity }, { getState }) => {
    
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      console.log("loggedUser:", loggedUser);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loggedUser.accessToken}`,
        },
      };
     const pro =  [ {productID, quantity}] 
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/carts",
          { user: loggedUser, products: pro},
       
          config
        );
        console.log("cart data is : ", data)
        return data;
      } catch (error) {
        console.log("Error adding to cart: ", error);
        throw error;
      }
    }
  );

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [addToCart.pending]: (state) => {
      state.loading = true;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
      state.error = null;
    },
    [addToCart.rejected]: (state, action) => {
      state.cart = null;
      state.loading = false;
    //   state.error = action.payload.message || action.payload.msg || action.payload.errors;
    },
  },
});

export default cartSlice.reducer;
