import { baseURL } from "./BaseURL";

//signup
export const signup = async (data) => {
  try {
    const response = await baseURL.post('/api/v1/signup', data)
    return response
  } catch (error) {
    throw error
  }
}

//login
export const login = async (data) => {
  try {
    const response = await baseURL.post('/api/v1/login', data)
    return response
  } catch (error) {
    throw error
  }
}