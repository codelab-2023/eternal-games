import axios from 'axios';
import encryptStorage from './storage';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use((config) => {
  const decryptedString = encryptStorage.getItem('token');
  config.headers.Authorization = decryptedString;

  return config;
});

axiosInstance.interceptors.response.use((response) => response, (error) => {
  if ([ 'Token has expired', 'No token found' ].includes(error?.response?.data?.error)) {
    encryptStorage.removeItem('token')
  }

  return error
});

export default axiosInstance;
