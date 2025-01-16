import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    loginUser: (state, action) => {
      const {user, token} = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem('token', token);
    },
  }
});

export const { logoutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;