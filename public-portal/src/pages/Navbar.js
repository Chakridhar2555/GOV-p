import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import your Navbar.css for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Navigate to login page after logout
  };

  return (
    <div className="navbar">
      <div className="center-content">
        <div className="logo-container">
          {/* Your logo or brand icon */}
          <img
            src="https://seeklogo.com/images/J/janasena-logo-77D0F1F999-seeklogo.com.png"
            alt="Company Logo"
            className="logo"
          />
        </div>
        <div className="search-bar">
          {/* Search bar component */}
          <input type="text" placeholder="Search..." className="search-input" style={{ width: '300px' }} />
          <button className="search-button">Search</button>
        </div>
        <div className="profile-section">
          {/* Profile and Logout buttons */}
          <button className="profile-button">Profile</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
