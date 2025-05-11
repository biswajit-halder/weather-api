const express = require('express');
const weatherControllers = require('../controllers/weatherControllers');

const router = express.Router();

router.get('/weather/:city', weatherControllers.getWeather);

module.exports = router;