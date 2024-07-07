import axios from 'axios';

const API_URL = 'http://localhost:5001';

export const register = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};
