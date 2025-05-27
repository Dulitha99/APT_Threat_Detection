// src/mocks/auth.ts

export interface MockUser {
  id: string;
  username: string;
  email: string;
  password?: string; // Added password for testing
  name?: string;
  role: 'admin' | 'user' | 'editor';
  avatarUrl?: string; 
  lastLogin?: string; 
}

export const mockUsersData: MockUser[] = [
  {
    id: 'user-001',
    username: 'adminuser',
    email: 'admin@securexdr.com',
    password: 'password123',
    name: 'Admin User',
    role: 'admin',
    avatarUrl: '/images/dulitha.JPG',
    lastLogin: '2023-10-26T10:00:00Z',
  },
  {
    id: 'user-002',
    username: 'analyst1',
    email: 'analyst1@securexdr.com',
    password: 'password123',
    name: 'Security Analyst One',
    role: 'user',
    avatarUrl: '/images/nilushi.jpg',
    lastLogin: '2023-10-25T14:30:00Z',
  },
  {
    id: 'user-003',
    username: 'editorperson',
    email: 'editor@securexdr.com',
    password: 'password123',
    name: 'Content Editor',
    role: 'editor',
    lastLogin: '2023-10-24T08:15:00Z',
  },
];

// Response Type Interfaces
export interface AuthUserResponse { // For user data included in responses
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user' | 'editor';
}

export interface LoginSuccessResponse {
  success: true;
  token: string;
  user: AuthUserResponse;
}

export interface LoginErrorResponse {
  success: false;
  message: string;
}

export interface SignupSuccessResponse {
  success: true;
  token: string;
  user: AuthUserResponse;
}

export interface SignupErrorResponse {
  success: false;
  message: string;
}

// Simulation Functions
export const simulateLogin = (
  username?: string, 
  password?: string
): Promise<LoginSuccessResponse | LoginErrorResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!username || !password) {
        resolve({ success: false, message: 'Username and password are required.' });
        return;
      }
      const user = mockUsersData.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        resolve({
          success: true,
          token: `mockAuthToken_${user.id}_${Date.now()}`,
          user: { id: user.id, username: user.username, email: user.email, role: user.role },
        });
      } else {
        resolve({ success: false, message: 'Invalid credentials' });
      }
    }, 500);
  });
};

export const simulateSignup = (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<SignupSuccessResponse | SignupErrorResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const existingUser = mockUsersData.find(
        (u) => u.username === userData.username || u.email === userData.email
      );
      if (existingUser) {
        resolve({ success: false, message: 'User already exists with this username or email' });
      } else {
        const newUser: MockUser = {
          id: `usr${Date.now()}`,
          username: userData.username,
          email: userData.email,
          password: userData.password, // Store password for login simulation
          role: 'user', // Default role for new signups
          lastLogin: new Date().toISOString(),
        };
        // Conceptually add to mockUsersData for the duration of this session/test
        // In a real backend, this would be a database insert.
        // For mock purposes, we might push to the array if we want subsequent calls in the same "session" to see it.
        // mockUsersData.push(newUser); // Uncomment if persistence within the mock session is desired
        
        resolve({
          success: true,
          token: `mockAuthToken_${newUser.id}_${Date.now()}`,
          user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role },
        });
      }
    }, 500);
  });
};


// --- Existing exports (can be reviewed/removed if simulateLogin/Signup cover all needs) ---
export const mockUser = mockUsersData[0]; 

export const loginSuccessResponse = { // This specific object might be less useful now
  user: { id: mockUser.id, username: mockUser.username, email: mockUser.email, role: mockUser.role },
  token: 'fake-jwt-token-for-' + mockUser.id,
};

export const signupSuccessResponse = (newUser: AuthUserResponse) => ({ // This specific object might be less useful
  user: newUser,
  message: 'Signup successful. Please login.',
});

export const errorResponse = (message: string, status: number = 400) => ({
  error: { // This structure is different from Login/SignupErrorResponse, consider standardizing if used
    status,
    message,
  },
});

export const getMockUsers = (): Promise<MockUser[]> => 
  new Promise(resolve => setTimeout(() => resolve(mockUsersData), 300));

export const getMockUserById = (id: string): Promise<MockUser | undefined> =>
  new Promise(resolve => setTimeout(() => resolve(mockUsersData.find(user => user.id === id)), 300));
