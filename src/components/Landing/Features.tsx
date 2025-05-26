import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Real-time Network Monitoring',
      description: 'Monitor network traffic, connections, and security events in real-time with advanced analytics.',
      icon: '🌐'
    },
    {
      title: 'Malware Analysis',
      description: 'Advanced malware detection and analysis tools to identify and neutralize threats.',
      icon: '🛡️'
    },
    {
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting to track and improve your security posture.',
      icon: '📊'
    },
    {
      title: 'User Management',
      description: 'Role-based access control and user management for secure collaboration.',
      icon: '👥'
    },
    {
      title: 'Automated Response',
      description: 'Automated threat response and incident management to minimize security risks.',
      icon: '⚡'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Track and maintain compliance with security standards and regulations.',
      icon: '✅'
    }
  ];

  return (
    <div className={styles.landingContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">Security Dashboard</Link>
        </div>
        <div className={styles.navLinks}>
          <Link to="/features">Features</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className={styles.loginButton}>Login</Link>
        </div>
      </nav>

      <main className={styles.featuresMain}>
        <section className={styles.hero}>
          <h1>Powerful Security Features</h1>
          <p>Discover the tools and capabilities that make our security dashboard the best choice for your organization</p>
        </section>

        <section className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of organizations that trust our security dashboard</p>
          <Link to="/signup" className={styles.ctaButton}>Start Free Trial</Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/careers">Careers</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <Link to="/blog">Blog</Link>
            <Link to="/documentation">Documentation</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Security Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Features; 