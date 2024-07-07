import React from 'react';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const handleFeatureClick = (feature) => {
    // Implement feature navigation or functionality here
    console.log(`Clicked on ${feature}`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Features
      </div>

      <div className="sidebar-menu">
        <button onClick={() => handleFeatureClick('Feature 1')} className="sidebar-button">Feature 1</button>
        <button onClick={() => handleFeatureClick('Feature 2')} className="sidebar-button">Feature 2</button>
        {/* Add more buttons for additional features */}
      </div>
    </div>
  );
};

export default Sidebar;
