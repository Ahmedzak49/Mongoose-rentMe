const express = require('express');
const router = express.Router();
const propertyCtrl = require('../controllers/properties');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/properties'

// GET /properties (display all properties)
router.get('/', propertyCtrl.index);
// Get/properties/new (display a form for entering a new property)
router.get('/new', ensureLoggedIn, propertyCtrl.new);
// POST /properties (handle the new form being submitted)
router.post('/', ensureLoggedIn, propertyCtrl.create);



module.exports = router;
