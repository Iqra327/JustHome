import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "../../../api/userApi";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async(_, {rejectWithValue}) => {
    try {
      const response = await getAllUsers();
      console.log(response);
      return response.data?.users;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
)

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: sessionStorage.getItem('token') || null,
  status: 'idle',
  errors: null,
  data: []
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      sessionStorage.removeItem('token');
    },
    loginUser: (state, action) => {
      const {user, token} = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', token);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.status = 'failed';
      state.errors = action.payload
    })
  }
});

export const { logoutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;