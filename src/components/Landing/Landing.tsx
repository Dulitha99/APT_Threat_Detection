import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../Common/ThemeToggle';
import Footer from '../Common/Footer';
import styles from './Landing.module.css';

const Landing: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.landing}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>SecureXDR</h1>
          <span className={styles.logoTag}>Open Source</span>
        </div>
        <nav className={styles.nav}>
          <a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? styles.active : ''}>Home</a>
          <a onClick={() => scrollToSection('features')} className={activeSection === 'features' ? styles.active : ''}>Features</a>
          <a onClick={() => scrollToSection('solutions')} className={activeSection === 'solutions' ? styles.active : ''}>Solutions</a>
          <a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? styles.active : ''}>Contact</a>
        </nav>
        <div className={styles.auth}>
          <Link to="/login" className={styles.loginBtn}>Login</Link>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
          <ThemeToggle />
        </div>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Advanced Threat Detection & Response</h1>
          <p>Open-source XDR solution powered by Machine Learning for phishing, malware, network, and Windows event log analysis</p>
          <div className={styles.heroButtons}>
            <Link to="/signup" className={styles.primaryButton}>Get Started</Link>
            <a href="https://github.com/securexdr" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/hero-image.svg" alt="XDR Dashboard" />
        </div>
      </section>

      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2>Key Features</h2>
          <p>Comprehensive security features powered by Machine Learning</p>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <i className="fas fa-fish"></i>
            </div>
            <h3>Phishing Analysis</h3>
            <p>ML-powered detection and analysis of phishing attempts</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <i className="fas fa-bug"></i>
            </div>
            <h3>Malware Analysis</h3>
            <p>AI-driven malware detection and analysis</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <i className="fas fa-network-wired"></i>
            </div>
            <h3>Network Analysis</h3>
            <p>ML-based network traffic monitoring and anomaly detection</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>
              <i className="fas fa-desktop"></i>
            </div>
            <h3>Windows Event Log Analysis</h3>
            <p>AI-powered Windows event log monitoring and analysis</p>
          </div>
        </div>
      </section>

      <section id="solutions" className={styles.solutions}>
        <div className={styles.sectionHeader}>
          <h2>Solutions</h2>
          <p>Open-source security solutions for organizations of all sizes</p>
        </div>
        <div className={styles.solutionTabs}>
          <div className={styles.tab}>
            <h3>Enterprise</h3>
            <p>Comprehensive security solution for large organizations</p>
            <ul>
              <li>Advanced ML-based threat detection</li>
              <li>24/7 monitoring and alerting</li>
              <li>Custom reporting</li>
              <li>Community support</li>
            </ul>
            <Link to="/contact" className={styles.tabButton}>Learn More</Link>
          </div>
          <div className={styles.tab}>
            <h3>Mid-Market</h3>
            <p>Balanced security solution for growing businesses</p>
            <ul>
              <li>ML-powered threat detection</li>
              <li>Business hours monitoring</li>
              <li>Standard reporting</li>
              <li>Community support</li>
            </ul>
            <Link to="/contact" className={styles.tabButton}>Learn More</Link>
          </div>
          <div className={styles.tab}>
            <h3>SMB</h3>
            <p>Essential security solution for small businesses</p>
            <ul>
              <li>Basic ML-based threat detection</li>
              <li>Alert-based monitoring</li>
              <li>Basic reporting</li>
              <li>Community support</li>
            </ul>
            <Link to="/contact" className={styles.tabButton}>Learn More</Link>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.sectionHeader}>
          <h2>Contact Us</h2>
          <p>Get in touch with our team for questions or support</p>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@securexdr.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>123 Security St, Cyber City</p>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="Your company" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Landing; 