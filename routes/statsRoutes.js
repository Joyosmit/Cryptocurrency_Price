const express = require('express');
const { getStats } = require('../controllers/statsController');

const router = express.Router();

// GET /stats
router.get('/stats', getStats);

module.exports = router;
