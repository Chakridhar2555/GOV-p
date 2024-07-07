import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Features</div>
      <div className="sidebar-menu">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle sidebar-button" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Feature 1
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link to="/feature1/subfeature1" className="dropdown-item">Subfeature 1</Link></li>
            <li><Link to="/feature1/subfeature2" className="dropdown-item">Subfeature 2</Link></li>
            <li><Link to="/feature1/subfeature3" className="dropdown-item">Subfeature 3</Link></li>
          </ul>
        </div>
        <button className="sidebar-button">
          <Link to="/feature2" className="sidebar-link">Feature 2</Link>
        </button>
        <button className="sidebar-button">
          <Link to="/feature3" className="sidebar-link">Feature 3</Link>
        </button>
        {/* Add more buttons for additional features */}
      </div>
    </div>
  );
};

export default Sidebar;
