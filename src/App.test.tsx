import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { AuthContext, AuthContextType } from './context/AuthContext'; // Import AuthContext and its type

// Mocks
jest.mock('./components/Header/Header', () => (props: any) => (
  <header data-testid="header-mock">
    <div>Header Mock</div>
    <div>Page Type: {props.pageType}</div>
    {props.onToggleMobileSidebar && <button data-testid="sidebar-toggle-mock" onClick={props.onToggleMobileSidebar}>Toggle Sidebar</button>}
  </header>
));

jest.mock('./components/Sidebar/Sidebar', () => (props: {isMobileSidebarOpen?: boolean}) => (
    <aside data-testid="sidebar-mock">
        <div>Sidebar Mock</div>
        {props.isMobileSidebarOpen && <span>Mobile Sidebar Open</span>}
    </aside>
));

jest.mock('./components/Landing/Landing', () => () => <div data-testid="landing-page-mock">Landing Page Content</div>);
jest.mock('./components/Dashboard/ThreatIntelligence', () => () => <div data-testid="threat-intelligence-page-mock">Threat Intelligence Page</div>);
jest.mock('./components/Auth/Login', () => () => <div data-testid="login-page-mock">Login Page</div>);

// Mock useScrollAnimation as it's used in Landing page components
jest.mock('./hooks/useScrollAnimation', () => () => ({ current: null }));


describe('App Routing and Layouts', () => {
  const renderWithRouterAndAuth = (
    initialEntries: string[],
    authContextValue: AuthContextType
  ) => {
    return render(
      <AuthContext.Provider value={authContextValue}>
        <MemoryRouter initialEntries={initialEntries}>
          <App />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  };

  describe('LandingLayout', () => {
    test('renders Header with pageType="landing" and Landing page content for "/" route', () => {
      const authValue: AuthContextType = { isAuthenticated: false, login: jest.fn(), logout: jest.fn() };
      renderWithRouterAndAuth(['/'], authValue);

      expect(screen.getByTestId('header-mock')).toBeInTheDocument();
      expect(screen.getByText('Page Type: landing')).toBeInTheDocument();
      expect(screen.getByTestId('landing-page-mock')).toBeInTheDocument();
      expect(screen.queryByTestId('sidebar-mock')).not.toBeInTheDocument();
    });
  });

  describe('DashboardLayout', () => {
    test('renders Header, Sidebar, and page content for dashboard route when authenticated', () => {
      const authValue: AuthContextType = { isAuthenticated: true, login: jest.fn(), logout: jest.fn() };
      renderWithRouterAndAuth(['/threat-intelligence'], authValue);

      expect(screen.getByTestId('header-mock')).toBeInTheDocument();
      expect(screen.getByText('Page Type: dashboard')).toBeInTheDocument();
      expect(screen.getByTestId('sidebar-mock')).toBeInTheDocument();
      expect(screen.getByTestId('threat-intelligence-page-mock')).toBeInTheDocument();
    });

    test('redirects to /login for dashboard route when not authenticated', () => {
      const authValue: AuthContextType = { isAuthenticated: false, login: jest.fn(), logout: jest.fn() };
      renderWithRouterAndAuth(['/threat-intelligence'], authValue);
      
      expect(screen.getByTestId('login-page-mock')).toBeInTheDocument();
      expect(screen.queryByTestId('header-mock')).not.toBeInTheDocument(); // Header is part of layouts for protected/landing
      expect(screen.queryByTestId('sidebar-mock')).not.toBeInTheDocument();
      expect(screen.queryByTestId('threat-intelligence-page-mock')).not.toBeInTheDocument();
    });

    test('sidebar toggle button in Header functions correctly', () => {
      const authValue: AuthContextType = { isAuthenticated: true, login: jest.fn(), logout: jest.fn() };
      renderWithRouterAndAuth(['/threat-intelligence'], authValue);

      const sidebarToggle = screen.getByTestId('sidebar-toggle-mock');
      expect(sidebarToggle).toBeInTheDocument();

      // Check initial state (sidebar not explicitly open via toggle)
      expect(screen.queryByText('Mobile Sidebar Open')).not.toBeInTheDocument();

      // Simulate click
      // Need to wrap state update in act if it causes re-renders
      act(() => {
        fireEvent.click(sidebarToggle);
      });
      
      // After click, DashboardLayout's state should change, and Sidebar should receive isMobileSidebarOpen={true}
      // The mock for Sidebar checks for this prop.
      expect(screen.getByText('Mobile Sidebar Open')).toBeInTheDocument();
      
      act(() => {
        fireEvent.click(sidebarToggle);
      });
      expect(screen.queryByText('Mobile Sidebar Open')).not.toBeInTheDocument();
    });
  });
});
