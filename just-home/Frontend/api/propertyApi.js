import { formData, jsonData } from "./BaseURL";

//create a new property api
export const createProperty = async (data, token) => {
  try {
    const response = await formData.post('/api/v1/createProperty', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response; 
  } catch (error) {
    throw error
  }
}

//get all properties api
export const getAllProperties = async () => {
  try {
    const response = await jsonData.get('/api/v1/allProperties');
    return response;
  } catch (error) {
    throw error
  }
}

//delete property api
export const deleteProperty = async (id) => {
  try {
    const response = await baseURL.delete(`/api/v1/properties/${id}`);
    return response; 
  } catch (error) {
    throw error
  }
}

//get single property api
export const getSingleProperty = async (id) => {
  try {
    const response = await jsonData.get(`/api/v1/singleProperty/${id}`);
    return response;
  } catch (error) {
    throw error
  }
}