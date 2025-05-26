import React from 'react';
import styles from './Dashboard.module.css';

const EventLogsDashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Event Log Analysis</h1>
        <div className={styles.headerActions}>
          <button className={styles.actionButton}>
            <i className="fas fa-sync"></i>
            Refresh Data
          </button>
          <button className={styles.actionButton}>
            <i className="fas fa-download"></i>
            Export Logs
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Event Overview */}
        <div className={styles.card}>
          <h2>Event Overview</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Total Events</span>
              <span className={styles.statValue}>1,234</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Critical Events</span>
              <span className={styles.statValue}>23</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Warning Events</span>
              <span className={styles.statValue}>45</span>
            </div>
          </div>
        </div>

        {/* Recent Events */}
        <div className={styles.card}>
          <h2>Recent Events</h2>
          <div className={styles.eventList}>
            <div className={styles.eventItem}>
              <div className={styles.eventTime}>2 minutes ago</div>
              <div className={styles.eventInfo}>
                <h3>Failed Login Attempt</h3>
                <p>IP: 192.168.1.100</p>
              </div>
              <span className={styles.eventSeverity}>High</span>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventTime}>5 minutes ago</div>
              <div className={styles.eventInfo}>
                <h3>File System Change</h3>
                <p>User: admin</p>
              </div>
              <span className={styles.eventSeverity}>Medium</span>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventTime}>10 minutes ago</div>
              <div className={styles.eventInfo}>
                <h3>System Update</h3>
                <p>Windows Security Update</p>
              </div>
              <span className={styles.eventSeverity}>Low</span>
            </div>
          </div>
        </div>

        {/* Log Analysis Tools */}
        <div className={styles.card}>
          <h2>Analysis Tools</h2>
          <div className={styles.tools}>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🔍</span>
              <span className={styles.toolName}>Log Search</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>📊</span>
              <span className={styles.toolName}>Event Analytics</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>📝</span>
              <span className={styles.toolName}>Report Generator</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>🔒</span>
              <span className={styles.toolName}>Alert Rules</span>
            </button>
          </div>
        </div>

        {/* Event Categories */}
        <div className={styles.card}>
          <h2>Event Categories</h2>
          <div className={styles.categoryList}>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>Security Events</h3>
                <span className={styles.categoryCount}>456</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>Authentication failures</p>
                <p>Access violations</p>
                <p>Security policy changes</p>
              </div>
            </div>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>System Events</h3>
                <span className={styles.categoryCount}>389</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>Service starts/stops</p>
                <p>System updates</p>
                <p>Resource usage</p>
              </div>
            </div>
            <div className={styles.categoryItem}>
              <div className={styles.categoryHeader}>
                <h3>Application Events</h3>
                <span className={styles.categoryCount}>289</span>
              </div>
              <div className={styles.categoryDetails}>
                <p>Application errors</p>
                <p>Feature usage</p>
                <p>Performance metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLogsDashboard; 