import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = "60e5e7f44c7f5d001f2ae30f"; // Retrieve this value from your authentication context or state

    try {
      const response = await fetch('http://localhost:5001/profile', {  // Updated port to 5001
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          name,
          email,
          oldPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Profile updated successfully');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch. Please check the console for more details.');
    }
  };

  return (
    <div className="profile-page">
      <form onSubmit={handleSubmit} className="profile-form">
        <h2>Profile</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="old-password">Old Password</label>
          <input
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
