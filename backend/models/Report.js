const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  details: String,
  location: String,
  evidence: String,
  status: { type: String, enum: ['Pending', 'Escalated', 'Resolved'], default: 'Pending' },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', ReportSchema);
