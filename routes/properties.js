const express = require('express');
const router = express.Router();
const propertyCtrl = require('../controllers/properties');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/properties'

// GET /properties (display all properties)
router.get('/', propertyCtrl.index);

module.exports = router;
