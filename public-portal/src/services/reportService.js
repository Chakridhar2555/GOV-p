import axios from 'axios';

const API_URL = 'http://localhost:5001';

export const submitReport = async (reportData) => {
  const token = localStorage.getItem('token');
  return await axios.post(`${API_URL}/reports`, reportData, {
    headers: { Authorization: token },
  });
};

export const fetchReports = async () => {
  const token = localStorage.getItem('token');
  return await axios.get(`${API_URL}/reports`, {
    headers: { Authorization: token },
  });

};


