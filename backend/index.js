const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs'); // Using bcryptjs instead of bcrypt

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/report');

app.use('/auth', authRoutes);
app.use('/reports', reportRoutes);

// Start server
const PORT = process.env.PORT || 5000; // Use the port from environment variable or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
