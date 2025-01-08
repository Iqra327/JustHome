import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "../../../api/authApi";

export const loginUser = createAsyncThunk('auth/login', async (data, {rejectWithValue}) => {
  try {
    const response = await login(data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})

export const signupUser = createAsyncThunk('auth/signup', async (data, {rejectWithValue}) => {
  try {
    const response = await signup(data);
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})

const initialState = {
  token: null,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer:{
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('user');
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error =  null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      localStorage.setItem('user', JSON.stringify(state.token))
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(signupUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(signupUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.error = null;
    })
    .addCase(signupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;