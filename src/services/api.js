import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Thay bằng URL API thật của bạn sau này
  timeout: 5000,
});

export const getResidents = () => api.get('/residents');
export const getAssets = () => api.get('/assets');

export default api;