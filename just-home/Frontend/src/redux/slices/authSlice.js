import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  // token: localStorage.getItem('token') || null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('token');
    },
    loginUser: (state, action) => {
      state.user = action.payload;
      // state.token = localStorage.setItem('token', action.payload);
    },
  }
});

export const { logoutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;