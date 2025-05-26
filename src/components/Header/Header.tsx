import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.right}>
        <div className={styles.notifications}>
          <i className="fas fa-bell"></i>
          <span className={styles.badge}>3</span>
        </div>
        <div className={styles.user}>
          <img src="https://via.placeholder.com/40" alt="User" className={styles.avatar} />
          <span className={styles.name}>John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 