const Property = require('../models/property');

module.exports = {
  addReview,
};

async function addReview(req, res) {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send({ error: 'Property not found' });
    }

    property.reviews.push({
      author: req.user._id,
      rating: req.body.rating,
      review: req.body.review,
    });

    await property.save();

    res.send({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to add review' });
  }
}
