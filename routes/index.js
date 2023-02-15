var express = require('express');
var router = express.Router();
var passport = require('passport');


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

router.get('/oauth2callback', function (req, res, next) {
  const redirectTo = req.session.redirectTo;
  delete req.session.redirectTo;
  passport.authenticate(
    'google',
    {
      successRedirect: redirectTo || '/', //-> replace '/' as desired
      failureRedirect: '/'
    }
  )(req, res, next);  // Call the middleware returned by passport
});

router.get('/logout', function(req, res) {
  req.logout(function() {
    // Change path for your "landing" page
    res.redirect('/movies');
  });
});




module.exports = router;
