import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Landing from './components/Landing/Landing';
import About from './components/Landing/About';
import ThreatIntelligence from './components/Dashboard/ThreatIntelligence';
import NetworkDashboard from './components/Dashboard/NetworkDashboard';
import PhishingDashboard from './components/Dashboard/PhishingDashboard';
import MalwareDashboard from './components/Dashboard/MalwareDashboard';
import EventLogsDashboard from './components/Dashboard/EventLogsDashboard';
import Settings from './components/Settings/Settings';
import Features from './components/Landing/Features';
import Solutions from './components/Landing/Solutions';
import Pricing from './components/Landing/Pricing';
import Contact from './components/Landing/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import Header, { NavLink as HeaderNavLink } from './components/Header/Header'; // Import Header & NavLink type
// import './styles/theme.css'; // Removed import
import './App.css';

// Helper function for scrolling to a section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Navigation links for landing page
const landingNavLinks: HeaderNavLink[] = [
  { id: 'home', text: 'Home' },
  { id: 'features', text: 'Features' },
  { id: 'solutions', text: 'Solutions' },
  { id: 'contact', text: 'Contact' },
];

// Layout for Landing Pages
const LandingLayout: React.FC = () => {
  return (
    <>
      <Header 
        pageType="landing" 
        navLinks={landingNavLinks} 
        scrollToSection={scrollToSection} 
      />
      <div className="page-container-wrapper"> {/* Added wrapper for animation */}
        <Outlet /> {/* This will render the matched child route component */}
      </div>
    </>
  );
};

// Layout for Dashboard Pages
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location]);

  // Close mobile sidebar if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Breakpoint for mobile sidebar
        setIsMobileSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={`dashboard-layout ${isMobileSidebarOpen ? 'sidebar-open-mobile' : ''}`}>
      <Header 
        pageType="dashboard" 
        isAuthenticated={true} // Assuming user is authenticated for dashboard
        onToggleMobileSidebar={toggleMobileSidebar}
        isMobileSidebarOpen={isMobileSidebarOpen}
      />
      <Sidebar isMobileSidebarOpen={isMobileSidebarOpen} /> {/* Pass state to Sidebar */}
      <main className="main-content">
        <div className="page-container-wrapper"> {/* Added wrapper for animation */}
          {children}
        </div>
      </main>
      {isMobileSidebarOpen && <div className="sidebar-overlay" onClick={toggleMobileSidebar}></div>}
    </div>
  );
};

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <DashboardLayout>{children}</DashboardLayout> : <Navigate to="/login" />;
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app">
            <Routes>
              {/* Public routes with LandingLayout */}
              <Route element={<LandingLayout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Route>

              {/* Auth routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected routes with DashboardLayout */}
              <Route
                path="/threat-intelligence"
                element={<ProtectedRoute><ThreatIntelligence /></ProtectedRoute>}
              />
              <Route
                path="/reconnaissance"
                element={<ProtectedRoute><NetworkDashboard /></ProtectedRoute>}
              />
              <Route
                path="/phishing"
                element={<ProtectedRoute><PhishingDashboard /></ProtectedRoute>}
              />
              <Route
                path="/malware"
                element={<ProtectedRoute><MalwareDashboard /></ProtectedRoute>}
              />
              <Route
                path="/event-logs"
                element={<ProtectedRoute><EventLogsDashboard /></ProtectedRoute>}
              />
              <Route
                path="/settings"
                element={<ProtectedRoute><Settings /></ProtectedRoute>}
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
