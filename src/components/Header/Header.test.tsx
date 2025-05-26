import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Header, { NavLink } from './Header'; // Assuming NavLink is exported

// Mock ThemeToggle
jest.mock('../Common/ThemeToggle', () => () => <div data-testid="theme-toggle-mock">ThemeToggle</div>);

// Mock useLocation from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and retain default behavior
  useLocation: jest.fn(), // Default mock for useLocation
}));

const mockUseLocation = useLocation as jest.Mock;

const mockScrollToSection = jest.fn();
const landingNavLinks: NavLink[] = [
  { id: 'home', text: 'Home' },
  { id: 'features', text: 'Features' },
  { id: 'solutions', text: 'Solutions' },
];

describe('Header Component', () => {
  beforeEach(() => {
    // Reset mock for useLocation before each test to ensure clean state
    mockUseLocation.mockReturnValue({ pathname: '/', search: '', hash: '', state: null });
  });

  test('renders logo', () => {
    render(
      <MemoryRouter>
        <Header pageType="landing" />
      </MemoryRouter>
    );
    expect(screen.getByText('SecureXDR')).toBeInTheDocument();
  });

  test('renders ThemeToggle', () => {
    render(
      <MemoryRouter>
        <Header pageType="landing" />
      </MemoryRouter>
    );
    expect(screen.getByTestId('theme-toggle-mock')).toBeInTheDocument();
  });

  // Landing Page Specific Tests
  describe('Landing Page Header', () => {
    test('renders navigation links when pageType="landing"', () => {
      render(
        <MemoryRouter>
          <Header
            pageType="landing"
            navLinks={landingNavLinks}
            scrollToSection={mockScrollToSection}
          />
        </MemoryRouter>
      );
      landingNavLinks.forEach(link => {
        expect(screen.getByText(link.text)).toBeInTheDocument();
      });
    });

    test('renders login/signup buttons when pageType="landing"', () => {
      render(
        <MemoryRouter>
          <Header pageType="landing" />
        </MemoryRouter>
      );
      expect(screen.getByText('Login')).toBeInTheDocument();
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
    });

    test('shows hamburger icon for landing nav on small screens and toggles mobile menu', () => {
      // Mock matchMedia for mobile view
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: query === '(max-width: 768px)', // Simulate mobile screen
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
      
      render(
        <MemoryRouter>
          <Header
            pageType="landing"
            navLinks={landingNavLinks}
            scrollToSection={mockScrollToSection}
          />
        </MemoryRouter>
      );

      const hamburgerButton = screen.getByRole('button', { name: /toggle navigation/i });
      expect(hamburgerButton).toBeInTheDocument();
      // expect(hamburgerButton).toBeVisible(); // This might fail due to JSDOM not supporting layout/visibility fully

      // Check mobile nav is initially closed (links not visible in mobile specific container)
      // This requires .mobileNav to be distinct and links to be identifiable within it.
      // For simplicity, we'll check if clicking changes the button's aria-expanded or icon
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
      expect(hamburgerButton).toHaveTextContent('☰');


      fireEvent.click(hamburgerButton);
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true');
      expect(hamburgerButton).toHaveTextContent('✕');
      
      // Verify mobile navigation links are now "visible" (rendered)
      // This depends on how mobileNav is structured. Assuming links are still findable by text.
      landingNavLinks.forEach(link => {
        expect(screen.getByText(link.text)).toBeInTheDocument(); 
      });

      fireEvent.click(hamburgerButton);
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
      expect(hamburgerButton).toHaveTextContent('☰');
    });
  });

  // Dashboard Specific Tests
  describe('Dashboard Header', () => {
    test('renders search bar when pageType="dashboard"', () => {
      render(
        <MemoryRouter>
          <Header pageType="dashboard" />
        </MemoryRouter>
      );
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    test('renders user info when pageType="dashboard" and isAuthenticated', () => {
      render(
        <MemoryRouter>
          <Header pageType="dashboard" isAuthenticated={true} />
        </MemoryRouter>
      );
      expect(screen.getByText('John Doe')).toBeInTheDocument(); // Placeholder name
      expect(screen.getByRole('img', { name: /user/i })).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument(); // Badge for notifications
    });
    
    test('shows sidebar toggle icon on small screens for dashboard view and calls onToggleMobileSidebar', () => {
       Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: query === '(max-width: 768px)', // Simulate mobile screen
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
      const mockToggleMobileSidebar = jest.fn();
      render(
        <MemoryRouter>
          <Header pageType="dashboard" onToggleMobileSidebar={mockToggleMobileSidebar} isMobileSidebarOpen={false} />
        </MemoryRouter>
      );

      const sidebarToggleButton = screen.getByRole('button', { name: /toggle sidebar/i });
      expect(sidebarToggleButton).toBeInTheDocument();
      // expect(sidebarToggleButton).toBeVisible(); // JSDOM visibility check

      expect(sidebarToggleButton).toHaveTextContent('☰');
      fireEvent.click(sidebarToggleButton);
      expect(mockToggleMobileSidebar).toHaveBeenCalledTimes(1);

      // Re-render with sidebar open to check icon change
      render(
        <MemoryRouter>
          <Header pageType="dashboard" onToggleMobileSidebar={mockToggleMobileSidebar} isMobileSidebarOpen={true} />
        </MemoryRouter>
      );
      expect(screen.getByRole('button', { name: /toggle sidebar/i })).toHaveTextContent('✕');

    });
  });
});
