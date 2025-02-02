const User = require('../models/user');
const bcrypt = require('bcrypt');
const fs = require('fs');
const {uploadImage, deleteImageFromCloudinary} = require("../utils/uploadImage");

// update password service
const updatePasswordService = async (id, userId, newPassword) => {
  console.log('new password: ',newPassword)
  if(id !== userId){
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
    
    const updatedUser = await User.findByIdAndUpdate(userId, {
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
      message: "Your password has been updated successfully!"
    }

  } catch (error) {
    throw error;
  }
}

//update profile picture service
const updateProfileService = async (id, userId, image, avatarId ) => {
  if(id !== userId){
    return {
      status: 401,
      message: "Unauthorized"
    }
  }

  if (!image) {
    return {
      status: 400,
      message: 'Please upload a file'
  }
  }

  if(avatarId){
    await deleteImageFromCloudinary(avatarId);
  }

  try {
    console.log('Starting image upload...');
   //uploading img to cloudinary and getting url back
    const {secure_url, public_id} = await uploadImage(image);
    console.log('Image uploaded successfully:', { secure_url, public_id });

    //deleting the image file from directory by providing it's path
    fs.unlinkSync(image);

    const updatedUser = await User.findByIdAndUpdate(userId, {
      $set: {
        avatar: secure_url,
        avatarId: public_id
      }
    },{new: true}
    );

    if(!updatedUser){
      return {
        status: 404,
        message: "User not found!",
      }
    }
  
    return {
      status: 200,
      message: 'Your profile has been uploaded successfully!',
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        role: updatedUser.role,
        avatar: updatedUser.avatar,
        avatarId: updatedUser.avatarId
      },
    } 
  } catch (error) {
    console.error('Error in profile update service:', error);
    throw error;
  }
}

//remove profile service
const removeProfileService = async (id, userId, avatarId) => {
  if(id !== userId){
    return {
      status: 401,
      message: "Unauthorized"
    }
  }

  try {
    const user = await User.findById(userId);
    if(!user){
      return {
        status: 404,
        message: "User not found"
      }
    }

    if(avatarId){
      await deleteImageFromCloudinary(avatarId);
    }

    user.avatar = '';
    user.avatarId = '';
    user.save();

    return {
      status: 200,
      message: "Profile has been removed successfully"
    }

  } catch (error) {
   throw error 
  }
}


module.exports = {
  updatePasswordService,
  updateProfileService,
  removeProfileService
}