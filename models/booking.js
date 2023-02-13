const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    _id: ObjectId, // unique identifier for the booking
    property_id: ObjectId, // identifier of the property being booked
    guest_id: ObjectId, // identifier of the guest making the booking
    start_date: Date, // date the booking starts
    end_date: Date, // date the booking ends
    num_guests: Integer, // number of guests for the booking
    price: Integer, // total price of the booking
    currency: String, // currency used for the booking
    message_to_host: String, // message from guest to host
     status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"]
    }, // status of the booking
    created_at: Date, // date the booking was created
    updated_at: Date // date the booking was last updated
});

module.exports = mongoose.model('Booking', bookingSchema);
