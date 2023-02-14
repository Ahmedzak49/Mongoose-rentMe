const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const Comment = require('./comment');

const propertySchema = new Schema({
  title: {
  type: String,
  required: true,
  },
  description: {
  type: String,
  required: true,
  },
  type: {
  type: String,
  enum: ['Apartment', 'House', 'Condo', 'TownHouse'],
  required: true,
  },
  address: {
  type: String,
  required: true,
  },
  city: {
  type: String,
  required: true,
  },
  state: {
  type: String,
  required: true,
  },
  zip: {
  type: String,
  required: true,
  },
  price: {
  type: Number,
  required: true,
  min: 0,
  },
  beds: {
  type: Number,
  required: true,
  min: 1,
  },
  baths: {
  type: Number,
  required: true,
  min: 1,
  },

  photo: {
  type: String,
  required: true,
  },
  owner: {
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: true,
  },
  createdAt: {
  type: Date,
  default: Date.now,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],

  });



const Property = mongoose.model('property', propertySchema);

module.exports = Property;
