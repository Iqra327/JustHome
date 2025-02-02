import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProperties } from "../../../api/propertyApi";

export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async(_, {rejectWithValue}) => {
    try {
      const response = await getAllProperties();
      return response.data?.properties;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something Went Wrong!')
    }
  }
)

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    data: [],
    status: 'idle',
    errors: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProperties.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchProperties.fulfilled, (state, action) => {
      state.status = 'succeeded',
      state.data = action.payload
    })
    .addCase(fetchProperties.rejected, (state, action) => {
      state.status = 'failed',
      state.errors = action.payload
    })
  }
})

export default propertiesSlice.reducer;