const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const propertySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Apartment', 'House', 'Condo', 'TownHouse'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  beds: {
    type: Number,
    required: true,
    min: 1
  },
  baths: {
    type: Number,
    required: true,
    min: 1
  },
  photo: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
  userName: String,
  userAvatar: String,

});

module.exports = mongoose.model('property', propertySchema);
