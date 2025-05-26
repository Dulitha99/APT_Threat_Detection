import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        subject: 'general'
      });
    }, 1500);
  };

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

      <main className={styles.contactMain}>
        <section className={styles.hero}>
          <h1>Contact Us</h1>
          <p>Get in touch with our team for questions, support, or sales inquiries</p>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <h3>Email</h3>
              <p>support@securitydashboard.com</p>
              <p>sales@securitydashboard.com</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri, 9am-5pm EST</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📍</div>
              <h3>Office</h3>
              <p>123 Security Street</p>
              <p>New York, NY 10001</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            {submitSuccess ? (
              <div className={styles.successMessage}>
                <h3>Thank you for your message!</h3>
                <p>We've received your inquiry and will get back to you shortly.</p>
                <button 
                  className={styles.resetButton}
                  onClick={() => setSubmitSuccess(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  ></textarea>
                </div>
                {submitError && <div className={styles.errorMessage}>{submitError}</div>}
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
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

export default Contact; 