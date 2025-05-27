import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiShield,
  FiSearch,
  FiCrosshair, // Using FiCrosshair for Phishing as FiFish is not available
  FiList,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import { FaBug } from 'react-icons/fa'; // Import FaBug for Malware
import styles from './Sidebar.module.css';

interface SidebarProps {
  isMobileSidebarOpen?: boolean; // Optional for now, but will be used
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data from localStorage if needed
    localStorage.removeItem('isAuthenticated');
    // Navigate to the landing page
    navigate('/');
  };

  return (
    <div className={`${styles.sidebar} ${isMobileSidebarOpen ? styles.sidebarOpenMobile : ''}`}>
      <div className={styles.logo}>
        <h2>SecureXDR</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={location.pathname === '/threat-intelligence' ? styles.active : ''}>
            <Link to="/threat-intelligence">
              <FiShield className={styles.icon} />
              Threat Intel
            </Link>
          </li>
          <li className={location.pathname === '/reconnaissance' ? styles.active : ''}>
            <Link to="/reconnaissance">
              <FiSearch className={styles.icon} />
              Reconnaissance
            </Link>
          </li>
          <li className={location.pathname === '/phishing' ? styles.active : ''}>
            <Link to="/phishing">
              <FiCrosshair className={styles.icon} />
              Phishing
            </Link>
          </li>
          <li className={location.pathname === '/malware' ? styles.active : ''}>
            <Link to="/malware">
              <FaBug className={styles.icon} />
              Malware
            </Link>
          </li>
          <li className={location.pathname === '/event-logs' ? styles.active : ''}>
            <Link to="/event-logs">
              <FiList className={styles.icon} />
              Event Logs
            </Link>
          </li>
          <li className={location.pathname === '/settings' ? styles.active : ''}>
            <Link to="/settings">
              <FiSettings className={styles.icon} />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logoutContainer}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          <FiLogOut className={styles.icon} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 