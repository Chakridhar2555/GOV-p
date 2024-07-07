import React, { useState, useEffect } from 'react';
import { fetchReports } from '../services/reportService';

const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      const data = await fetchReports();
      setReports(data);
    };
    getReports();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {reports.map(report => (
          <li key={report._id}>
            <p>{report.details}</p>
            <p>Status: {report.status}</p>
            <button>Update Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
