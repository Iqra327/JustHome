const cloudinary = require('cloudinary').v2;
const cloudinaryConfig = require('../utils/cloudinary');

const uploadImage = async (imagePath) => {
  try {
    cloudinaryConfig();
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "Just Home",
    });
  
    return result; 
  } catch (error) {
    console.log(error);
  }
}

const deleteImageFromCloudinary = async (imageId) => {
  try {
    cloudinaryConfig();
    await cloudinary.uploader.destroy(imageId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  uploadImage,
  deleteImageFromCloudinary
};