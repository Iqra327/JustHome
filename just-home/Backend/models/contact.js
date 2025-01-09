const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email!")
      }
    }
  },
  message: {
    type: String,
    required: true
  }
}, {timestamps: true})

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;