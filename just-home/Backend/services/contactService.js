const Contact = require('../models/contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

const contactService = async (name, email, message) => {
  try {
    if (!email || !message) {
      return{
        status: 400,
        msg: "Both email and message fields are required!"
      };
    }

    //check total messages count from one mail
    const messageCount = await Contact.countDocuments({email});
    if(messageCount >= 3){
      return {
        status: 429, //too many requests
        msg: "You have reached the maximum limit of 3 messages!"
      }
    }
    
    //add new mail 
    const newMessage = new Contact({
      name,
      email,
      message
    });
  
    await newMessage.save();

    // Nodemailer Configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD 
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, 
      replyTo: email, 
      subject: `New contact message from ${name}`, 
      text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      status: 201,
      msg: "Your message has been sent successfully. Owner will contact you soon!"
    } 
  } catch (error) {
    throw error
  }
}

module.exports = contactService;