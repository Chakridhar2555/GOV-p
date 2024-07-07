import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Home.css'; // Import your Home.css for styling

const Home = () => {
  return (
    <div className="home-container">
     
      <Sidebar />
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Home;
