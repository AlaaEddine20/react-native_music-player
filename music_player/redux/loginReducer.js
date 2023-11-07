import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: null,
  isLoggedIn: null,
  isError: null,
  errorMsg: "",
};

export const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    isLoggingIn: (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    isLoggedIn: (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    onErrorLogin: (state, action) => {
      state.isError = true;
      state.errorMsg = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const { isLoggingIn, login, isLoggedIn, onErrorLogin, logout } =
  userSlice.actions;
export default userSlice.reducer;
