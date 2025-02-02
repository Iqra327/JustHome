const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  locationURL: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  imagesId: {
    type: Array,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  beds: {
    type: Number,
    required: true
  },
  baths: {
    type: Number,
    required: true
  },
  bedrooms : {
    type: Number,
    required: true
  },
  amenities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Amenity'
  }],
}, {timestamps: true});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;