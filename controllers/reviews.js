const review = require('../models/review');
const Review = require('../models/review');

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query for a movie with a
  // review nested within an array
  Review.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function(movie) {
    if (!review) return res.redirect('/reviews');
    review.reviews.remove(req.params.id);
    review.save().then(function() {
      res.redirect(`/reviews/${review._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}

function create(req, res) {
  Review.findById(req.params.id, function(err, review) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    movie.reviews.push(req.body);
    movie.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/reviews/${review._id}`);
    });
  });
}
