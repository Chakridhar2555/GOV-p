import React, { useState } from 'react';
import { submitReport } from '../services/reportService';

const SubmitReport = () => {
  const [formData, setFormData] = useState({ details: '', location: '', evidence: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitReport(formData);
      alert('Report submitted successfully');
    } catch (error) {
      alert('Error submitting report');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="details" placeholder="Details" onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      <input type="text" name="evidence" placeholder="Evidence (URL)" onChange={handleChange} />
      <button type="submit">Submit Report</button>
    </form>
  );
};

export default SubmitReport;
