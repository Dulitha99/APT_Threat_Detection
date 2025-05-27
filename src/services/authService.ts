import apiClient from './apiClient';
import { loginSuccessResponse, signupSuccessResponse, errorResponse, mockUser } from '../mocks/auth';

// Simulate a delay for API calls
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const login = async (credentials: any) => {
  await simulateDelay(1000); // Simulate network delay
  if (credentials.username === 'testuser' && credentials.password === 'password') {
    // In a real app, you'd get this from apiClient.post('/login', credentials)
    // For mock, we directly return success
    localStorage.setItem('authToken', loginSuccessResponse.token);
    localStorage.setItem('user', JSON.stringify(mockUser)); // Store mock user
    return { data: loginSuccessResponse };
  } else {
    // Simulate API error
    // In a real app: throw error.response from axios
    return Promise.reject({ response: { data: errorResponse('Invalid credentials', 401), status: 401 } });
  }
};

export const signup = async (userInfo: any) => {
  await simulateDelay(1500);
  // Simulate successful signup
  // In a real app: apiClient.post('/signup', userInfo)
  if (userInfo.username && userInfo.email && userInfo.password) {
    return { data: signupSuccessResponse };
  } else {
    return Promise.reject({ response: { data: errorResponse('Missing required fields'), status: 400 } });
  }
};

export const logout = async () => {
  await simulateDelay(500);
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  // In a real app, you might also call an API endpoint: apiClient.post('/logout')
  return { data: { message: 'Logout successful' } };
};

// Function to get current user (e.g., for AuthContext)
export const getCurrentUser = async () => {
  await simulateDelay(300);
  const token = localStorage.getItem('authToken');
  const userStr = localStorage.getItem('user');
  if (token && userStr) {
    return { data: JSON.parse(userStr) };
  }
  return Promise.reject('No active session');
};
