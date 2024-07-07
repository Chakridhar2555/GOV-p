import axios from 'axios';

const API_URL = 'http://localhost:5001';

export const fetchReports = async () => {
  const token = localStorage.getItem('token');
  return await axios.get(`${API_URL}/reports`, {
    headers: { Authorization: token },
  });
};
