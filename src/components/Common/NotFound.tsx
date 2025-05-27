import React from 'react';
import { Link } from 'react-router-dom';
// Optional: Add some basic styling
// import './NotFound.module.css'; 

const NotFound: React.FC = () => {
  return (
    <div /* className="not-found-container" */>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Homepage</Link>
      {/* Or link to a relevant dashboard if the user is likely authenticated */}
      {/* <Link to="/threat-intelligence">Go to Dashboard</Link> */}
    </div>
  );
};

export default NotFound;
