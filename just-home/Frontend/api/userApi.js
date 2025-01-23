import { baseURL, formData, jsonData } from "./BaseURL";

//update password api
export const updateUserPassword = async (id, data, token) => {
  try {
    const response = await baseURL.patch(`api/v1/updatePassword/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    throw error
  }
}

//update profile picture api
export const updateUserProfile = async (id, data, token) => {
  try {
    const response = await formData.patch(`api/v1/updateProfile/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    throw error
  }
}

//remove profile api
export const removeUserProfile = async (id, data, token) => {
  try {
    const response = await jsonData.delete(`api/v1/removeProfile/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    throw error
  }
}