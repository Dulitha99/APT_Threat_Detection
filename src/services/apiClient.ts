import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Mock API base URL
  timeout: 5000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors here if needed later (e.g., for auth tokens)
// apiClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default apiClient;
