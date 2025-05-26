import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$49',
      period: 'per month',
      description: 'Perfect for small businesses',
      features: [
        'Basic network monitoring',
        'Up to 5 users',
        'Email support',
        'Basic reporting',
        '1GB log storage'
      ],
      icon: '🚀'
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'per month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced network monitoring',
        'Up to 20 users',
        'Priority support',
        'Advanced reporting',
        '10GB log storage',
        'Malware analysis',
        'Custom alerts'
      ],
      icon: '💼',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'For large organizations',
      features: [
        'Full security suite',
        'Unlimited users',
        '24/7 dedicated support',
        'Custom reporting',
        'Unlimited log storage',
        'Advanced malware analysis',
        'Custom integrations',
        'SLA guarantee'
      ],
      icon: '🏢'
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

      <main className={styles.pricingMain}>
        <section className={styles.hero}>
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that best fits your security needs</p>
        </section>

        <section className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <div className={styles.planIcon}>{plan.icon}</div>
              <h3>{plan.name}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <p className={styles.planDescription}>{plan.description}</p>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Link 
                to={plan.name === 'Enterprise' ? '/contact' : '/signup'} 
                className={`${styles.planButton} ${plan.popular ? styles.popularButton : ''}`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Link>
            </div>
          ))}
        </section>

        <section className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Can I change plans later?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is there a free trial?</h3>
              <p>Yes, we offer a 14-day free trial for all plans. No credit card required.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and wire transfers for enterprise plans.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you offer discounts?</h3>
              <p>Yes, we offer discounts for annual subscriptions and non-profit organizations.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Still have questions?</h2>
          <p>Our team is here to help you choose the right plan</p>
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

export default Pricing; 