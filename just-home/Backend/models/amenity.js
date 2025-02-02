const mongoose = require('mongoose');

const amenitySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  iconURL:{
    type: String,
    required: true
  },
  iconId:{
    type: String,
    required: true
  }
}, {timestamps: true});

const Amenity = mongoose.model("Amenity", amenitySchema);

module.exports = Amenity;