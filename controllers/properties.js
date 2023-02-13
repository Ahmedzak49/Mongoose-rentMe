const Booking = require('../models/booking');

module.exports = {
    index,
};

function index(req, res) {
    Movie.find({}, function(err, rentMe) {
      res.render('movies/index', { title: 'rentMe', rentMe });
    })
  }

// create a new booking
exports.createBooking = (req, res) => {
  const newBooking = new Booking({
    property_id: req.body.property_id,
    guest_id: req.body.guest_id,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    num_guests: req.body.num_guests,
    price: req.body.price,
    currency: req.body.currency,
    message_to_host: req.body.message_to_host,
    status: "pending",
    created_at: new Date(),
    updated_at: new Date()
  });

  newBooking
    .save()
    .then(booking => res.json(booking))
    .catch(err => res.status(400).json({ error: "Failed to create booking" }));
};

// find a booking by its id
exports.findBookingById = (req, res) => {
  Booking.findById(req.params.id)
    .then(booking => res.json(booking))
    .catch(err => res.status(404).json({ error: "Booking not found" }));
};

// update the status of a booking
exports.updateBookingStatus = (req, res) => {
  Booking.findByIdAndUpdate(
    req.params.id,
    { $set: { status: req.body.status, updated_at: new Date() } },
    { new: true }
  )
    .then(booking => res.json(booking))
    .catch(err => res.status(400).json({ error: "Failed to update booking status" }));
};

// delete a booking
exports.deleteBooking = (req, res) => {
  Booking.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => res.status(400).json({ error: "Failed to delete booking" }));
};
