import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllAmenities } from "../../../api/amenityApi";

export const fetchAmenities = createAsyncThunk(
  'amenities/fetchAmenities', 
  async(_, {rejectWithValue}) => {
    try {
      const response = await getAllAmenities();
      return response.data?.amenities
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong!")
    }
  }
);

const amenitiesSlice = createSlice({
  name: 'amenities',
  initialState: {
    data: [],
    status: 'idle',
    errors: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAmenities.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchAmenities.fulfilled, (state, action) => {
      state.status = 'succeeded',
      state.data = action.payload;
    })
    .addCase(fetchAmenities.rejected, (state, action) => {
      state.status = 'failed',
      state.errors = action.payload
    })
  }
})

export default amenitiesSlice.reducer;