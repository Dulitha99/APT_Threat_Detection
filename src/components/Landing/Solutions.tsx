import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security solution for large organizations with advanced threat detection and response capabilities.',
      icon: '🏢',
      features: [
        'Advanced threat detection',
        'Real-time monitoring',
        'Custom reporting',
        'Dedicated support team',
        'API integrations'
      ]
    },
    {
      title: 'SMB Protection',
      description: 'Affordable security solution designed for small and medium-sized businesses.',
      icon: '🏪',
      features: [
        'Basic threat detection',
        'Scheduled monitoring',
        'Standard reporting',
        'Email support',
        'Cloud-based deployment'
      ]
    },
    {
      title: 'Government & Defense',
      description: 'Secure, compliant solutions for government agencies and defense contractors.',
      icon: '🛡️',
      features: [
        'FIPS 140-2 compliant',
        'FedRAMP authorized',
        'Custom compliance reporting',
        '24/7 dedicated support',
        'On-premise deployment options'
      ]
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

      <main className={styles.solutionsMain}>
        <section className={styles.hero}>
          <h1>Security Solutions</h1>
          <p>Tailored security solutions for organizations of all sizes</p>
        </section>

        <section className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.solutionCard}>
              <div className={styles.solutionIcon}>{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p className={styles.solutionDescription}>{solution.description}</p>
              <ul className={styles.featuresList}>
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className={styles.solutionButton}>
                Learn More
              </Link>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Need a custom solution?</h2>
          <p>Our team can help design a security solution tailored to your specific needs</p>
          <Link to="/contact" className={styles.ctaButton}>Contact Sales</Link>
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

export default Solutions; 