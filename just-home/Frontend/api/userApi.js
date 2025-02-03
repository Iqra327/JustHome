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
export const removeUserProfile = async (id, token) => {
  try {
    const response = await baseURL.delete(`/api/v1/removeProfile/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    throw error
  }
}

//get all users api
export const getAllUsers = async (token) => {
  try {
    const response = await jsonData.get(`/api/v1/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    throw error
  }
}