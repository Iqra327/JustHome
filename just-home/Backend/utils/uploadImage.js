const cloudinary = require('cloudinary').v2;
const cloudinaryConfig = require('../utils/cloudinary');

const uploadImage = async (imagePaths) => {
  try {
    cloudinaryConfig();
    if (!Array.isArray(imagePaths)) {
      imagePaths = [imagePaths];
    }

    const uploadPromises = imagePaths.map((imagePath) => {
      return cloudinary.uploader.upload(imagePath, {
        folder: "Just Home",
      });
    });

    const result = await Promise.all(uploadPromises);

    return result.length === 1 ? result[0] : result;
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