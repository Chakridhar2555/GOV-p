import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from "./pages/Login";
import Register from "./pages/Register";
import SubmitReport from "./pages/SubmitReport";
import Home from "./pages/Home";
import Feature1 from "./pages/Feature1";
import Feature2 from "./pages/Feature2";
import Feature3 from "./pages/Feature3";
import Subfeature1 from "./pages/Dropdown/Subfeature1";
import Subfeature2 from "./pages/Dropdown/Subfeature2";
import Subfeature3 from "./pages/Dropdown/Subfeature3";
import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect from / to /login */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submit-report" element={<SubmitReport />} />
          <Route path="/home" element={<Home />} />
              <Route path="/feature1" element={<Feature1 />} />
              <Route path="/feature2" element={<Feature2 />} />
              <Route path="/feature3" element={<Feature3 />} />
{/* Dropdown */}
              <Route path="/feature1/subfeature1" element={<Subfeature1 />} />
              <Route path="/feature1/subfeature2" element={<Subfeature2 />} />
              <Route path="/feature1/subfeature3" element={<Subfeature3 />} />
              {/* Add routes for other features */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
