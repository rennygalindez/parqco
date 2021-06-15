const vehicleRoutes = require('./vehicles');
const express = require('express');
const router = express.Router();

router.use(vehicleRoutes);

module.exports = router;
