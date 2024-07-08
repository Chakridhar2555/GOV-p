import React, { useState } from 'react';
import './styles.css';

const Feature1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    firNumber: '',
    governmentIdFile: null,
    evidenceFiles: [],
    message: '',
    selectedDistrict: '',
    selectedPlace: '',
    selectedPoliceStation: ''
  });

  // Sample data for places, districts, and police stations
  const districts = {
    'Andhra Pradesh': {
      'Place A': ['District A1', 'District A2'],
      'Place B': ['District B1', 'District B2'],
      'Place C': ['District C1', 'District C2']
    }
    // Add more places and districts as needed
  };

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

  const handleDistrictChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      selectedDistrict: value,
      selectedPlace: '', // Reset selected place when district changes
      selectedPoliceStation: '' // Reset selected police station when district changes
    });
  };

  const handlePlaceChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      selectedPlace: value,
      selectedPoliceStation: '' // Reset selected police station when place changes
    });
  };

  const handlePoliceStationChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      selectedPoliceStation: value
    });
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
      message: '',
      selectedDistrict: '',
      selectedPlace: '',
      selectedPoliceStation: ''
    });
  };

  return (
    <div className="feature-container">
      <h1>Feature 1 - Complaint Registration</h1>
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
        <div>
          <label>Select District:</label>
          <select
            name="selectedDistrict"
            value={formData.selectedDistrict}
            onChange={handleDistrictChange}
            required
          >
            <option value="">Select District</option>
            {Object.keys(districts['Andhra Pradesh']).map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
        </div>
        {formData.selectedDistrict && (
          <div>
            <label>Select Place:</label>
            <select
              name="selectedPlace"
              value={formData.selectedPlace}
              onChange={handlePlaceChange}
              required
            >
              <option value="">Select Place</option>
              {districts['Andhra Pradesh'][formData.selectedDistrict].map((place, index) => (
                <option key={index} value={place}>{place}</option>
              ))}
            </select>
          </div>
        )}
        {formData.selectedPlace && (
          <div>
            <label>Select Police Station:</label>
            <select
              name="selectedPoliceStation"
              value={formData.selectedPoliceStation}
              onChange={handlePoliceStationChange}
              required
            >
              <option value="">Select Police Station</option>
              {/* You can dynamically fetch police stations based on selectedPlace */}
              {/* Example: policeStations[formData.selectedPlace].map(...) */}
            </select>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feature1;
