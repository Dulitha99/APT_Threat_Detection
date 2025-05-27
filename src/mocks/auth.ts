// Mock user data
export const mockUser = {
  id: 'user-123',
  username: 'testuser',
  name: 'Test User',
  email: 'testuser@example.com',
  // Add any other relevant user fields
};

// Mock responses for auth
export const loginSuccessResponse = {
  user: mockUser,
  token: 'fake-jwt-token',
};

export const signupSuccessResponse = {
  user: mockUser,
  message: 'Signup successful. Please login.',
};

export const errorResponse = (message: string, status: number = 400) => ({
  error: {
    status,
    message,
  },
});
