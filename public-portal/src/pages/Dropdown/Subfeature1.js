import React, { useState } from 'react';
import './styles.css';

const Feature1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    firNumber: '',
    governmentIdFile: null,
    evidenceFiles: [],
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'governmentIdFile') {
      setFormData({
        ...formData,
        [name]: files[0] // Assuming single file upload for government ID
      });
    } else if (name === 'evidenceFiles') {
      setFormData({
        ...formData,
        [name]: Array.from(files) // Assuming multiple files can be uploaded for evidence
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to backend

    // Clear form after submission
    setFormData({
      name: '',
      mobileNumber: '',
      firNumber: '',
      governmentIdFile: null,
      evidenceFiles: [],
      message: ''
    });
  };

  return (
    <div className="feature-container">
      <h1>Feature 1</h1>
      <form className="feature-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>FIR Number:</label>
          <input
            type="text"
            name="firNumber"
            value={formData.firNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Government ID Upload:</label>
          <input
            type="file"
            name="governmentIdFile"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Evidence Upload (MP3, Video, Images, etc.):</label>
          <input
            type="file"
            name="evidenceFiles"
            onChange={handleChange}
            multiple
            accept="image/*, video/*, audio/*"
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feature1;
