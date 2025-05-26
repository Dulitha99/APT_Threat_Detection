import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data from localStorage if needed
    localStorage.removeItem('isAuthenticated');
    // Navigate to the landing page
    navigate('/');
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>SecureXDR</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={location.pathname === '/threat-intelligence' ? styles.active : ''}>
            <Link to="/threat-intelligence">
              <i className="fas fa-shield-alt"></i>
              Threat Intelligence
            </Link>
          </li>
          <li className={location.pathname === '/reconnaissance' ? styles.active : ''}>
            <Link to="/reconnaissance">
              <i className="fas fa-search"></i>
              Reconnaissance Detection
            </Link>
          </li>
          <li className={location.pathname === '/phishing' ? styles.active : ''}>
            <Link to="/phishing">
              <i className="fas fa-fish"></i>
              Phishing Detection
            </Link>
          </li>
          <li className={location.pathname === '/malware' ? styles.active : ''}>
            <Link to="/malware">
              <i className="fas fa-bug"></i>
              Malware Analysis
            </Link>
          </li>
          <li className={location.pathname === '/event-logs' ? styles.active : ''}>
            <Link to="/event-logs">
              <i className="fas fa-list-alt"></i>
              Event Log Analysis
            </Link>
          </li>
          <li className={location.pathname === '/settings' ? styles.active : ''}>
            <Link to="/settings">
              <i className="fas fa-cog"></i>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logoutContainer}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 