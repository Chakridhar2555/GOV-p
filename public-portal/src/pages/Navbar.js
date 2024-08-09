import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faUser, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import your Navbar.css for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Navigate to login page after logout
  };

  const handleNavigation = (path) => {
    navigate(path); // Generalized navigation function
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        {/* Your logo or brand icon */}
        <img
          src="https://seeklogo.com/images/J/janasena-logo-77D0F1F999-seeklogo.com.png"
          alt="Company Logo"
          className="logo"
        />
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => handleNavigation('/')}>
          <FontAwesomeIcon icon={faHome} /> Home
        </button>
        <button className="nav-button" onClick={() => handleNavigation('/about')}>
          <FontAwesomeIcon icon={faInfoCircle} /> About Us
        </button>
        <button className="nav-button" onClick={() => handleNavigation('/contact')}>
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </button>
        <button className="nav-button" onClick={() => handleNavigation('/profile')}>
          <FontAwesomeIcon icon={faUser} /> Profile
        </button>
      </div>
      <div className="logout-section">
        <button className="logout-button" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
