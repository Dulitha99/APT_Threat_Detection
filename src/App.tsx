import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import './styles/theme.css';
import './App.css';

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/features" element={<Features />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />

              {/* Protected routes */}
              <Route
                path="/threat-intelligence"
                element={
                  <ProtectedRoute>
                    <div className="dashboard-layout">
                      <Sidebar />
                      <main className="main-content">
                        <ThreatIntelligence />
                      </main>
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reconnaissance"
                element={
                  <ProtectedRoute>
                    <div className="dashboard-layout">
                      <Sidebar />
                      <main className="main-content">
                        <NetworkDashboard />
                      </main>
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/phishing"
                element={
                  <ProtectedRoute>
                    <div className="dashboard-layout">
                      <Sidebar />
                      <main className="main-content">
                        <PhishingDashboard />
                      </main>
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/malware"
                element={
                  <ProtectedRoute>
                    <div className="dashboard-layout">
                      <Sidebar />
                      <main className="main-content">
                        <MalwareDashboard />
                      </main>
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/event-logs"
                element={
                  <ProtectedRoute>
                    <div className="dashboard-layout">
                      <Sidebar />
                      <main className="main-content">
                        <EventLogsDashboard />
                      </main>
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <div className="dashboard-layout">
                      <Sidebar />
                      <main className="main-content">
                        <Settings />
                      </main>
                    </div>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
