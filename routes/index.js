var express = require('express');
var router = express.Router();
var passport = require('passport');
var upload = require('../multer-config');


// Only do the following if fetch is not
// included in Node already and you installed
// node-fetch version 2
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {Title: 'indexPage'});
});
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    scope: ['profile', 'email'],
    // Optional
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    // Change to what's best for YOUR app
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    // Change path for your "landing" page
    res.redirect('/movies');
  });
});

// handle form submission for creating a new property
router.post('/', upload.single('photo'), function(req, res) {
  const property = new Property(req.body);
  if (req.file) {
    property.photo.data = req.file.buffer;
    property.photo.contentType = req.file.mimetype;
  }
  property.save(function(err) {
    if (err) return res.render('properties/new');
    res.redirect('/properties');
  });
});


module.exports = router;
