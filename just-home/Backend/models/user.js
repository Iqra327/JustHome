const mongoose = require('mongoose');
const validator = require('validator');

//created schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Please provide a valid email address!")
      }
    }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum:['user', 'admin'],
    default: 'user'
  },
  avatar: {
    type: String,
    required: false
  },
  avatarId: {
    type: String,
    required: false
  },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property'
  }]
}, {timestamps: true});

//create model
const User = mongoose.model("User", userSchema);

module.exports = User;