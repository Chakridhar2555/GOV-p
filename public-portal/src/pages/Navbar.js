import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import your Navbar.css for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Navigate to login page after logout
  };

  const handleProfile = () => {
    navigate('/profile'); // Navigate to profile page
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
      </div>
      <div className="profile-section">
        {/* Profile and Logout icon */}
        <button className="profile-button" onClick={handleProfile}>Profile</button>
        <div className="logout-button" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
