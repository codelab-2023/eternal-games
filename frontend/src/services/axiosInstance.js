import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://api.eternalgames.io",
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
