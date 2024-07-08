const express = require('express');
const router = express.Router();
const { updateUserProfile } = require('../controllers/profileController');

router.put('/', updateUserProfile);

module.exports = router;
