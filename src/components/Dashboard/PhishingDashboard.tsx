import React from 'react';
import styles from './Dashboard.module.css';

const PhishingDashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Phishing Detection</h1>
        <div className={styles.headerActions}>
          <button className={styles.actionButton}>
            <i className="fas fa-sync"></i>
            Refresh Data
          </button>
          <button className={styles.actionButton}>
            <i className="fas fa-download"></i>
            Export Report
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Phishing Overview */}
        <div className={styles.card}>
          <h2>Phishing Overview</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Detected Attempts</span>
              <span className={styles.statValue}>156</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Blocked Emails</span>
              <span className={styles.statValue}>142</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Risk Score</span>
              <span className={styles.statValue}>85</span>
            </div>
          </div>
        </div>

        {/* Recent Phishing Attempts */}
        <div className={styles.card}>
          <h2>Recent Phishing Attempts</h2>
          <div className={styles.phishingList}>
            <div className={styles.phishingItem}>
              <div className={styles.phishingInfo}>
                <h3>Fake Invoice Scam</h3>
                <p>Targeting Finance Department</p>
              </div>
              <span className={styles.phishingSeverity}>High</span>
            </div>
            <div className={styles.phishingItem}>
              <div className={styles.phishingInfo}>
                <h3>Password Reset Request</h3>
                <p>Multiple users targeted</p>
              </div>
              <span className={styles.phishingSeverity}>Medium</span>
            </div>
            <div className={styles.phishingItem}>
              <div className={styles.phishingInfo}>
                <h3>Package Delivery Notice</h3>
                <p>Generic phishing attempt</p>
              </div>
              <span className={styles.phishingSeverity}>Low</span>
            </div>
          </div>
        </div>

        {/* Phishing Analysis Tools */}
        <div className={styles.card}>
          <h2>Analysis Tools</h2>
          <div className={styles.tools}>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🔍</span>
              <span className={styles.toolName}>URL Scanner</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>📧</span>
              <span className={styles.toolName}>Email Analyzer</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>📊</span>
              <span className={styles.toolName}>Trend Analysis</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🔒</span>
              <span className={styles.toolName}>Block Domain</span>
            </button>
          </div>
        </div>

        {/* Phishing Campaigns */}
        <div className={styles.card}>
          <h2>Active Campaigns</h2>
          <div className={styles.campaignList}>
            <div className={styles.campaignItem}>
              <div className={styles.campaignHeader}>
                <h3>Financial Services Scam</h3>
                <span className={styles.campaignStatus}>Active</span>
              </div>
              <div className={styles.campaignDetails}>
                <p>Targeting: Finance Department</p>
                <p>Attempts: 45</p>
                <p>Success Rate: 2%</p>
              </div>
            </div>
            <div className={styles.campaignItem}>
              <div className={styles.campaignHeader}>
                <h3>HR Document Request</h3>
                <span className={styles.campaignStatus}>Active</span>
              </div>
              <div className={styles.campaignDetails}>
                <p>Targeting: All Employees</p>
                <p>Attempts: 78</p>
                <p>Success Rate: 1%</p>
              </div>
            </div>
            <div className={styles.campaignItem}>
              <div className={styles.campaignHeader}>
                <h3>IT Support Scam</h3>
                <span className={styles.campaignStatus}>Active</span>
              </div>
              <div className={styles.campaignDetails}>
                <p>Targeting: IT Department</p>
                <p>Attempts: 33</p>
                <p>Success Rate: 0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhishingDashboard; 