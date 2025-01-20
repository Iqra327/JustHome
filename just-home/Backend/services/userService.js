const User = require('../models/user');
const bcrypt = require('bcrypt');
const path = require('path');

const updateUserService = async (id, userId, newPassword, profileImg) => {
  if(id !== userId){
    return {
      status: 401,
      message: "Unauthorized"
    }
  }

  try {
    const updateFields = {};
    if (newPassword) {
      const hashPassword = await bcrypt.hash(newPassword, 10);
      updateFields.password = hashPassword;
    }
    if (profileImg) {
      updateFields.avatar = profileImg;
    }
    
    console.log('Profile Image:', profileImg);
    const updatedUser = await User.findByIdAndUpdate(userId, {$set: updateFields},
    {new: true}
    );

    if(!updatedUser){
      return {
        status: 404,
        message: "User not found!"
      }
    }

    const avatarUrl = `http://localhost:5000/${updatedUser.avatar.replace(/\\/g, '/')}`;

    return {
      status: 200,
      message: "Your profile has been updated successfully!",
      avatar: avatarUrl
    }

  } catch (error) {
    throw error;
  }
}

module.exports = updateUserService;