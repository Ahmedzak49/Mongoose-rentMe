const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/dltComments');
const ensureLoggedIn = require('../config/ensureLoggedIn');
// All routes 'starts with' / (root)

// POST /movies/:id/reviews
router.post('/reviews/:id/reviews', reviewsCtrl.create);
// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);



module.exports = router;
