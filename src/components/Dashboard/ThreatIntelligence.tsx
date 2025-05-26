import React from 'react';
import styles from './Dashboard.module.css';

const ThreatIntelligence: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Threat Intelligence</h1>
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
        {/* Threat Overview */}
        <div className={styles.card}>
          <h2>Threat Overview</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Active Threats</span>
              <span className={styles.statValue}>24</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Critical Alerts</span>
              <span className={styles.statValue}>5</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Threat Score</span>
              <span className={styles.statValue}>78</span>
            </div>
          </div>
        </div>

        {/* Recent Threats */}
        <div className={styles.card}>
          <h2>Recent Threats</h2>
          <div className={styles.eventList}>
            <div className={styles.eventItem}>
              <div className={styles.eventInfo}>
                <h3>Advanced Persistent Threat</h3>
                <p>Target: Financial Systems</p>
              </div>
              <span className={styles.eventSeverity}>High</span>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventInfo}>
                <h3>Malware Activity</h3>
                <p>Type: Ransomware</p>
              </div>
              <span className={styles.eventSeverity}>Medium</span>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventInfo}>
                <h3>Suspicious Login Attempts</h3>
                <p>Location: Unknown</p>
              </div>
              <span className={styles.eventSeverity}>Low</span>
            </div>
          </div>
        </div>

        {/* Analysis Tools */}
        <div className={styles.card}>
          <h2>Analysis Tools</h2>
          <div className={styles.tools}>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🔍</span>
              <span className={styles.toolName}>Threat Search</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🗺️</span>
              <span className={styles.toolName}>Threat Map</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>📊</span>
              <span className={styles.toolName}>Report Builder</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🚫</span>
              <span className={styles.toolName}>Block IP</span>
            </button>
          </div>
        </div>

        {/* Intelligence Feed */}
        <div className={styles.card}>
          <h2>Intelligence Feed</h2>
          <div className={styles.categoryList}>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>New Ransomware Variant</h3>
                <span className={styles.categoryCount}>Critical</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>New variant targeting healthcare sector</p>
                <p>First seen: 2 hours ago</p>
              </div>
            </div>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>Zero-Day Vulnerability</h3>
                <span className={styles.categoryCount}>High</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>Affects multiple web servers</p>
                <p>First seen: 5 hours ago</p>
              </div>
            </div>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>New APT Group</h3>
                <span className={styles.categoryCount}>Medium</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>Targeting financial institutions</p>
                <p>First seen: 1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatIntelligence; 