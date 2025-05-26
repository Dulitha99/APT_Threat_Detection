import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    language: 'english',
    timezone: 'UTC'
  });

  // Initialize settings from localStorage
  useEffect(() => {
    const savedSettings = {
      notifications: localStorage.getItem('notifications') === 'true',
      emailUpdates: localStorage.getItem('emailUpdates') === 'true',
      language: localStorage.getItem('language') || 'english',
      timezone: localStorage.getItem('timezone') || 'UTC'
    };
    setSettings(savedSettings);
  }, []);

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => {
      const newSettings = {
        ...prev,
        [key]: !prev[key]
      };
      
      // Save to localStorage
      localStorage.setItem(key, String(newSettings[key]));
      
      return newSettings;
    });
  };

  const handleSelect = (key: keyof typeof settings, value: string) => {
    setSettings(prev => {
      const newSettings = {
        ...prev,
        [key]: value
      };
      
      // Save to localStorage
      localStorage.setItem(key, value);
      
      return newSettings;
    });
  };

  const handleSave = () => {
    // Show success message or handle save confirmation
    alert('Settings saved successfully!');
  };

  return (
    <div className={`${styles.dashboardContainer} ${theme === 'dark' ? styles.darkMode : ''}`}>
      <div className={styles.dashboardHeader}>
        <div className={styles.headerTitle}>
          <h1>Settings</h1>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.actionButton} onClick={handleSave}>
            Save Changes
          </button>
          <button className={`${styles.actionButton} ${styles.secondaryButton}`}>
            Cancel
          </button>
        </div>
      </div>

      <div className={styles.settingsContent}>
        <div className={styles.card}>
          <h2>Preferences</h2>
          <div className={styles.settingsList}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingHeader}>
                  <span className={styles.settingIcon}>🔔</span>
                  <label>Push Notifications</label>
                </div>
                <p>Receive push notifications for important updates</p>
              </div>
              <div className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={() => handleToggle('notifications')}
                />
                <span className={styles.slider}></span>
              </div>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingHeader}>
                  <span className={styles.settingIcon}>📧</span>
                  <label>Email Updates</label>
                </div>
                <p>Receive email updates about your account</p>
              </div>
              <div className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={settings.emailUpdates}
                  onChange={() => handleToggle('emailUpdates')}
                />
                <span className={styles.slider}></span>
              </div>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingHeader}>
                  <span className={styles.settingIcon}>🌙</span>
                  <label>Dark Mode</label>
                </div>
                <p>Switch between light and dark theme</p>
              </div>
              <div className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
                <span className={styles.slider}></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Regional</h2>
          <div className={styles.settingsList}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingHeader}>
                  <span className={styles.settingIcon}>🌐</span>
                  <label>Language</label>
                </div>
                <p>Select your preferred language</p>
              </div>
              <select 
                value={settings.language}
                onChange={(e) => handleSelect('language', e.target.value)}
                className={styles.select}
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <div className={styles.settingHeader}>
                  <span className={styles.settingIcon}>🕒</span>
                  <label>Timezone</label>
                </div>
                <p>Set your local timezone</p>
              </div>
              <select 
                value={settings.timezone}
                onChange={(e) => handleSelect('timezone', e.target.value)}
                className={styles.select}
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="GMT">GMT</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 