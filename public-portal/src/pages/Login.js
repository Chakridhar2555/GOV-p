import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AuthForm.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      localStorage.setItem('token', response.data.token);
      toast.success('User logged in successfully', {
        position: "top-right",
        autoClose: 2000, // 4 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => navigate('/home') // Correctly closing the parenthesis and curly braces
      });
    } catch (error) {
      toast.error('Error logging in user. Please create an account.', {
        position: "top-right",
        autoClose: 2000, // 4 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className="auth-container">
      <div className="logo-container">
        <img
          src="https://seeklogo.com/images/J/janasena-logo-77D0F1F999-seeklogo.com.png"
          alt="Company Logo"
          className="logo"
        />
      </div>
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <button className="create-account-button" onClick={handleCreateAccount}>
        Create Account
      </button>
      <ToastContainer />
    </div>
  );
};

export default Login;
