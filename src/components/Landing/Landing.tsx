import React from 'react'; // Removed useState as it's not used
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
import useScrollAnimation from '../../hooks/useScrollAnimation'; // Import the hook
import styles from './Landing.module.css';

// Helper component for animated elements to avoid hook calls in loops
const AnimatedElement: React.FC<{
  children: React.ReactNode;
  className?: string;
  animationType: 'fadeIn' | 'slideInUp';
  initialClasses?: string; // e.g., "opacity-0 translateY-20"
}> = ({ children, className, animationType, initialClasses }) => {
  const ref = useScrollAnimation({
    animationClass: `animate-${animationType}`, // e.g., animate-fadeIn
    initialClass: initialClasses, // Pass initial state classes to the hook
    triggerOnce: true,
    threshold: 0.1,
  });
  return <div ref={ref} className={`${className || ''} scroll-animated ${initialClasses || ''}`}>{children}</div>;
};


const Landing: React.FC = () => {
  // For sections, we can apply animation directly
  const featuresSectionRef = useScrollAnimation({ animationClass: 'animate-fadeIn', initialClass: 'opacity-0' });
  const solutionsSectionRef = useScrollAnimation({ animationClass: 'animate-fadeIn', initialClass: 'opacity-0' });
  const contactSectionRef = useScrollAnimation({ animationClass: 'animate-fadeIn', initialClass: 'opacity-0' });

  return (
    <div className={styles.landing}>

      {/* Hero section typically doesn't have scroll animation as it's visible on load */}
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
        {/* heroImage div removed as per subtask instructions */}
      </section>

      <section id="features" className={`${styles.features} scroll-animated opacity-0`} ref={featuresSectionRef}>
        <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.sectionHeader}>
          <h2>Key Features</h2>
          <p>Comprehensive security features powered by Machine Learning</p>
        </AnimatedElement>
        <div className={styles.featureGrid}>
          {/* Example of applying to individual cards - can be done with a loop and map if data comes from array */}
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.featureCard}>
            <div className={styles.icon}><i className="fas fa-fish"></i></div>
            <h3>Phishing Analysis</h3>
            <p>ML-powered detection and analysis of phishing attempts</p>
          </AnimatedElement>
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.featureCard}>
            <div className={styles.icon}><i className="fas fa-bug"></i></div>
            <h3>Malware Analysis</h3>
            <p>AI-driven malware detection and analysis</p>
          </AnimatedElement>
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.featureCard}>
            <div className={styles.icon}><i className="fas fa-network-wired"></i></div>
            <h3>Network Analysis</h3>
            <p>ML-based network traffic monitoring and anomaly detection</p>
          </AnimatedElement>
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.featureCard}>
            <div className={styles.icon}><i className="fas fa-desktop"></i></div>
            <h3>Windows Event Log Analysis</h3>
            <p>AI-powered Windows event log monitoring and analysis</p>
          </AnimatedElement>
        </div>
      </section>

      <section id="solutions" className={`${styles.solutions} scroll-animated opacity-0`} ref={solutionsSectionRef}>
        <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.sectionHeader}>
          <h2>Solutions</h2>
          <p>Open-source security solutions for organizations of all sizes</p>
        </AnimatedElement>
        <div className={styles.solutionTabs}>
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.tab}>
            <h3>Enterprise</h3>
            <p>Comprehensive security solution for large organizations</p>
            <ul><li>Advanced ML-based threat detection</li><li>24/7 monitoring and alerting</li><li>Custom reporting</li><li>Community support</li></ul>
            <Link to="/contact" className={styles.tabButton}>Learn More</Link>
          </AnimatedElement>
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.tab}>
            <h3>Mid-Market</h3>
            <p>Balanced security solution for growing businesses</p>
            <ul><li>ML-powered threat detection</li><li>Business hours monitoring</li><li>Standard reporting</li><li>Community support</li></ul>
            <Link to="/contact" className={styles.tabButton}>Learn More</Link>
          </AnimatedElement>
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.tab}>
            <h3>SMB</h3>
            <p>Essential security solution for small businesses</p>
            <ul><li>Basic ML-based threat detection</li><li>Alert-based monitoring</li><li>Basic reporting</li><li>Community support</li></ul>
            <Link to="/contact" className={styles.tabButton}>Learn More</Link>
          </AnimatedElement>
        </div>
      </section>

      <section id="contact" className={`${styles.contact} scroll-animated opacity-0`} ref={contactSectionRef}>
        <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.sectionHeader}>
          <h2>Contact Us</h2>
          <p>Get in touch with our team for questions or support</p>
        </AnimatedElement>
        <div className={styles.contactContainer}>
          {/* Applying animation to the two main columns of the contact section */}
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.contactInfo}>
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
          </AnimatedElement>
          <AnimatedElement animationType="slideInUp" initialClasses="opacity-0 translateY-20" className={styles.contactForm}>
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
          </AnimatedElement> {/* Corrected closing tag */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing; 