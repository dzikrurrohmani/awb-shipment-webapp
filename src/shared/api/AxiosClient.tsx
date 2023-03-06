import axios from 'axios';

console.log(import.meta.env.VITE_REACT_BASE_URL);
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_BASE_URL,
});

export default axiosClient;
