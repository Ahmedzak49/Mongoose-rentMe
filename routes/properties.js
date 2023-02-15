const express = require('express');
const router = express.Router();
const propertyCtrl = require('../controllers/properties');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/properties'

// GET /properties (display all properties)
router.get('/', propertyCtrl.index);

// GEt /properties/new (display a form for entering a new property)
router.get('/new', ensureLoggedIn, propertyCtrl.new);

// GET /properties/:id (display a property)
router.get('/:id', propertyCtrl.show);

// GET /properties/:id/details (display details of property posted)
router.get('/:id/details', propertyCtrl.detail);

// POST /properties (handle the new form being submitted)
router.post('/', ensureLoggedIn, propertyCtrl.create);

// DELETE /properties/:id (handle delete request for a property)
router.delete('/:id', ensureLoggedIn, propertyCtrl.logDeleteRequest, propertyCtrl.delete);

module.exports = router;

