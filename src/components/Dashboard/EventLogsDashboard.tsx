import React, { useEffect } from 'react'; // Added useEffect
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { fetchEventsData } from '../../services/eventService'; // Corrected path
import styles from './Dashboard.module.css';
// Optional: Chart imports if you decide to add them
// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EventLogsDashboard: React.FC = () => {
  const { data: eventsData, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['eventLogs'],
    queryFn: fetchEventsData,
    // Removed onError from here
  });

  useEffect(() => {
    if (isError && error) {
      toast.error(`Error loading event logs: ${(error as any).message || 'Unknown error'}`);
    }
  }, [isError, error]);

  if (isLoading) {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardHeader}><h1>Event Log Analysis</h1></div>
        <div className="loading-spinner-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <div className="loading-spinner"></div>
          <p style={{ marginLeft: '10px' }}>Loading event logs...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardHeader}><h1>Event Log Analysis</h1></div>
        <div className={styles.errorState}>
          <p>Error loading event logs: {error?.message || 'Unknown error'}</p>
          <button onClick={() => refetch()} className={styles.actionButton}>Try Again</button>
        </div>
      </div>
    );
  }

  const events = eventsData?.data || [];
  const totalEvents = events.length;
  // Adjust severity conditions based on your actual mock data values
  const criticalEvents = events.filter(event => event.severity === 'High' || event.severity === 'Critical').length;
  const warningEvents = events.filter(event => event.severity === 'Medium').length;

  const getSeverityClass = (severity?: string) => { // Made severity optional
    if (!severity) return '';
    const severityLower = severity.toLowerCase();
    if (severityLower === 'high' || severityLower === 'critical') return styles.severityHigh;
    if (severityLower === 'medium') return styles.severityMedium;
    if (severityLower === 'low') return styles.severityLow;
    return '';
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Event Log Analysis</h1>
        <div className={styles.headerActions}>
          <button className={styles.actionButton} onClick={() => refetch()} disabled={isLoading}>
            {/* Replace with actual icon later if react-icons issue is resolved */}
            {isLoading ? 'Refreshing...' : '[Refresh Data]'}
          </button>
          <button className={styles.actionButton}>
            {/* Replace with actual icon later */}
            [Export Logs]
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
              <span className={styles.statValue}>{totalEvents}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Critical Events</span>
              <span className={styles.statValue}>{criticalEvents}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Warning Events</span>
              <span className={styles.statValue}>{warningEvents}</span>
            </div>
          </div>
        </div>

        {/* Recent Events */}
        <div className={`${styles.card} ${styles.fullWidthCard}`}> {/* Example of a full-width card */}
          <h2>Recent Events</h2>
          <div className={styles.eventList}>
            {events.slice(0, 5).map(event => (
              <div className={styles.eventItem} key={event.id}>
                <div className={styles.eventTime}>{new Date(event.timestamp).toLocaleTimeString()}</div>
                <div className={styles.eventInfo}>
                  <h3>{event.type}</h3>
                  <p>Details: {event.details} (Source: {event.sourceIp || (event as any).device || 'N/A'})</p>
                </div>
                <span className={`${styles.eventSeverityTag} ${getSeverityClass(event.severity)}`}>
                  {event.severity}
                </span>
              </div>
            ))}
            {events.length === 0 && <p>No recent events.</p>}
          </div>
        </div>

        {/* Log Analysis Tools */}
        <div className={styles.card}>
          <h2>Analysis Tools</h2>
          <div className={styles.tools}>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>[Search]</span>
              <span className={styles.toolName}>Log Search</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>[Analytics]</span>
              <span className={styles.toolName}>Event Analytics</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>[Report]</span>
              <span className={styles.toolName}>Report Generator</span>
            </button>
            <button className={styles.toolButton}>
              <span className={styles.toolIcon}>[Alerts]</span>
              <span className={styles.toolName}>Alert Rules</span>
            </button>
          </div>
        </div>

        {/* Event Categories - Placeholder or simple list */}
        <div className={styles.card}>
          <h2>Event Categories</h2>
          {/* Placeholder - replace with dynamic data or chart later */}
          <div className={styles.placeholderContent}>
            <p>Event category chart or summary will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLogsDashboard;