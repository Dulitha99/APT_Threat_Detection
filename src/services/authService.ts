// src/services/authService.ts
// Remove direct apiClient import if all auth is mocked and doesn't hit /api
// import apiClient from './apiClient'; 

import {
  simulateLogin,
  simulateSignup,
  LoginSuccessResponse,
  LoginErrorResponse,
  SignupSuccessResponse,
  SignupErrorResponse,
  MockUser, // For getCurrentUser return type
  AuthUserResponse // For storing in localStorage
} from '../mocks/auth'; 

// Define types for credentials and user data used by the service
interface LoginCredentials {
  username: string;
  password?: string; // Password can be optional if, for example, using OAuth in a real app
}

interface SignupData {
  username: string;
  email: string;
  password?: string; // Password might be handled differently depending on auth strategy
  // Add other fields as necessary, e.g., name
}

export const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginSuccessResponse | LoginErrorResponse> => {
  // In a real app, this would be:
  // const response = await apiClient.post('/auth/login', credentials);
  // For mock:
  const response = await simulateLogin(credentials.username, credentials.password);

  if (response.success) {
    localStorage.setItem('authToken', response.token);
    localStorage.setItem('authUser', JSON.stringify(response.user));
  }
  return response;
};

export const signupUser = async (
  userData: SignupData
): Promise<SignupSuccessResponse | SignupErrorResponse> => {
  // In a real app:
  // const response = await apiClient.post('/auth/signup', userData);
  // For mock:
  // Ensure password is provided for signup simulation
  if (!userData.password) {
    return Promise.resolve({ success: false, message: 'Password is required for signup.' });
  }
  const response = await simulateSignup({
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });

  if (response.success) {
    // Optionally, you might want to log the user in directly or require them to log in after signup.
    // The current mock simulateSignup provides a token, so we can store it.
    localStorage.setItem('authToken', response.token);
    localStorage.setItem('authUser', JSON.stringify(response.user));
  }
  return response;
};

export const logoutUser = async (): Promise<void> => {
  // In a real app, you might also call an API endpoint:
  // await apiClient.post('/auth/logout');
  localStorage.removeItem('authToken');
  localStorage.removeItem('authUser');
  // No need to simulate delay here as it's a local operation primarily
  return Promise.resolve();
};

export const getCurrentUser = (): AuthUserResponse | null => {
  const userStr = localStorage.getItem('authUser');
  if (userStr) {
    try {
      return JSON.parse(userStr) as AuthUserResponse;
    } catch (error) {
      console.error("Error parsing authUser from localStorage:", error);
      return null;
    }
  }
  return null;
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('authToken');
  return !!token; // Returns true if token exists and is not an empty string, false otherwise
};

// Example of how a service might fetch full user details if needed (not part of current task but for context)
// import { getMockUserById } from '../mocks/auth';
// export const fetchUserProfile = async (): Promise<MockUser | null> => {
//   const currentUser = getCurrentUser();
//   if (currentUser && currentUser.id) {
//     const userProfile = await getMockUserById(currentUser.id);
//     return userProfile || null;
//   }
//   return null;
// };
