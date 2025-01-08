const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//signup
const signupService = async (username, email, password) => {
  try {
    const existingUser = await User.findOne({email});
    if(existingUser){
      // return res.status(200).json({message: "User already exists"});  
      return {
        status: 409,
        message: "User already exists"
      }
    }
    //securing the password
    const hashpassword = await bcrypt.hash(password, 10); 
   
    //creating new user
    const user = new User({
      email, 
      username, 
      password: hashpassword
    });
    await user.save();
    return {
      status: 201,
      message: "Sign up successfully!"
    } 
  } catch (error) {
    console.error("Error in signupService:", error); 
    throw error
  }
}

//login
const loginService = async (email, password) => {
  try {
    const user = await User.findOne({email});
    if(!user){
     return {
      status: 404,
      message: "User Not Found!"
     }
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return{
        status: 401,
        message: "Invalid credentials"
      }
    }
  
    const token = jwt.sign(
      { 
        id: user._id, 
        username: user.username,
        role: user.role
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: '1h'}
    )
  
    return {
      status: 200,
      message: 'Login Successful!',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    } 
  } catch (error) {
    throw error;
  }
}

module.exports = { signupService, loginService };