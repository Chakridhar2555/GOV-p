const express = require('express');
const Report = require('../models/Report');
const { authMiddleware } = require('../utils/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { details, location, evidence } = req.body;
    const newReport = new Report({ userId: req.user.userId, details, location, evidence });
    await newReport.save();
    res.status(201).send('Report filed');
  } catch (error) {
    res.status(500).send('Error filing report');
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const reports = await Report.find({ userId: req.user.userId });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).send('Error fetching reports');
  }
});

module.exports = router;
