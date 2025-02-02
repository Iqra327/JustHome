import { baseURL, formData, jsonData } from "./BaseURL"

//create new amenity api
export const createAmenity = async (data, token) => {
  try {
    const response= await formData.post('/api/v1/createAmenity', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    throw error
  }
}

//get all amenities api
export const getAllAmenities = async () => {
  try {
    const response = await jsonData.get('/api/v1/allAmenities');
    return response;
  } catch (error) {
    throw error
  }
}

//delete single amenity api
export const deleteAmenity = async (id, data) => {
  try {
    const response = await baseURL.delete(`/api/v1/amenities/${id}`, {data});
    return response; 
  } catch (error) {
    throw error
  }
}