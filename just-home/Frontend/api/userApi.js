import { formData } from "./BaseURL";

export const updateUserProfile = async (id, data, token) => {
  try {
    const response = await formData.patch(`api/v1/updateUser/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    throw error
  }
}