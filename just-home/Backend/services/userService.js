const User = require('../models/user');
const bcrypt = require('bcrypt');

const updateUserService = async (id, paramsId, newPassword) => {
  if(id !== paramsId){
    return {
      status: 401,
      message: "Unauthorized"
    }
  }

  try {
    let hashPassword;
    if(newPassword){
      hashPassword = await bcrypt.hash(newPassword, 10);
    }
    
    const updatedUser = await User.findByIdAndUpdate(paramsId, {
      $set: {
        password: hashPassword
      }
    },
    {new: true}
    );

    if(!updatedUser){
      return {
        status: 404,
        message: "User not found!"
      }
    }

    return {
      status: 200,
      message: "Your profile has been updated successfully!"
    }

  } catch (error) {
    throw error;
  }
}

module.exports = updateUserService;