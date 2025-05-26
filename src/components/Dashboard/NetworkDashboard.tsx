import React from 'react';
import styles from './Dashboard.module.css';

const NetworkDashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Reconnaissance Detection</h1>
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
        {/* Network Overview */}
        <div className={styles.card}>
          <h2>Network Overview</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Active Connections</span>
              <span className={styles.statValue}>156</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Suspicious IPs</span>
              <span className={styles.statValue}>12</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Threat Score</span>
              <span className={styles.statValue}>65</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className={styles.card}>
          <h2>Recent Activity</h2>
          <div className={styles.eventList}>
            <div className={styles.eventItem}>
              <div className={styles.eventInfo}>
                <h3>Port Scan Detected</h3>
                <p>From IP: 192.168.1.100</p>
              </div>
              <span className={styles.eventSeverity}>High</span>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventInfo}>
                <h3>Unusual Traffic Pattern</h3>
                <p>Multiple connection attempts</p>
              </div>
              <span className={styles.eventSeverity}>Medium</span>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventInfo}>
                <h3>New Device Connected</h3>
                <p>MAC: 00:11:22:33:44:55</p>
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
              <span className={styles.toolName}>Network Scan</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>📊</span>
              <span className={styles.toolName}>Traffic Analysis</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🌐</span>
              <span className={styles.toolName}>IP Lookup</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🔒</span>
              <span className={styles.toolName}>Block IP</span>
            </button>
          </div>
        </div>

        {/* Network Status */}
        <div className={styles.card}>
          <h2>Network Status</h2>
          <div className={styles.categoryList}>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>Firewall Status</h3>
                <span className={styles.categoryCount}>Active</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>All rules enforced</p>
                <p>Last updated: 5 mins ago</p>
              </div>
            </div>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>VPN Connections</h3>
                <span className={styles.categoryCount}>3</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>2 active users</p>
                <p>1 pending connection</p>
              </div>
            </div>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>System Health</h3>
                <span className={styles.categoryCount}>Good</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>CPU: 45%</p>
                <p>Memory: 60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkDashboard; 