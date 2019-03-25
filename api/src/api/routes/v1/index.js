const express = require('express');
const authRoutes = require('../../services/typeform/typeform.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/typeform
 */
router.use('/typeform', authRoutes);

module.exports = router;
