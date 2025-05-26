import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      {/* Removed header with single "Home" link */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About SecureXDR</h1>
          <p>Empowering organizations with advanced threat detection and response capabilities.</p>
        </div>
      </section>

      <section className={styles.story}> {/* New Section: Founding Story/Vision */}
        <div className={styles.storyContent}>
          <h2>Our Origin & Vision</h2>
          <p>
            SecureXDR was born from a shared vision among cybersecurity professionals who saw a critical gap: 
            many organizations lacked access to comprehensive, adaptable security tools. We envisioned a platform 
            that was not only powerful but also open and community-driven, fostering collaboration to stay ahead 
            of the ever-evolving threat landscape. Our goal is to make top-tier security accessible to all, 
            creating a safer digital world together.
          </p>
        </div>
      </section>

      <section className={styles.mission}> {/* Renamed "Why SecureXDR?" to "Our Mission" */}
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2>Our Mission</h2> {/* Changed title */}
            <p>
              SecureXDR is an open-source solution designed to democratize advanced threat detection 
              and response capabilities. We believe that every organization, regardless of size or 
              budget, should have access to enterprise-grade security tools.
            </p>
            <p>
              Our platform combines cutting-edge technologies with community-driven development to 
              create a robust security solution that evolves with emerging threats. By leveraging 
              open-source principles, we ensure transparency, continuous improvement, and rapid 
              adaptation to new security challenges.
            </p>
          </div>
          <div className={styles.missionImage}>
            <img src="/images/mission.jpg" alt="SecureXDR Mission" />
          </div>
        </div>
      </section>

      <section className={styles.values}> {/* New Section: Our Values */}
        <div className={styles.valuesContent}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3>Innovation</h3>
              <p>Continuously exploring new technologies and methodologies to counter emerging threats effectively.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Collaboration</h3>
              <p>Fostering a strong community to share knowledge, insights, and contributions for collective security.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌐</div>
              <h3>Accessibility</h3>
              <p>Making advanced security tools available to all, ensuring transparency and open access.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.teamContent}>
          <h2>Our Team</h2>
          <p className={styles.teamIntro}> {/* Added an intro paragraph for the team section */}
            SecureXDR is driven by a dedicated team of cybersecurity experts, developers, and analysts passionate about open source and digital safety.
          </p>
          <div className={styles.teamGrid}>
            <div className={styles.memberCard}>
              <img
                className={styles.memberImage}
                src="/images/dulitha.JPG"
                alt="Dulitha Wickramasinghe"
              />
              <div className={styles.memberInfo}>
                <h3>Dulitha Wickramasinghe</h3>
                <p>Lead Developer</p>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/Dulitha99" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/dulitha-wickramasinghe-398971211/" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.memberCard}>
              <img
                className={styles.memberImage}
                src="/images/nilushi.jpg"
                alt="Nilushi Chandrasekara"
              />
              <div className={styles.memberInfo}>
                <h3>Nilushi Chandrasekara</h3>
                <p>Security Analyst</p>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/nilushi" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/nilushi" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.memberCard}>
              <img
                className={styles.memberImage}
                src="/images/lelasara.jpg"
                alt="Lelasara Gangaboda"
              />
              <div className={styles.memberInfo}>
                <h3>Lelasara Gangaboda</h3>
                <p>Network Security Expert</p>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/lelasara" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/lelasara" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.memberCard}>
              <img
                className={styles.memberImage}
                src="/images/induwara.jpg"
                alt="Induwara Sellahewa"
              />
              <div className={styles.memberInfo}>
                <h3>Induwara Sellahewa</h3>
                <p>Malware Analyst</p>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/induwara" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/induwara" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Removed Core Features section from About.tsx */}

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Get Started?</h2>
          <p>Join us in making the digital world more secure</p>
          <a href="https://github.com/securexdr" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Visit GitHub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 