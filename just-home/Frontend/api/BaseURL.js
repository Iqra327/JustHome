import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'http://localhost:5000/'
})

export const formData = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})