import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  status: "idle",
  error: null,
  isLoggedin:
    Boolean(localStorage.getItem("isAuth")) &&
    localStorage.getItem("isAuth") === "true",
  loggedInUser: localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser"))
    : [],
  loading: false,
};



// Login thunk

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }) => {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      username,
      password,
    });
    return response.data;
  }
);

// Register thunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(response.data.message);
    console.log(response.data);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, action) => {
      state.user = null;
      state.status = "idle";
      state.isLoggedin = false;
      state.loggedInUser = [];
      localStorage.setItem("isAuth", new Boolean(false));
      localStorage.setItem("loggedUser", []);
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload;
        console.log(state.user);
        state.isLoggedin = true;
        state.loggedInUser = action.payload;
        localStorage.setItem("isAuth", true);
        localStorage.setItem("loggedUser", JSON.stringify(state.loggedInUser));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = true;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export const getLoggedInUser = (state) => state.user.loggedInUser;
export const isAuthenticate = (state) => state.user.isLoggedin;
export default authSlice.reducer;
