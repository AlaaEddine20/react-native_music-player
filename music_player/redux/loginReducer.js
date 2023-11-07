import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   isLoading: undefined,
//   isLoggedIn: undefined,
//   isError: undefined,
//   errorMsg: "",
// };

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    isError: false,
    errorMsg: "",
  },
  reducers: {
    setError: (state, action) => {
      state.isError = true;
      state.errorMsg = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const { setLoading } = loadingSlice.actions;
export const { setError } = errorSlice.actions;
export const authReducer = authSlice.reducer;
export const loadingReducer = loadingSlice.reducer;
export const errorReducer = errorSlice.reducer;

// export const userSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {
//     isLoggingIn: (state) => {
//       state.isLoading = true;
//       state.isLoggedIn = false;
//     },
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     isLoggedIn: (state) => {
//       state.isLoading = false;
//       state.isLoggedIn = true;
//     },
//     onErrorLogin: (state, action) => {
//       state.isError = true;
//       state.errorMsg = action.payload;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//     },
//   },
// });

// export const { isLoggingIn, login, isLoggedIn, onErrorLogin, logout } =
//   userSlice.actions;
// export default userSlice.reducer;
