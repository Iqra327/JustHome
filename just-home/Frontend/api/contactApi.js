import { baseURL } from "./BaseURL";

export const contact = async (data) => {
  try {
    const response = await baseURL.post('/api/v1/contact', data);
    return response;
  } catch (error) {
    throw error
  }
}