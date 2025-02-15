import { baseURL, formData, jsonData } from "./BaseURL";

// for adding property to favorites api
export const addToFavorites = async (propertyId, token) => {
  console.log('api token', token);
  try {
    const response = await baseURL.post(`/api/v1/favorites/${propertyId}`, null,  {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response;
  } catch (error) {
    throw error
  }
}

//for removing property from favorites api
export const removeFromFavorites = async (propertyId, token) => {
  try {
    const response = await baseURL.delete(`/api/v1/favorites/${propertyId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response;
  } catch (error) {
    throw error
  }
}

//for getting all favorite properties api
export const getAllFavorites = async (token) => {
  try {
    const response = await jsonData.get(`/api/v1/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (error) {
    throw error
  }
}