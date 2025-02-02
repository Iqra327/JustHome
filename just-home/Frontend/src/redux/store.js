import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import amenitiesReducer from './slices/amenitiesSlice';
import propertiesReducer from './slices/propertiesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    amenities: amenitiesReducer,
    properties: propertiesReducer
  }
})

export default store;