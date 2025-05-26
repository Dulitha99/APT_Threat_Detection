import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import ThemeToggle from '../Common/ThemeToggle';
import styles from './Header.module.css';

export interface NavLink { // Exported NavLink
  id: string;
  text: string;
}

export interface HeaderProps { // Exported HeaderProps for consistency
  pageType: 'landing' | 'dashboard';
  navLinks?: NavLink[];
  scrollToSection?: (sectionId: string) => void;
  isAuthenticated?: boolean; // Assuming we'll use this later for dashboard
  onToggleMobileSidebar?: () => void; // Added for dashboard sidebar toggle
  isMobileSidebarOpen?: boolean; // Added for dashboard sidebar toggle icon state
}

const Header: React.FC<HeaderProps> = ({ pageType, navLinks, scrollToSection, isAuthenticated, onToggleMobileSidebar, isMobileSidebarOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For landing page mobile nav
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Breakpoint for mobile menu
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header} style={{ left: pageType === 'dashboard' ? '250px' : '0' }}>
      <div className={styles.logoContainer}>
        {/* Sidebar Toggle Hamburger for Dashboard - visible only on mobile */}
        {pageType === 'dashboard' && (
          <button 
            className={`${styles.hamburgerButton} ${styles.sidebarToggleButton}`} 
            onClick={onToggleMobileSidebar} 
            aria-label="Toggle sidebar"
            aria-expanded={isMobileSidebarOpen}
          >
            {isMobileSidebarOpen ? '✕' : '☰'}
          </button>
        )}
        <div className={styles.logo}>
          <Link to="/">
            <h1>SecureXDR</h1>
          </Link>
          {pageType === 'landing' && <span className={styles.logoTag}>Open Source</span>}
        </div>
      </div>
      
      {/* Navigation Toggle Hamburger for Landing Page - visible only on mobile */}
      {pageType === 'landing' && (
        <button 
          className={`${styles.hamburgerButton} ${styles.navToggleButton}`} 
          onClick={toggleMobileMenu} 
          aria-label="Toggle navigation" 
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Desktop Navigation for Landing Page */}
      {pageType === 'landing' && navLinks && scrollToSection && (
        <nav className={`${styles.nav} ${styles.desktopNav}`}> {/* Add desktopNav class */}
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className={styles.navButton}>
              {link.text}
            </button>
          ))}
        </nav>
      )}

      {/* Mobile Navigation Menu for Landing Page */}
      {pageType === 'landing' && isMobileMenuOpen && navLinks && scrollToSection && (
        <nav className={styles.mobileNav}>
          {navLinks.map(link => (
            <button key={link.id} onClick={() => { scrollToSection(link.id); toggleMobileMenu(); }} className={styles.navButton}>
              {link.text}
            </button>
          ))}
        </nav>
      )}

      {/* Dashboard Search (remains in its current position, responsive CSS handles placement) */}
      {pageType === 'dashboard' && (
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
        </div>
      )}

      {/* Right side content (auth, user info, theme toggle) */}
      <div className={styles.right}>
        {pageType === 'landing' ? (
          <div className={styles.auth}>
            <Link to="/login" className={styles.loginBtn}>Login</Link>
            <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
          </div>
        ) : (
          // Dashboard specific right content
          <>
            <div className={styles.notifications}>
              <i className="fas fa-bell"></i>
              <span className={styles.badge}>3</span>
            </div>
            <div className={styles.user}>
              <img src="https://via.placeholder.com/40" alt="User" className={styles.avatar} />
              <span className={styles.name}>John Doe</span>
            </div>
          </>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;