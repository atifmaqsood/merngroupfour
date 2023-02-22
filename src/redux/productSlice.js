import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

// Add product thunk

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (formData) => {
    console.log("formData:", formData);
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    console.log("loggedUser:", loggedUser);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/addProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${loggedUser.accessToken}`,
          },
        }
      );
      console.log("response is : ", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding product: ", error);
      throw error;
    }
  }
);

  

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
   
  },
});

export default productSlice.reducer;

  
